export type WordPressBlogInventoryItem = {
  oldUrl: string;
  slug: string;
  title: string;
  sourceGroup: "blog" | "uncategorized" | "online-learning";
  topicCluster:
    | "kajabi"
    | "lms"
    | "ai-elearning"
    | "custom-elearning"
    | "corporate-training"
    | "platform-comparison"
    | "instructional-design"
    | "microlearning"
    | "other";
  migrationPriority: "high" | "medium" | "low" | "needsReview";
  recommendedAction:
    | "migrateToSanity"
    | "merge"
    | "redirectToService"
    | "doNotMigrate"
    | "needsReview";
  newPath?: string;
  redirectStatus: "pending" | "ready" | "notNeeded" | "doNotRedirect";
  notes?: string;
};

export const wordpressBlogInventory: WordPressBlogInventoryItem[] = [
  {
    oldUrl: "/kajabi-course-launch-guide",
    slug: "kajabi-course-launch-guide",
    title: "The Ultimate Kajabi Course Launch Guide",
    sourceGroup: "blog",
    topicCluster: "kajabi",
    migrationPriority: "high",
    recommendedAction: "migrateToSanity",
    redirectStatus: "pending",
  },
  {
    oldUrl: "/lms-migration-best-practices",
    slug: "lms-migration-best-practices",
    title: "LMS Migration Best Practices",
    sourceGroup: "blog",
    topicCluster: "lms",
    migrationPriority: "high",
    recommendedAction: "migrateToSanity",
    redirectStatus: "pending",
  },
  {
    oldUrl: "/ai-in-elearning",
    slug: "ai-in-elearning",
    title: "How AI is Transforming eLearning",
    sourceGroup: "blog",
    topicCluster: "ai-elearning",
    migrationPriority: "high",
    recommendedAction: "migrateToSanity",
    redirectStatus: "pending",
  },
  {
    oldUrl: "/custom-elearning-development",
    slug: "custom-elearning-development",
    title: "The Benefits of Custom eLearning Development",
    sourceGroup: "blog",
    topicCluster: "custom-elearning",
    migrationPriority: "high",
    recommendedAction: "migrateToSanity",
    redirectStatus: "pending",
  },
  {
    oldUrl: "/instructional-design-principles",
    slug: "instructional-design-principles",
    title: "Key Instructional Design Principles",
    sourceGroup: "blog",
    topicCluster: "instructional-design",
    migrationPriority: "high",
    recommendedAction: "migrateToSanity",
    redirectStatus: "pending",
  },
  {
    oldUrl: "/what-is-microlearning",
    slug: "what-is-microlearning",
    title: "What is Microlearning?",
    sourceGroup: "blog",
    topicCluster: "microlearning",
    migrationPriority: "high",
    recommendedAction: "migrateToSanity",
    redirectStatus: "pending",
  }
];
