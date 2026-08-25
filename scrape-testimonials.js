import fs from "fs";
import path from "path";

const BASE_URL =
    "https://ag-solutions.in/webapi/public/api/getTestimonial/";

const CATEGORIES = [
    ["home", "Home"],
    ["contacts", "contacts"],
    ["web-development", "Web Development"],
    ["mobile-app-development", "Mobile App Development"],
    ["digital-marketing", "Digital Marketing"],
    ["export-biz", "Export Biz"],
    ["bizstock", "BizStock"],
    ["ease-marketing", "Ease Marketing"],
];

const OUTPUT_FILE = path.join(process.cwd(), "testimoanils.md");

/**
 * Fetch testimonials from API
 */
async function fetchTestimonials(slug) {
    const url = BASE_URL + slug;

    try {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`[ERROR] ${url}`);
        console.error(`        ${error.message}`);
        return null;
    }
}

/**
 * Find testimonial array regardless of API wrapper structure.
 */
function findTestimonialList(data) {
    if (Array.isArray(data)) {
        return data;
    }

    if (!data || typeof data !== "object") {
        return [];
    }

    const possibleKeys = [
        "data",
        "result",
        "results",
        "testimonials",
        "testimonial",
        "items",
    ];

    // Check common API keys
    for (const key of possibleKeys) {
        const value = data[key];

        if (Array.isArray(value)) {
            return value;
        }

        if (value && typeof value === "object") {
            const nested = findTestimonialList(value);

            if (nested.length) {
                return nested;
            }
        }
    }

    // Recursive fallback
    for (const value of Object.values(data)) {
        if (Array.isArray(value) || typeof value === "object") {
            const result = findTestimonialList(value);

            if (result.length) {
                return result;
            }
        }
    }

    return [];
}

/**
 * Get first available field.
 */
function getValue(item, keys) {
    if (!item || typeof item !== "object") {
        return null;
    }

    for (const key of keys) {
        if (
            item[key] !== undefined &&
            item[key] !== null &&
            item[key] !== ""
        ) {
            return item[key];
        }
    }

    return null;
}

/**
 * Convert value to clean text.
 */
function cleanText(value) {
    if (value === null || value === undefined) {
        return "";
    }

    if (typeof value === "object") {
        return JSON.stringify(value);
    }

    return String(value).trim();
}

/**
 * Escape Markdown special characters where appropriate.
 */
function escapeMarkdown(value) {
    return cleanText(value)
        .replace(/\r?\n/g, " ")
        .trim();
}

/**
 * Convert one testimonial to Markdown.
 */
function testimonialToMarkdown(item, index) {
    const name = getValue(item, [
        "name",
        "client_name",
        "clientName",
        "customer_name",
        "customerName",
        "user_name",
        "userName",
        "author",
    ]);

    const company = getValue(item, [
        "company",
        "company_name",
        "companyName",
        "organization",
        "business_name",
        "businessName",
    ]);

    const designation = getValue(item, [
        "designation",
        "job_title",
        "jobTitle",
        "position",
        "role",
    ]);

    const testimonial = getValue(item, [
        "testimonial",
        "testimonials",
        "review",
        "message",
        "comment",
        "description",
        "content",
        "feedback",
    ]);

    const rating = getValue(item, [
        "rating",
        "stars",
        "rate",
    ]);

    const image = getValue(item, [
        "image",
        "image_url",
        "imageUrl",
        "photo",
        "profile_image",
        "profileImage",
    ]);

    const lines = [
        `### Testimonial ${index}`,
        "",
    ];

    if (name) {
        lines.push(`**Client:** ${escapeMarkdown(name)}`);
    }

    if (company) {
        lines.push(`**Company:** ${escapeMarkdown(company)}`);
    }

    if (designation) {
        lines.push(
            `**Designation:** ${escapeMarkdown(designation)}`
        );
    }

    if (rating) {
        lines.push(`**Rating:** ${escapeMarkdown(rating)}`);
    }

    if (testimonial) {
        lines.push(
            "",
            `> ${escapeMarkdown(testimonial)}`
        );
    }

    if (image) {
        lines.push(
            "",
            `**Image:** ${escapeMarkdown(image)}`
        );
    }

    // Preserve additional API fields
    const knownFields = new Set([
        "name",
        "client_name",
        "clientName",
        "customer_name",
        "customerName",
        "user_name",
        "userName",
        "author",

        "company",
        "company_name",
        "companyName",
        "organization",
        "business_name",
        "businessName",

        "designation",
        "job_title",
        "jobTitle",
        "position",
        "role",

        "testimonial",
        "testimonials",
        "review",
        "message",
        "comment",
        "description",
        "content",
        "feedback",

        "rating",
        "stars",
        "rate",

        "image",
        "image_url",
        "imageUrl",
        "photo",
        "profile_image",
        "profileImage",
    ]);

    const extraFields = {};

    for (const [key, value] of Object.entries(item)) {
        if (
            !knownFields.has(key) &&
            value !== null &&
            value !== undefined &&
            value !== "" &&
            !(Array.isArray(value) && value.length === 0)
        ) {
            extraFields[key] = value;
        }
    }

    if (Object.keys(extraFields).length > 0) {
        lines.push(
            "",
            "<details>",
            "<summary>Additional API data</summary>",
            "",
            "```json",
            JSON.stringify(extraFields, null, 2),
            "```",
            "",
            "</details>"
        );
    }

    lines.push("", "---", "");

    return lines.join("\n");
}

/**
 * Build final Markdown document.
 */
function buildMarkdown(results) {
    const total = Object.values(results).reduce(
        (sum, items) => sum + items.length,
        0
    );

    const lines = [
        "# Testimonials",
        "",
        "> Automatically collected from the AG Solutions testimonial API.",
        "",
        "## Categories",
        "",
    ];

    // Category index
    for (const [slug, title] of CATEGORIES) {
        const count = results[slug]?.length || 0;

        lines.push(
            `- [${title}](#${slug}) — ${count} testimonials`
        );
    }

    lines.push(
        "",
        `**Total testimonials:** ${total}`,
        "",
        "---",
        ""
    );

    // Categories
    for (const [slug, title] of CATEGORIES) {
        const testimonials = results[slug] || [];

        lines.push(
            `<a id="${slug}"></a>`,
            "",
            `## ${title}`,
            ""
        );

        if (testimonials.length === 0) {
            lines.push(
                "_No testimonials found._",
                ""
            );

            continue;
        }

        testimonials.forEach((testimonial, index) => {
            lines.push(
                testimonialToMarkdown(
                    testimonial,
                    index + 1
                )
            );
        });
    }

    return lines.join("\n");
}

/**
 * Main
 */
async function main() {
    console.log("Fetching testimonials...\n");

    const results = {};

    for (const [slug, title] of CATEGORIES) {
        console.log(`[FETCH] ${title}`);

        const data = await fetchTestimonials(slug);

        const testimonials = findTestimonialList(data);

        results[slug] = testimonials;

        console.log(
            `        Found ${testimonials.length} testimonials\n`
        );
    }

    const markdown = buildMarkdown(results);

    fs.writeFileSync(
        OUTPUT_FILE,
        markdown,
        "utf8"
    );

    const total = Object.values(results).reduce(
        (sum, items) => sum + items.length,
        0
    );

    console.log("=".repeat(60));
    console.log("Done!");
    console.log(`Output: ${OUTPUT_FILE}`);
    console.log(`Total testimonials: ${total}`);
    console.log("=".repeat(60));
}

main().catch((error) => {
    console.error("\nFatal error:", error);
    process.exit(1);
});