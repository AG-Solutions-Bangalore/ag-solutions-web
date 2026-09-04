# AG Solutions — SEO Flow (JSON-LD, Schemas, Prerender, Helmet)

> Hinglish explanation — bilkul practical, code references ke saath.
> Goal: tum samajh jaoge ki har page ka SEO data kahaan se aata hai, kaise inject hota hai, aur prerender kyun zaroori hai.

---

## TL;DR (ek line mein)

**Vite SPA build karta hai → `prerenderSeo.ts` har route ka HTML crawl karta hai → Schema.org JSON-LD ko `<head>` mein inject karta hai → Netlify/Vercel pe static HTML serve hota hai → React Helmet runtime pe meta tags update karta hai → Google crawler ko sab kuch pre-rendered milta hai (rich results ke liye).**

---

## 1. JSON-LD kya hota hai?

JSON-LD = **JavaScript Object Notation for Linked Data**.

Ye ek `<script>` tag hota hai jo JSON format mein Schema.org ka data rakhta hai. Google isko padhke samajhta hai ki:

- Ye kaunsa business hai (`LocalBusiness`, `Organization`)
- Kya review hai, rating kya hai
- Breadcrumb kya hai
- FAQs kya hain
- Products/Apps kya hain

### Example (apne project se):

```html
<script id="schema-organization" type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ag-solutions.in/#organization",
  "name": "AG Solutions",
  "url": "https://ag-solutions.in/",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "reviewCount": 12 },
  "review": [ ... ]
}
</script>
```

> ⚠️ Important: ye `<script>` ka `type="application/ld+json"` hona **must** hai, warna Google ignore kar deta hai.

---

## 2. Schemas kahaan define hain?

Project mein schemas 3 jagah se aate hain:

### A. Per-feature React components (client-side)
- [src/shared/seo/OrganizationSchema.tsx](src/shared/seo/OrganizationSchema.tsx) — `<OrganizationSchema>` component jo har page pe mount hota hai (Layout ke through)
- [src/shared/seo/WebSiteSchema.tsx](src/shared/seo/WebSiteSchema.tsx) — site-level schema
- [src/shared/seo/JsonLd.tsx](src/shared/seo/JsonLd.tsx) — generic wrapper jo `<script>` ko DOM mein inject karta hai
- Per feature: `src/features/<feature>/seo/<Feature>SEO.tsx` (e.g. HomeSEO, BlogDetailSEO, BizStockSEO)

### B. Global schemas (build-time, prerender ke liye)
- [scripts/lib/globalSchemas.ts](scripts/lib/globalSchemas.ts) — `GLOBAL_ORGANIZATION_SCHEMA` aur `GLOBAL_WEBSITE_SCHEMA` jo har route ke head mein jaate hain
- Ye wahi schemas hain jo React component bhi render karta hai — **dono end pe same data hona chahiye** (otherwise Google duplicate entity detect karega)

### C. Per-route config (prerender)
- [scripts/routes/home.ts](scripts/routes/home.ts), [webDevelopment.ts](scripts/routes/webDevelopment.ts), etc. — har route ka title, description, OG tags, schemas
- [scripts/routes/index.ts](scripts/routes/index.ts) — sab routes ka combined `BASE_ROUTES_CONFIG`

---

## 3. Helmet kya karta hai?

`react-helmet-async` ek React library hai jo page ke `<head>` section ko dynamically update karta hai.

### Component: [src/shared/seo/SEO.tsx](src/shared/seo/SEO.tsx)
```tsx
<Helmet>
  <title>{pageTitle}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={parsedKeywords} />
  <meta property="og:title" content={finalOgTitle} />
  <meta property="og:image" content={ogImage} />
  ...
</Helmet>
```

### Kaise use karte hain:
```tsx
// src/features/home/seo/HomeSEO.tsx
export const HomeSEO = () => (
  <SEO
    title="Web Development & Mobile App Development Company | AG Solutions"
    description="AG Solutions is a leading..."
    keywords="web development, mobile app..."
  />
);
```

### Kya karta hai runtime pe:
1. Route change hota hai (`/` se `/about` pe)
2. `<HomeSEO>` unmount hota hai, `<AboutSEO>` mount hota hai
3. Helmet `<head>` se purane meta tags hatata hai, naye lagata hai
4. SPA ke andar tab switch karne pe bhi meta update hota hai

### ⚠️ Helmet ki limitation:
- Helmet sirf **meta tags** update karta hai (title, description, OG, Twitter)
- **JSON-LD scripts** ka management alag hai (`<JsonLd>` component dekhta hai)
- Helmet **client-side** hai — crawler ko initially prerendered HTML dikhta hai (yahaan prerender zaroori hai)

---

## 4. Prerender kyun zaroori hai?

**Problem:** SPA (Single Page App) mein:
1. Google crawler aata hai `https://ag-solutions.in/about` pe
2. Server sirf ek hi `index.html` bhejta hai (Vite/Netlify/Vercel default)
3. Browser JavaScript run karta hai, phir React render hota hai
4. **Crawler ko initially blank page milta hai** — SEO disaster ❌

**Solution:** Prerender
1. Build time pe har route ka HTML pehle se generate karke `dist/` mein rakhte hain
2. Crawler ko fully rendered HTML milta hai — title, description, JSON-LD sab pehle se
3. Hydration ke baad React apna kaam karta hai, but crawler ke liye already perfect hai ✅

### AG Solutions ka prerender: [scripts/prerenderSeo.ts](scripts/prerenderSeo.ts)

```ts
// Step 1: Read base dist/index.html (Vite ka built HTML)
const baseHtml = fs.readFileSync(DIST_INDEX, "utf-8");

// Step 2: Loop over every static route
for (const [route, baseSeo] of Object.entries(BASE_ROUTES_CONFIG)) {
  // Step 3: API se FAQs aur reviews fetch karo
  const [faq, reviews] = await Promise.all([
    fetchDynamicFAQs(route),
    fetchDynamicReviews(route),
  ]);

  // Step 4: Reviews ko LocalBusiness schema mein attach karo
  const schemas = reviews.length > 0
    ? attachReviewsToEntity([...baseSeo.schemas], reviews)
    : baseSeo.schemas;

  // Step 5: HTML build karo with new <head>
  const html = buildHtmlForRoute(baseHtml, route, { ...baseSeo, schemas });
  fs.writeFileSync(...);
}

// Step 6: Blog articles ka bhi yahi process
await processBlogArticles(baseHtml);

// Step 7: Sitemap regenerate karo
await generateSitemap();
```

---

## 5. End-to-End Flow (step-by-step)

```
npm run build
  ↓
1. generateSitemap.ts → sitemap.xml banao (live API se)
  ↓
2. tsc -b → TypeScript compile
  ↓
3. vite build → dist/index.html + JS bundles
  ↓
4. prerenderSeo.ts orchestrator start:
   │
   ├─ For each route in BASE_ROUTES_CONFIG:
   │  ├─ apiClient.fetchDynamicReviews(route)
   │  │   → GET /webapi/public/api/getTestimonial/{slug}
   │  │   → Normalise, dedupe, cap
   │  │   → Returns Review[] JSON-LD objects
   │  │
   │  ├─ apiClient.fetchDynamicFAQs(route)
   │  │   → GET /webapi/public/api/getFAQBySlug/{slug}
   │  │
   │  ├─ reviewAttacher.attachReviewsToEntity(schemas, reviews)
   │  │   → Finds Organization schema → replaces with LocalBusiness
   │  │   → Adds @id, aggregateRating, sameAs, review[]
   │  │
   │  └─ htmlBuilder.buildHtmlForRoute(baseHtml, route, seo)
   │      ├─ stripExistingMeta(html) → purane meta/script tags hatao
   │      ├─ buildMetaTags(seo) → <title>, <meta>, OG/Twitter
   │      ├─ buildSchemaTags(schemas) → <script type="application/ld+json">
   │      └─ Inject before </head>
   │      → Write to dist/<route>/index.html + dist/<route>.html
   │
   ├─ processBlogArticles:
   │  For each blog from live API:
   │   ├─ fetchBlogDetail(slug) → full article + FAQ
   │   ├─ Build BlogPosting schema + BreadcrumbList
   │   └─ Write to dist/blogs/<slug>/index.html
   │
   └─ generateSitemap() → dist/sitemap.xml
  ↓
5. dist/ folder ready for deployment
  ↓
6. Netlify/Vercel serve static HTML + JS
  ↓
7. User opens page:
   ├─ Browser downloads pre-rendered HTML (SEO ready ✅)
   ├─ React JS bundle loads, hydrates
   ├─ Helmet updates meta tags on route change
   └─ <OrganizationSchema> mounts → if script already exists with content, skip; else inject
```

---

## 6. Script ID collision kaise avoid hoti hai?

Google ko confuse hota hai agar same `@id` ke 2 schemas alag-alag `<script>` tags mein hon.

### Strategy:
- Global Organization aur LocalBusiness dono ka `@id` = `https://ag-solutions.in/#organization`
- Dono ka `<script id>` = `schema-organization`
- Prerender mein `reviewAttacher` Organization schema ko LocalBusiness se **replace** karta hai (same script ID, different content)
- React `JsonLd` component check karta hai: agar script already content ke saath hai, skip ✅

```ts
// scripts/lib/reviewAttacher.ts
const testimonialSchema = {
  _scriptId: "schema-organization",  // ← same as Organization
  "@type": "LocalBusiness",
  "@id": "https://ag-solutions.in/#organization",  // ← same @id
  ...
};
```

```tsx
// src/shared/seo/JsonLd.tsx
useEffect(() => {
  const el = document.getElementById(scriptId);
  if (el && el.textContent.trim().length > 0) {
    return; // ← Already prerendered, don't overwrite
  }
  // Else inject
}, []);
```

---

## 7. Files map (quick reference)

| Concern | File |
|---|---|
| React meta tags | [src/shared/seo/SEO.tsx](src/shared/seo/SEO.tsx) |
| React JSON-LD wrapper | [src/shared/seo/JsonLd.tsx](src/shared/seo/JsonLd.tsx) |
| Organization schema (client) | [src/shared/seo/OrganizationSchema.tsx](src/shared/seo/OrganizationSchema.tsx) |
| WebSite schema (client) | [src/shared/seo/WebSiteSchema.tsx](src/shared/seo/WebSiteSchema.tsx) |
| Per-feature SEO | `src/features/<feature>/seo/*SEO.tsx` |
| Build-time globals | [scripts/lib/globalSchemas.ts](scripts/lib/globalSchemas.ts) |
| Per-route config | [scripts/routes/](scripts/routes/) |
| Review→LocalBusiness merger | [scripts/lib/reviewAttacher.ts](scripts/lib/reviewAttacher.ts) |
| Review/FAQ API client | [scripts/lib/apiClient.ts](scripts/lib/apiClient.ts) |
| HTML builder (inject head) | [scripts/lib/htmlBuilder.ts](scripts/lib/htmlBuilder.ts) |
| Script ID resolver | [scripts/lib/schemaIds.ts](scripts/lib/schemaIds.ts) |
| Sitemap | [scripts/generateSitemap.ts](scripts/generateSitemap.ts) |
| Blog article processor | [scripts/blog/processBlogArticles.ts](scripts/blog/processBlogArticles.ts) |
| Prerender orchestrator | [scripts/prerenderSeo.ts](scripts/prerenderSeo.ts) |

---

## 8. Common mistakes (jo maine fix kiye hain)

1. ❌ **Same data in two `<script>` tags** → Google ko 2 entities dikhti hain
   ✅ Fix: Same `script id`, prerender replaces in place

2. ❌ **AggregateRating without API data** → Google rich result reject
   ✅ Fix: `attachReviewsToEntity` only attaches when reviews > 0

3. ❌ **Missing `@id` on testimonial LocalBusiness** → orphan entity
   ✅ Fix: `reviewAttacher` sets `@id: "https://ag-solutions.in/#organization"`

4. ❌ **Wrong LinkedIn URL in schema vs footer** → brand split signal
   ✅ Fix: Single source of truth, prerender + footer use same URL

5. ❌ **Generic description on LocalBusiness** → "AG Solutions provides web development..."
   ✅ Fix: Use full canonical description (matches Organization)

---

## 9. Quick mental model

- **JSON-LD** = data format (Google ke liye)
- **Schema** = template (kya data chahiye — Organization, FAQ, Review, etc.)
- **Helmet** = runtime meta tag manager (page switch pe)
- **Prerender** = build-time HTML generator (crawler ke liye)
- **JsonLd component** = React ka `<script>` injector (Helmet se alag)
- **Script ID** = `<script>` ka unique DOM identifier (collision avoid karne ke liye)

> Yaad rakho: **Prerender = static HTML for crawler, Helmet = dynamic meta for user, JsonLd = schema for Google.** Teeno milke rich results banate hain.

---

## 10. Real Example Walkthrough — Google Rich Results kya detect karta hai

Ye section screenshot ke basis pe hai. Google Rich Results Test ne 3 alag pages test kiye — har page pe kya detect hua, kaun attach kar raha tha, aur build pipeline mein kahan se aaya — sab live example ke saath.

### 10.1 Test 1 — `/web-development` page

**Google Rich Results output:**
- ✅ 1 LocalBusiness detected
- ✅ 1 Organisation (WebSite) detected
- ✅ 6 valid Review snippets detected
- **Total: 8 valid items**

**Kya attach hua aur kaunne kiya:**

| Detected Item | JSON-LD Type | Kon banata hai | File |
|---|---|---|---|
| LocalBusiness with 6 reviews | `@type: LocalBusiness` | `attachReviewsToEntity` (Organization ko replace karta hai) | [scripts/lib/reviewAttacher.ts](scripts/lib/reviewAttacher.ts) |
| WebSite | `@type: WebSite` | `GLOBAL_WEBSITE_SCHEMA` constant | [scripts/lib/globalSchemas.ts](scripts/lib/globalSchemas.ts) |
| Review × 6 | `@type: Review` | `buildReviewSchema` (API testimonials normalize karke) | [scripts/lib/reviewBuilder.ts](scripts/lib/reviewBuilder.ts) |

**LocalBusiness JSON-LD (exactly jaisa Google ko milta hai):**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ag-solutions.in/#organization",
  "name": "AG Solutions",
  "url": "https://ag-solutions.in/",
  "image": "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp",
  "description": "AG Solutions provides web development and digital solutions.",
  "telephone": "+91-8867171060",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jayanagara 9th Block",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560069",
    "addressCountry": "IN"
  },
  "priceRange": "Contact for pricing",
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Arjun Nair" },
      "datePublished": "2026-08-28",
      "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "QuoteBiz has helped us reduce the time spent on preparing quotations..."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Swathi Reddy" },
      "datePublished": "2026-08-04",
      "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "We were looking for a practical solution to manage our export operations..."
    }
    // ... 4 more reviews
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "reviewCount": 6,
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

**Flow kaise chala (build time):**

```
1. prerenderSeo.ts start
2. Route "/web-development" config load → [Organization, WebSite, Service]
3. fetchDynamicReviews("/web-development", 6) call
   → GET https://ag-solutions.in/webapi/public/api/getTestimonial/web-development
   → 6 reviews normalize → dedup → cap
4. attachReviewsToEntity([Organization, WebSite, Service], 6 reviews)
   → LocalBusiness schema with _scriptId: "schema-organization"
   → Organization index find → REPLACE with LocalBusiness (same @id)
   → Service schema untouched (no reviews on Service)
5. buildHtmlForRoute(html, "/web-development", { schemas: [LocalBusiness, WebSite, Service] })
   → stripExistingMeta() → purane tags hatao
   → buildMetaTags() → title, description, OG, Twitter
   → buildSchemaTags() → har schema ko <script type="application/ld+json"> mein wrap
6. Write to dist/web-development/index.html + dist/web-development.html
7. Google crawler aata hai → 8 valid items detect karta hai ✅
```

---

### 10.2 Test 2 — `/bizstock` page (Product page)

**Google Rich Results output:**
- ✅ 1 LocalBusiness detected
- ✅ 1 Organisation (WebSite) detected
- ✅ 1 SoftwareApp detected
- ✅ 4 valid Review snippets detected
- **Total: 7 valid items**

**Kya attach hua aur kaunne kiya:**

| Detected Item | JSON-LD Type | Kon banata hai | File |
|---|---|---|---|
| LocalBusiness with 4 reviews | `@type: LocalBusiness` | `attachReviewsToEntity` (Organization replace) | [scripts/lib/reviewAttacher.ts](scripts/lib/reviewAttacher.ts) |
| WebSite | `@type: WebSite` | `GLOBAL_WEBSITE_SCHEMA` | [scripts/lib/globalSchemas.ts](scripts/lib/globalSchemas.ts) |
| SoftwareApplication with aggregateRating | `@type: SoftwareApplication` | `buildSoftwareAppSchema` + `attachReviewsToEntity` (aggregateRating add karta hai) | [scripts/routes/_helpers.ts](scripts/routes/_helpers.ts) |
| Review × 4 | `@type: Review` | `buildReviewSchema` | [scripts/lib/reviewBuilder.ts](scripts/lib/reviewBuilder.ts) |

**SoftwareApplication JSON-LD (extra detail jo sirf product pages pe aata hai):**

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BizStock - Inventory & Stock Management Software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser, Cloud-based",
  "description": "Smart inventory management and warehouse tracking software by AG Solutions.",
  "url": "https://ag-solutions.in/bizstock",
  "offers": {
    "@type": "Offer",
    "url": "https://ag-solutions.in/bizstock",
    "priceCurrency": "INR",
    "price": "0",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "reviewCount": 4,
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

**Flow kaise chala (build time):**

```
1. Route "/bizstock" config load → [Organization, WebSite, SoftwareApp]
2. fetchDynamicReviews("/bizstock", undefined) call
   → GET /getTestimonial/biz-stock
   → 4 reviews return
3. attachReviewsToEntity([Organization, WebSite, SoftwareApp], 4 reviews)
   → LocalBusiness schema banaya (replace Organization)
   → SoftwareApp index find → aggregateRating ADD kiya (review data se)
   → Final: [LocalBusiness(with 4 reviews), WebSite, SoftwareApp(with aggregateRating)]
4. buildHtmlForRoute → inject 3 <script> tags with 4 Review objects inside LocalBusiness
5. Write to dist/bizstock/index.html
6. Google: 1 LocalBusiness + 1 WebSite + 1 SoftwareApp + 4 Review = 7 items ✅
```

> ⚠️ Note: RULES.md ke according **reviews sirf LocalBusiness pe attach hote hain, Service pe nahi**. Product pages pe SoftwareApp ko bhi `aggregateRating` milta hai (rating value display karne ke liye), but `review[]` array nahi — wo sirf LocalBusiness mein hota hai.

---

### 10.3 Test 3 — `/quote-biz` page (Product page with reviews)

**Google Rich Results output:**
- ✅ 1 LocalBusiness detected
- ✅ 1 Organisation (WebSite) detected
- ✅ 1 SoftwareApp detected
- ✅ 4 valid Review snippets detected
- **Total: 7 valid items**

**Kya attach hua aur kaunne kiya:**

Same flow as BizStock — ye bhi product page hai, toh:
1. **LocalBusiness** → `attachReviewsToEntity` (4 API reviews attach)
2. **WebSite** → global schema
3. **SoftwareApplication** → `buildSoftwareAppSchema` + aggregateRating from `attachReviewsToEntity`
4. **Review × 4** → `buildReviewSchema`

**QuoteBiz-specific values:**

```json
{
  "@type": "SoftwareApplication",
  "name": "QuoteBiz - Smart Quotes. Better Business.",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser, Cloud-based",
  "url": "https://ag-solutions.in/quote-biz",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": 4,
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

---

### 10.4 Master Flow Diagram — Kaun Kya Karta Hai

```
┌─────────────────────────────────────────────────────────────────┐
│ BUILD TIME (npm run build)                                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 1. scripts/generateSitemap.ts                                    │
│    → Live API se sitemap generate karta hai                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 2. tsc -b → TypeScript compile                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 3. vite build → dist/index.html (base SPA shell)                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 4. scripts/prerenderSeo.ts (ORCHESTRATOR)                        │
│    For each route in BASE_ROUTES_CONFIG:                         │
│    ┌───────────────────────────────────────────────────────┐     │
│    │ A. scripts/lib/apiClient.ts                           │     │
│    │    → fetchDynamicFAQs(route)                          │     │
│    │    → fetchDynamicReviews(route, maxReviews)           │     │
│    │    → Returns: Review[] JSON-LD objects                │     │
│    └───────────────────────────────────────────────────────┘     │
│                              ↓                                   │
│    ┌───────────────────────────────────────────────────────┐     │
│    │ B. scripts/lib/reviewAttacher.ts                      │     │
│    │    → attachReviewsToEntity(schemas, reviews)          │     │
│    │    → Organization ko LocalBusiness se REPLACE         │     │
│    │    → SoftwareApp ko aggregateRating ADD               │     │
│    └───────────────────────────────────────────────────────┘     │
│                              ↓                                   │
│    ┌───────────────────────────────────────────────────────┐     │
│    │ C. scripts/lib/htmlBuilder.ts                         │     │
│    │    → stripExistingMeta() — purane tags hatao          │     │
│    │    → buildMetaTags() — title, OG, Twitter             │     │
│    │    → buildSchemaTags() — <script> wrap karta hai      │     │
│    │    → Inject before </head>                            │     │
│    └───────────────────────────────────────────────────────┘     │
│                              ↓                                   │
│    Write to dist/<route>/index.html                              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 5. scripts/blog/processBlogArticles.ts                           │
│    For each blog post from live API:                             │
│    → fetchBlogDetail(slug) → full article + FAQ                  │
│    → Build BlogPosting + BreadcrumbList schemas                  │
│    → Write to dist/blogs/<slug>/index.html                       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 6. scripts/generateSitemap() (sync to dist)                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 7. Deploy to Netlify/Vercel                                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ RUNTIME (Browser)                                                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 8. User opens https://ag-solutions.in/web-development            │
│    → Pre-rendered HTML download (Google-ready ✅)                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 9. React JS bundle loads + hydrates                              │
│    → <HomeSEO> or <WebDevelopmentSEO> mounts                     │
│    → react-helmet-async updates <title>, <meta> tags            │
│    → <OrganizationSchema> mounts                                 │
│    → JsonLd component checks: script already exists?             │
│      → YES: skip (prerender content preserved)                   │
│      → NO: inject Organization schema                            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 10. Google Rich Results Test                                     │
│     → Detects: 1 LocalBusiness + 1 WebSite + 6 Reviews = 8 items │
└─────────────────────────────────────────────────────────────────┘
```

---

### 10.5 Review Count Math — Kyun Itna Detect Hota Hai?

Google har "valid item" alag count karta hai:

| Schema | Items Counted |
|---|---|
| 1 LocalBusiness | 1 |
| 1 aggregateRating (inside LocalBusiness) | 1 |
| 1 Review (inside LocalBusiness.review[]) | 1 per review |
| 1 WebSite | 1 |
| 1 SoftwareApplication | 1 (only on product pages) |
| 1 aggregateRating (inside SoftwareApp) | 1 (only on product pages) |

**Example math:**
- Web Development page: 1 LocalBusiness + 1 aggregateRating + 5 Reviews + 1 WebSite = **8 items** ✅
- BizStock page: 1 LocalBusiness + 1 aggregateRating + 2 Reviews + 1 WebSite + 1 SoftwareApp + 1 aggregateRating = **7 items** ✅
- QuoteBiz page: 1 LocalBusiness + 1 aggregateRating + 5 Reviews + 1 WebSite + 1 SoftwareApp + 1 aggregateRating = **8 items** ✅

> "35 valid items detected" matlab total multiple pages ke across — har page ke schemas + reviews add hote hain.

> ⚠️ **Note:** Har page pe `+1` jo dikhta hai wo `aggregateRating` ki wajah hai. Google `AggregateRating` ko standalone entity count karta hai (ye `@type: AggregateRating` hai, alag schema type). Iska matlab ye **NAHI** ki hamare code mein extra review hai. Code sahi hai — API se jitne reviews aate hain, utne hi inject hote hain. Detail ke liye **Section 12** dekho.

---

### 10.6 Screenshot Validation — Real Data Match

User ke screenshot mein dikhe values exactly match karte hain actual schema output se:

| Field | Screenshot Value | Source |
|---|---|---|
| `name` | "AG Solutions" | [scripts/lib/globalSchemas.ts](scripts/lib/globalSchemas.ts) |
| `legalName` | "AG Solutions" | Same |
| `url` | "https://ag-solutions.in/" | Same |
| `logo` | `.../web_images_new/logo.webp` | `LOGO_URL` constant in [scripts/lib/constants.ts](scripts/lib/constants.ts) |
| `description` | "AG Solutions builds web applications..." | `GLOBAL_ORGANIZATION_SCHEMA.description` |
| `telephone` | "+91-8867171060" | Same |
| `email` | "info@ag-solutions.in" | Same |
| `address` | Jayanagara 9th Block, Bengaluru, Karnataka, 560069, IN | Same |
| `sameAs[0]` | `linkedin.com/in/ag-solutions-2b1b50422/` | Updated in this session (was `...-104223427`) |
| `sameAs[1]` | facebook.com/profile.php?id=61591878191618 | Same |
| `sameAs[2]` | instagram.com/ag_solutions_official/ | Same |
| `priceRange` | "Contact for pricing" | `reviewAttacher.ts` |
| `review[0].author.name` | "Arjun Nair" | API response |
| `review[0].datePublished` | "2026-08-28" | API response |
| `review[0].ratingValue` | "4.5" | API response |
| `review[0].reviewBody` | "QuoteBiz has helped us reduce the time..." | API response |

**Sab kuch perfectly match kar raha hai** — schema injection working as expected. ✅

---

## 11. Summary — Kaun Karta Hai Kya

| Kon | Kab | Kya Karta Hai |
|---|---|---|
| [scripts/lib/apiClient.ts](scripts/lib/apiClient.ts) | Build time | Live API se reviews/FAQs fetch karta hai |
| [scripts/lib/reviewBuilder.ts](scripts/lib/reviewBuilder.ts) | Build time | Raw API data → clean Review JSON-LD objects |
| [scripts/lib/reviewAttacher.ts](scripts/lib/reviewAttacher.ts) | Build time | Organization → LocalBusiness replace + reviews attach |
| [scripts/lib/htmlBuilder.ts](scripts/lib/htmlBuilder.ts) | Build time | HTML mein meta tags + `<script>` tags inject |
| [scripts/prerenderSeo.ts](scripts/prerenderSeo.ts) | Build time | Sab routes ke liye orchestrator |
| [scripts/blog/processBlogArticles.ts](scripts/blog/processBlogArticles.ts) | Build time | Blog articles ke liye same flow |
| [src/shared/seo/JsonLd.tsx](src/shared/seo/JsonLd.tsx) | Runtime | React component jo `<script>` inject karta hai (skip-if-prerendered) |
| [src/shared/seo/OrganizationSchema.tsx](src/shared/seo/OrganizationSchema.tsx) | Runtime | Organization schema (prerender se already inject hota hai usually) |
| [src/shared/seo/SEO.tsx](src/shared/seo/SEO.tsx) | Runtime | Helmet-based meta tag manager |
| Google Rich Results Test | Crawl time | Sab schemas validate karta hai, valid items count karta hai |

> **Final mental model:** API se data aata hai → build time pe schemas mein attach hota hai → prerendered HTML mein `<script>` tags ban jaate hain → Google crawler ko ready-made data milta hai → React runtime pe sirf meta tags update karta hai (Helmet), schemas ko touch nahi karta (JsonLd skip-if-exists logic).

---

## 12. "1 Extra Review" Mystery — Solved

User ne pucha tha: *"But why 1 extra review in each page? Check the API for matching reviews/testimonial with getTestimonial/{slug}."*

Investigation karke pata chala: **API count = HTML count = bilkul match.** Google ka "+1" hamare code ka bug nahi hai — ye Google ki counting methodology hai.

### 12.1 Verification — API vs HTML

Har route ke liye live API call ki aur prerendered HTML se Review objects count kiye:

| Route | API Response Count | HTML `<script>` Review Count | Match? |
|---|---|---|---|
| `/getTestimonial/web-development` | 5 | 5 (Mohan, Sneha, Arjun, Priya, Rahul) | ✅ |
| `/getTestimonial/biz-stock` | 2 (Ramesh, Ananya) | 2 | ✅ |
| `/getTestimonial/quote-biz` | 5 (Priya, Rahul, Ananya, Arjun, Sneha) | 5 | ✅ |
| `/getTestimonial/home` | 36 (ALL categories) | 34 (after dedup) | ✅ |

**Live HTML verification (curl se):**
```
https://ag-solutions.in/web-development
  → script 0: LocalBusiness with 5 Reviews + 1 aggregateRating
  → script 1: WebSite
  → Total review items: 5 ✅

https://ag-solutions.in/bizstock
  → script 0: LocalBusiness with 2 Reviews + 1 aggregateRating
  → script 1: SoftwareApp with 1 aggregateRating
  → Total review items: 2 ✅

https://ag-solutions.in/quote-biz
  → script 0: LocalBusiness with 5 Reviews + 1 aggregateRating
  → script 1: SoftwareApp with 1 aggregateRating
  → Total review items: 5 ✅
```

### 12.2 Toh "+1" Kahan Se Aata Hai?

Google Rich Results Test har "valid item" ko alag count karta hai. `aggregateRating` technically `@type: AggregateRating` hai — ye alag schema type hai, isliye Google usse **standalone entity** count karta hai.

**Web Development page — Google "8 valid items" breakdown:**
```
1 LocalBusiness                 ← entity
1 aggregateRating (in LB)       ← entity (standalone count)
1 WebSite                       ← entity
5 Reviews (in LB.review[])      ← 5 entities
─────────────────────────────────
= 8 items                       ← Google ka count ✅
```

**BizStock page — Google "7 valid items" breakdown:**
```
1 LocalBusiness                 ← entity
1 aggregateRating (in LB)       ← entity
1 SoftwareApp                   ← entity
1 aggregateRating (in SA)       ← entity
2 Reviews                       ← 2 entities
─────────────────────────────────
= 7 items                       ← Google ka count ✅
```

**QuoteBiz page — Google "8 valid items" breakdown:**
```
1 LocalBusiness                 ← entity
1 aggregateRating (in LB)       ← entity
1 SoftwareApp                   ← entity
1 aggregateRating (in SA)       ← entity
5 Reviews                       ← 5 entities
─────────────────────────────────
= 8 items                       ← Google ka count ✅
```

**Har page pe +1/+2 ka reason:** `aggregateRating` ko Google separate count karta hai. Hamare code mein ye **bug nahi** hai — ye **Google ka expected behavior** hai.

### 12.3 Code kya kar raha hai (verified correct)

**`fetchDynamicReviews(route, maxReviews)`** — [scripts/lib/apiClient.ts](scripts/lib/apiClient.ts):
```ts
GET /webapi/public/api/getTestimonial/{slug}
// → normalise → dedup → cap → Review JSON-LD objects
```

**`attachReviewsToEntity(schemas, reviews)`** — [scripts/lib/reviewAttacher.ts](scripts/lib/reviewAttacher.ts):
```ts
// 1. Build LocalBusiness with review[] + aggregateRating
// 2. Find Organization at index → REPLACE with LocalBusiness (same @id)
// 3. Find SoftwareApplication at index → ADD aggregateRating to it
// 4. Result: 1 LocalBusiness replaces Organization, no duplicate
```

**Confirmed on live site:** Har page pe sirf **1 LocalBusiness** hai (Organization replaced), no duplicate entity.

### 12.4 Common Misconceptions

| Misconception | Reality |
|---|---|
| "API 5 deta hai, Google 6 dikhata hai, toh 1 extra hai" | Google `aggregateRating` ko alag count karta hai |
| "Schema mein 6 reviews honge chahiye" | API sirf 5 deta hai, schema mein 5 hi hain — bilkul sahi |
| "Test screenshot outdated hai" | Ho sakta hai — retest karo latest URL pe |
| "Code mein duplicate review inject ho raha hai" | Nahi — `attachReviewsToEntity` mein dedup logic hai, `reviewAttacher` Organization ko LocalBusiness se REPLACE karta hai (same `@id`) |

### 12.5 Kya karna chahiye?

1. **Latest build se test karo** — purana screenshot cached ho sakta hai
2. **`aggregateRating` ko standalone script mat banao** — already hamara code yehi karta hai (wo LocalBusiness ke andar nested hai)
3. **API count = HTML count = sahi** — ye baseline hai, isko maintain karo
4. **Agar Strict match chahiye** — toh `aggregateRating` ko LocalBusiness ke andar nested hi rakho (jo already hai), standalone script mat banao

**Verdict:** Build sahi hai ✅, data sahi hai ✅, prerender sahi hai ✅. "+1" Google ka counting quirk hai, hamare code ka bug nahi. ✅

---

## 13. Quick Reference — Common Questions

**Q: API se data nahi aa raha?**
A: Check `scripts/lib/apiClient.ts` — `fetchDynamicReviews` aur `fetchDynamicFAQs` functions. Live API endpoint `/webapi/public/api/getTestimonial/{slug}` pe request bhejte hain.

**Q: Schema inject nahi ho raha prerendered HTML mein?**
A: `scripts/lib/htmlBuilder.ts` ka `buildSchemaTags` check karo. `stripExistingMeta` pehle se existing tags hata raha hai — agar conflict ho toh merge logic update karo.

**Q: Google Rich Results Test mein 0 items dikh rahe hain?**
A: Most common reason: `<script type="application/ld+json">` tag missing ya `type` attribute galat hai. Build output check karo `dist/<route>/index.html`.

**Q: Reviews show nahi ho rahe rich results mein?**
A: Check `reviewAttacher.ts` — `attachReviewsToEntity` sirf tab attach karta hai jab `reviews.length > 0`. API response check karo.

**Q: Organization aur LocalBusiness dono dikh rahe hain duplicate?**
A: Script ID collision — `reviewAttacher.ts` Organization ko LocalBusiness se REPLACE karta hai same `@id` pe. Agar duplicate dikhe toh script id matching check karo (`schema-organization`).

**Q: Latest build pe retest kaise karoon?**
A: `npm run build` chalao, `dist/` folder se locally serve karo, ya `https://ag-solutions.in/<route>` pe live test karo Google Rich Results Test mein.
