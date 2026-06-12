export const queryKeys = {
  blogs: {
    all: ["blogs"] as const,
    front: () => [...queryKeys.blogs.all, "front"] as const,
    featured: () => [...queryKeys.blogs.all, "featured"] as const,
    list: () => [...queryKeys.blogs.all, "list"] as const,
    detail: (slug: string) => [...queryKeys.blogs.all, "detail", slug] as const,
  },
  faqs: {
    all: ["faqs"] as const,
    detail: (slug: string) => [...queryKeys.faqs.all, slug] as const,
  },
  projects: {
    all: ["projects"] as const,
    list: (category: string) => [...queryKeys.projects.all, category] as const,
  },
  sitemap: {
    all: ["sitemap"] as const,
  },
};
