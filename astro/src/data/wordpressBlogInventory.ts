export type WordPressBlogInventoryItem = {
  oldUrl: string;
  oldSlug: string;
  oldPath: string;
  sourceType: string;
  topicCluster: string;
  cleanCategory: string;
  cleanTags: string[];
  migrationPriority: "high" | "medium" | "low" | "needsReview";
  recommendedAction: "migrate" | "mergeIntoGuide" | "redirectToService" | "doNotMigrate" | "needsReview";
  suggestedNewPath?: string;
  contentStatus: "notStarted" | "outlineReady" | "rewritten" | "reviewed" | "published";
  redirectStatus: "pending" | "ready" | "doNotRedirect" | "needsReview";
  mediaReviewed: boolean;
  internalLinksReviewed: boolean;
  notes?: string;
};

export const wordpressBlogInventory: WordPressBlogInventoryItem[] = [
  {
    oldUrl: "https://old.theeduassist.com/kajabi-course-launch-guide",
    oldSlug: "kajabi-course-launch-guide",
    oldPath: "/kajabi-course-launch-guide",
    sourceType: "blog",
    topicCluster: "Kajabi",
    cleanCategory: "Kajabi",
    cleanTags: ["kajabi", "course-launch"],
    migrationPriority: "high",
    recommendedAction: "migrate",
    suggestedNewPath: "/blog/kajabi-course-launch-guide",
    contentStatus: "notStarted",
    redirectStatus: "pending",
    mediaReviewed: false,
    internalLinksReviewed: false,
    notes: "High priority post."
  },
  {
    oldUrl: "https://old.theeduassist.com/lms-migration-best-practices",
    oldSlug: "lms-migration-best-practices",
    oldPath: "/lms-migration-best-practices",
    sourceType: "blog",
    topicCluster: "LMS Migration",
    cleanCategory: "LMS Migration",
    cleanTags: ["lms-migration"],
    migrationPriority: "high",
    recommendedAction: "migrate",
    suggestedNewPath: "/blog/lms-migration-best-practices",
    contentStatus: "notStarted",
    redirectStatus: "pending",
    mediaReviewed: false,
    internalLinksReviewed: false,
    notes: "Review content thoroughly."
  },
  {
    oldUrl: "https://old.theeduassist.com/ai-in-elearning",
    oldSlug: "ai-in-elearning",
    oldPath: "/ai-in-elearning",
    sourceType: "blog",
    topicCluster: "AI in Learning",
    cleanCategory: "AI in Learning",
    cleanTags: ["ai-learning"],
    migrationPriority: "high",
    recommendedAction: "migrate",
    suggestedNewPath: "/blog/ai-in-elearning",
    contentStatus: "notStarted",
    redirectStatus: "pending",
    mediaReviewed: false,
    internalLinksReviewed: false,
    notes: "Needs formatting update."
  },
  {
    oldUrl: "https://old.theeduassist.com/custom-elearning-development",
    oldSlug: "custom-elearning-development",
    oldPath: "/custom-elearning-development",
    sourceType: "blog",
    topicCluster: "E-Learning Design",
    cleanCategory: "E-Learning Design",
    cleanTags: ["custom-elearning"],
    migrationPriority: "high",
    recommendedAction: "migrate",
    suggestedNewPath: "/blog/custom-elearning-development",
    contentStatus: "notStarted",
    redirectStatus: "pending",
    mediaReviewed: false,
    internalLinksReviewed: false,
    notes: "Consider merging."
  },
  {
    oldUrl: "https://old.theeduassist.com/instructional-design-principles",
    oldSlug: "instructional-design-principles",
    oldPath: "/instructional-design-principles",
    sourceType: "blog",
    topicCluster: "Instructional Design",
    cleanCategory: "Instructional Design",
    cleanTags: ["instructional-design"],
    migrationPriority: "high",
    recommendedAction: "migrate",
    suggestedNewPath: "/blog/instructional-design-principles",
    contentStatus: "notStarted",
    redirectStatus: "pending",
    mediaReviewed: false,
    internalLinksReviewed: false,
    notes: "Good reference post."
  },
  {
    oldUrl: "https://old.theeduassist.com/what-is-microlearning",
    oldSlug: "what-is-microlearning",
    oldPath: "/what-is-microlearning",
    sourceType: "blog",
    topicCluster: "E-Learning Design",
    cleanCategory: "E-Learning Design",
    cleanTags: ["microlearning"],
    migrationPriority: "high",
    recommendedAction: "migrate",
    suggestedNewPath: "/blog/what-is-microlearning",
    contentStatus: "notStarted",
    redirectStatus: "pending",
    mediaReviewed: false,
    internalLinksReviewed: false,
    notes: "Check for old URLs."
  }
];
