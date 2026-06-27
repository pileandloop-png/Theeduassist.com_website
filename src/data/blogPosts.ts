export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  status: "draft" | "reviewed" | "published";
  readingTime?: number;
  wordCount?: number;
  heroImage?: string;
  heroImageAlt?: string;
  canonicalUrl?: string;
  oldWordPressUrl?: string;
  migrationStatus?: string;
  seoTitle?: string;
  seoDescription?: string;
  faq?: any[];
  content?: string;
  relatedCaseStudies?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "How to Turn Your Course Idea into a Structured Online Program",
    slug: "course-idea-to-online-program",
    category: "Course Creation",
    tags: ["course-creation", "course-launch"],
    status: "published",
    excerpt: "Learn how to map out a clear curriculum, build an audience, and test your concept before recording videos.",
    readingTime: 6,
    publishedAt: new Date().toISOString(),
    seoTitle: "How to Turn Your Course Idea into a Structured Online Program | TheEduAssist",
    seoDescription: "A practical guide to mapping out your course idea, building an audience, and creating a structured online program.",
    author: "TheEduAssist Team",
    relatedCaseStudies: [
      "business-analytics-corporate-training",
      "sqa-aligned-vocational-training"
    ],
    content: `
      <p>Having a great idea is only the first step. To create a successful online course, you need a structured curriculum, a clear understanding of your audience, and a platform that supports your teaching style.</p>

      <h2>1. Define Your Learning Outcomes</h2>
      <p>Before you record a single video, ask yourself: What specific transformation will my students achieve by the end of this course? Clear learning outcomes help you structure your content logically.</p>

      <h2>2. Outline the Curriculum</h2>
      <p>Break down the journey from "beginner" to "expert" into manageable modules and lessons. Avoid overwhelming your students with too much information at once. Focus on the core concepts they need to succeed.</p>

      <h2>3. Choose the Right Platform</h2>
      <p>Whether you choose <a href="/kajabi-services/">Kajabi</a> for an all-in-one approach or a custom LMS setup, the right platform makes a significant difference in user experience.</p>

      <h2>Next Steps</h2>
      <p>If you need expert guidance mapping out your curriculum or setting up your platform, consider our <a href="/book-free-audit/?package=course-clarity-blueprint">Course Clarity Blueprint</a> package to get started.</p>
    `
  },
  {
    title: "Kajabi Setup Checklist for Creators and Coaches",
    slug: "kajabi-setup-checklist",
    category: "Kajabi",
    tags: ["kajabi", "course-setup", "kajabi-funnels"],
    status: "published",
    excerpt: "A comprehensive checklist to ensure your Kajabi platform is configured correctly for a successful launch.",
    readingTime: 5,
    publishedAt: new Date().toISOString(),
    seoTitle: "Kajabi Setup Checklist for Creators and Coaches | TheEduAssist",
    seoDescription: "Follow this step-by-step Kajabi setup checklist to configure your website, products, offers, and funnels correctly.",
    author: "TheEduAssist Team",
    relatedCaseStudies: [
      "business-analytics-corporate-training"
    ],
    content: `
      <p>Kajabi is powerful, but setting it up correctly is essential for a smooth launch. This checklist covers the key areas you need to configure.</p>

      <h2>1. Site Settings and Integrations</h2>
      <p>Connect your custom domain, set up your payment gateways (Stripe/PayPal), and configure your email settings to ensure reliable deliverability.</p>

      <h2>2. Product Creation</h2>
      <p>Structure your course modules and lessons, upload your videos, and attach downloadable resources. Ensure the navigation is intuitive for your students.</p>

      <h2>3. Offers and Checkout Pages</h2>
      <p>Create clear, compelling checkout pages. Set your pricing strategy, including payment plans or subscriptions if applicable.</p>

      <h2>Need Help?</h2>
      <p>If you want a professional to handle the technical heavy lifting, check out our <a href="/book-free-audit/?package=kajabi-setup-sprint">Kajabi Setup Sprint</a> for a done-for-you solution.</p>
    `
  },
  {
    title: "LMS Migration Checklist for Training Teams",
    slug: "lms-migration-checklist",
    category: "LMS Migration",
    tags: ["lms-migration", "corporate-training"],
    status: "published",
    excerpt: "Moving to a new LMS? Use this checklist to plan your migration, protect student data, and avoid downtime.",
    readingTime: 7,
    publishedAt: new Date().toISOString(),
    seoTitle: "LMS Migration Checklist for Training Teams | TheEduAssist",
    seoDescription: "A comprehensive checklist for planning and executing a seamless LMS migration without losing student data or causing downtime.",
    author: "TheEduAssist Team",
    relatedCaseStudies: [
      "sqa-aligned-vocational-training",
      "language-courses-book-publisher"
    ],
    content: `
      <p>Migrating to a new Learning Management System (LMS) can be complex. Proper planning is critical to ensure a seamless transition for your learners and administrative team.</p>

      <h2>1. Audit Existing Content</h2>
      <p>Review all your current courses, user data, and learning paths. Decide what content needs to be migrated, updated, or archived.</p>

      <h2>2. Data Migration Strategy</h2>
      <p>Plan how you will export and import user data, course progress, and enrollment records securely. Ensure compliance with data privacy regulations.</p>

      <h2>3. Testing and Quality Assurance</h2>
      <p>Before launching the new LMS, conduct thorough testing. Verify that all content displays correctly, tracking works, and integrations function as expected.</p>

      <h2>Expert Migration Support</h2>
      <p>Avoid migration headaches by partnering with our team. Learn more about our <a href="/services/lms-implementation-migration/">LMS Implementation & Migration services</a> or request an <a href="/book-free-audit/?package=lms-migration-map">LMS Migration Map</a>.</p>
    `
  },
  {
    title: "How to Convert PDFs, Slides, and Books into Online Courses",
    slug: "content-conversion-to-elearning",
    category: "Content Conversion",
    tags: ["content-conversion", "instructional-design"],
    status: "published",
    excerpt: "Learn the best practices for transforming static materials into engaging, interactive e-learning experiences.",
    readingTime: 6,
    publishedAt: new Date().toISOString(),
    seoTitle: "Convert PDFs and Books into Online Courses | TheEduAssist",
    seoDescription: "Discover how to transform static materials like PDFs, slides, and books into engaging and interactive online courses.",
    author: "TheEduAssist Team",
    relatedCaseStudies: [
      "language-courses-book-publisher",
      "sqa-aligned-vocational-training"
    ],
    content: `
      <p>Many organizations have valuable training materials stored as PDFs, PowerPoint slides, or physical manuals. Converting these into interactive e-learning courses increases engagement and trackability.</p>

      <h2>1. Analyze the Source Material</h2>
      <p>Review the existing content to identify key learning objectives and determine what information is essential versus supplementary.</p>

      <h2>2. Storyboarding and Instructional Design</h2>
      <p>Create a storyboard that maps out how the static content will be presented interactively. Consider adding quizzes, scenarios, and multimedia elements.</p>

      <h2>3. Development and Interactive Elements</h2>
      <p>Use authoring tools to build the course. Transform static diagrams into interactive graphics and turn long text passages into narrated audio or video segments.</p>

      <h2>Ready to Digitize Your Content?</h2>
      <p>We specialize in transforming legacy materials. Explore our <a href="/services/content-conversion/">Content Conversion services</a> or get started with a <a href="/book-free-audit/?package=content-conversion-kit">Content Conversion Kit</a>.</p>
    `
  },
  {
    title: "How AI Can Support E-Learning Production Without Replacing Human Design",
    slug: "ai-elearning-production-support",
    category: "AI E-Learning",
    tags: ["ai-learning", "course-creation"],
    status: "published",
    excerpt: "Explore practical ways AI tools can accelerate course planning, scriptwriting, and asset generation while maintaining quality.",
    readingTime: 5,
    publishedAt: new Date().toISOString(),
    seoTitle: "How AI Supports E-Learning Production | TheEduAssist",
    seoDescription: "Learn how AI tools can accelerate e-learning production, from course planning to asset generation, without sacrificing human quality.",
    author: "TheEduAssist Team",
    relatedCaseStudies: [
      "business-analytics-corporate-training"
    ],
    content: `
      <p>Artificial Intelligence is changing how we build courses, but it's best used as an assistant, not a replacement for human instructional design.</p>

      <h2>1. Accelerating Course Outlining</h2>
      <p>AI tools can help brainstorm module structures and lesson topics rapidly, giving instructional designers a solid starting point to refine.</p>

      <h2>2. Generating Draft Scripts and Assessments</h2>
      <p>Use AI to generate initial drafts for video scripts or quiz questions based on your source material. Always review and edit to ensure accuracy and brand voice.</p>

      <h2>3. Creating Multimedia Assets</h2>
      <p>AI can assist in generating voiceovers, images, and even basic video elements, reducing production time and costs for specific types of content.</p>

      <h2>Integrate AI into Your Workflow</h2>
      <p>Discover how we leverage AI to build better courses faster. Check out our <a href="/services/ai-powered-elearning/">AI-Powered E-Learning services</a>.</p>
    `
  },
  {
    title: "What to Prepare Before Building an Online Course Platform",
    slug: "before-building-online-course-platform",
    category: "Course Strategy",
    tags: ["course-creation", "strategy"],
    status: "published",
    excerpt: "A strategic guide on what you need to have in place before investing in Kajabi, an LMS, or custom development.",
    readingTime: 6,
    publishedAt: new Date().toISOString(),
    seoTitle: "What to Prepare Before Building an Online Course Platform | TheEduAssist",
    seoDescription: "A strategic guide covering the essential assets, strategies, and decisions you need before building your online course platform.",
    author: "TheEduAssist Team",
    relatedCaseStudies: [
      "business-analytics-corporate-training",
      "sqa-aligned-vocational-training",
      "language-courses-book-publisher"
    ],
    content: `
      <p>Jumping straight into building a platform without preparation often leads to delays and frustration. Here is what you should prepare first.</p>

      <h2>1. Solidify Your Offer and Audience</h2>
      <p>Know exactly who your course is for and the specific challenge it solves. This dictates your marketing strategy and platform requirements.</p>

      <h2>2. Finalize Your Core Curriculum</h2>
      <p>Have a detailed outline of your modules and lessons. You don't need all the videos recorded, but the structure must be clear.</p>

      <h2>3. Gather Brand Assets</h2>
      <p>Collect your logos, brand colors, fonts, and high-quality imagery. Having these ready ensures a cohesive look and feel across your platform.</p>

      <h2>Need Strategic Direction?</h2>
      <p>If you're unsure where to start, get expert advice. <a href="/book-free-audit/">Request a 24-48 Hour Review</a> of your project plan, and we'll guide you on the best path forward.</p>
    `
  }
];
