# Site Architecture & XML Sitemap Specification

**Domain:** `https://ag-solutions.in`  
**Sitemap Location:** `https://ag-solutions.in/sitemap.xml`  
**Robots.txt Declaration:** `Sitemap: https://ag-solutions.in/sitemap.xml`  
**Total Canonical URLs:** 34  
**Format Standard:** XML Sitemap Protocol 0.9 (W3C Datetime compliant)

---

## 1. URL Inventory & Hierarchy

### Core & Company Pages
| Path | Canonical URL | Purpose | Last Modified |
|---|---|---|---|
| `/` | `https://ag-solutions.in/` | Homepage / Hero & Overview | 2026-08-24 |
| `/about` | `https://ag-solutions.in/about` | About AG Solutions, Mission, Values | 2026-08-24 |
| `/portfolio` | `https://ag-solutions.in/portfolio` | Case Studies & Project Portfolio | 2026-08-24 |
| `/contacts` | `https://ag-solutions.in/contacts` | Contact Form & Company Locations | 2026-08-24 |

### Service Pages
| Path | Canonical URL | Purpose | Last Modified |
|---|---|---|---|
| `/services` | `https://ag-solutions.in/services` | Services Hub | 2026-08-24 |
| `/web-development` | `https://ag-solutions.in/web-development` | Web & Web App Development Services | 2026-08-24 |
| `/mobile-app-development` | `https://ag-solutions.in/mobile-app-development` | iOS & Android App Development Services | 2026-08-24 |
| `/digital-marketing` | `https://ag-solutions.in/digital-marketing` | SEO, SEM & Digital Marketing Services | 2026-08-24 |

### Product Pages
| Path | Canonical URL | Purpose | Last Modified |
|---|---|---|---|
| `/products` | `https://ag-solutions.in/products` | Software Products Directory | 2026-08-24 |
| `/export-biz` | `https://ag-solutions.in/export-biz` | Export Documentation & Compliance Software | 2026-08-24 |
| `/bizstock` | `https://ag-solutions.in/bizstock` | Inventory & Multi-Warehouse ERP Software | 2026-08-24 |
| `/ease-marketing` | `https://ag-solutions.in/ease-marketing` | WhatsApp Marketing & Automation Software | 2026-08-24 |

### Blog Directory & Dynamic Articles
| Path | Canonical URL | Category |
|---|---|---|
| `/blogs` | `https://ag-solutions.in/blogs` | Blog Listing & Search |
| `/blogs/why-mobile-apps-improve-customer-experience` | `https://ag-solutions.in/blogs/why-mobile-apps-improve-customer-experience` | Mobile App |
| `/blogs/how-mobile-apps-build-stronger-customer-loyalty` | `https://ag-solutions.in/blogs/how-mobile-apps-build-stronger-customer-loyalty` | Mobile App |
| `/blogs/why-mobile-apps-are-better-than-websites-for-engagement` | `https://ag-solutions.in/blogs/why-mobile-apps-are-better-than-websites-for-engagement` | Mobile App |
| `/blogs/how-mobile-apps-increase-sales-and-revenue` | `https://ag-solutions.in/blogs/how-mobile-apps-increase-sales-and-revenue` | Mobile App |
| `/blogs/why-mobile-apps-matter-for-modern-branding` | `https://ag-solutions.in/blogs/why-mobile-apps-matter-for-modern-branding` | Mobile App |
| `/blogs/mobile-apps-offer-better-customer-support` | `https://ag-solutions.in/blogs/mobile-apps-offer-better-customer-support` | Mobile App |
| `/blogs/mobile-apps-help-businesses-stay-competitive` | `https://ag-solutions.in/blogs/mobile-apps-help-businesses-stay-competitive` | Mobile App |
| `/blogs/mobile-apps-provide-valuable-insights-for-smarter-decisions` | `https://ag-solutions.in/blogs/mobile-apps-provide-valuable-insights-for-smarter-decisions` | Mobile App |
| `/blogs/how-mobile-apps-help-businesses-grow-faster` | `https://ag-solutions.in/blogs/how-mobile-apps-help-businesses-grow-faster` | Mobile App |
| `/blogs/why-every-business-needs-a-mobile-app-today` | `https://ag-solutions.in/blogs/why-every-business-needs-a-mobile-app-today` | Mobile App |
| `/blogs/web-applications-are-important-for-businesses-today` | `https://ag-solutions.in/blogs/web-applications-are-important-for-businesses-today` | Web Development |
| `/blogs/why-first-impressions-online-matter-more-than-ever` | `https://ag-solutions.in/blogs/why-first-impressions-online-matter-more-than-ever` | Web Development |
| `/blogs/your-website-is-your-247-salesperson` | `https://ag-solutions.in/blogs/your-website-is-your-247-salesperson` | Web Development |
| `/blogs/how-a-website-helps-you-reach-global-customers` | `https://ag-solutions.in/blogs/how-a-website-helps-you-reach-global-customers` | Web Development |
| `/blogs/why-a-website-is-the-heart-of-your-digital-marketing` | `https://ag-solutions.in/blogs/why-a-website-is-the-heart-of-your-digital-marketing` | Web Development |
| `/blogs/the-roi-of-investing-in-a-professional-website` | `https://ag-solutions.in/blogs/the-roi-of-investing-in-a-professional-website` | Web Development |
| `/blogs/why-seo-starts-with-a-strong-website` | `https://ag-solutions.in/blogs/why-seo-starts-with-a-strong-website` | Web Development |
| `/blogs/why-an-e-commerce-website-is-essential-for-retail-growth` | `https://ag-solutions.in/blogs/why-an-e-commerce-website-is-essential-for-retail-growth` | Web Development |
| `/blogs/common-mistakes-businesses-make-without-a-website` | `https://ag-solutions.in/blogs/common-mistakes-businesses-make-without-a-website` | Web Development |
| `/blogs/the-future-is-digital-why-you-need-a-website-now` | `https://ag-solutions.in/blogs/the-future-is-digital-why-you-need-a-website-now` | Web Development |
| `/blogs/why-your-business-needs-a-professional-website-in-2026` | `https://ag-solutions.in/blogs/why-your-business-needs-a-professional-website-in-2026` | Web Development |

---

## 2. Validation & Quality Checklist

- [x] **Strict XML 0.9 Compliance**: Standard `<urlset>` and `<loc>` / `<lastmod>` tags.
- [x] **No Deprecated Tags**: Avoids `<priority>` and `<changefreq>` (ignored by Google).
- [x] **W3C Datetime**: All dates formatted as `YYYY-MM-DD`.
- [x] **Canonical HTTPS Only**: Zero HTTP, alias, or redirect URLs included.
- [x] **Under Limits**: 34 URLs (< 50,000 max) and ~4.4KB (< 50MB max).
- [x] **Robots.txt Linked**: `public/robots.txt` points directly to `https://ag-solutions.in/sitemap.xml`.
- [x] **Automated Regeneration**: Included in build pipeline (`npm run sitemap` and `npm run build`).
