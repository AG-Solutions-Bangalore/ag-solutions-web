import type { SchemaScript } from "./types";

export interface SchemaAggregate {
  typeCounts: Record<string, number>;
  totalReviews: number;
  reviewAuthors: string[];
  hasAggregateRating: boolean;
  duplicateIds: number;
}

/**
 * Tally per-`@type` counts, total Review entities, and detect duplicate
 * script IDs across the schema set for one page.
 */
export function aggregateSchemas(schemas: SchemaScript[]): SchemaAggregate {
  const typeCounts: Record<string, number> = {};
  const reviewAuthors: string[] = [];
  let totalReviews = 0;
  const seenIds = new Set<string>();
  let duplicateIds = 0;

  for (const item of schemas) {
    const type = item.json["@type"] || "Unknown";
    typeCounts[type] = (typeCounts[type] || 0) + 1;

    if (type === "Review") {
      const author = item.json.author?.name || item.json.name || "Unknown Author";
      reviewAuthors.push(author);
      totalReviews++;
    } else if (Array.isArray(item.json.review)) {
      for (const rev of item.json.review) {
        const author = rev.author?.name || rev.name || "Unknown Author";
        reviewAuthors.push(author);
        totalReviews++;
      }
    }

    if (item.id) {
      if (seenIds.has(item.id)) {
        console.warn(`   ⚠️ DUPLICATE SCRIPT ID: ${item.id}`);
        duplicateIds++;
      }
      seenIds.add(item.id);
    }
  }

  return {
    typeCounts,
    totalReviews,
    reviewAuthors,
    hasAggregateRating: schemas.some((s) => s.json.aggregateRating),
    duplicateIds,
  };
}
