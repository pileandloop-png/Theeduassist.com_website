export interface PlatformData {
  name: string;
  slug: string;
  group: string;
  shortDescription?: string;
  bestFor: string;
  commonUseCases?: string[];
  officialUrl: string;
  recommendedService?: string;
  recommendedPackage?: string;
  tawkContext?: any;
  externalLinkLabel?: string;
}

export const platformGroups = [
  {
    name: 'Course-selling platforms',
    description: 'Platforms commonly used to sell courses and memberships.',
  },
  {
    name: 'Community/course platforms',
    description: 'Platforms focused on community and cohort-based learning.',
  },
  {
    name: 'Corporate and enterprise LMS',
    description: 'Systems for internal training, compliance, and onboarding.',
  },
  {
    name: 'Education and academic LMS',
    description: 'Platforms for universities, schools, and formal education.',
  },
  {
    name: 'Authoring and interactive content tools',
    description: 'Tools for creating SCORM and interactive learning assets.',
  },
  {
    name: 'WordPress LMS and website-based learning',
    description: 'Self-hosted or site-integrated learning platforms.',
  }
];

export const platformsData: PlatformData[] = [
  // Top 15 LMS/platform cards
  {
    name: 'Docebo',
    slug: 'docebo',
    group: 'Corporate and enterprise LMS',
    officialUrl: 'https://www.docebo.com/',
    bestFor: 'Enterprise learning, employee training, partner/customer education, scalable corporate learning systems',
    recommendedService: 'Enterprise Learning Systems or LMS Migration Map',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Cornerstone Learning',
    slug: 'cornerstone-learning',
    group: 'Corporate and enterprise LMS',
    officialUrl: 'https://www.cornerstoneondemand.com/platform/learning-management-lms/',
    bestFor: 'Large organizations, workforce learning, compliance, skills development, enterprise training',
    recommendedService: 'Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Absorb LMS',
    slug: 'absorb-lms',
    group: 'Corporate and enterprise LMS',
    officialUrl: 'https://www.absorblms.com/',
    bestFor: 'Employee, customer, and partner training at scale',
    recommendedService: 'Enterprise Learning Systems or LMS Migration Map',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'LearnUpon',
    slug: 'learnupon',
    group: 'Corporate and enterprise LMS',
    officialUrl: 'https://www.learnupon.com/',
    bestFor: 'Corporate training teams managing employee, partner, and customer learning',
    recommendedService: 'Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Litmos',
    slug: 'litmos',
    group: 'Corporate and enterprise LMS',
    officialUrl: 'https://www.litmos.com/learning-management-system',
    bestFor: 'Corporate learning, training administration, compliance, online courses for teams',
    recommendedService: 'Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: '360Learning',
    slug: '360learning',
    group: 'Corporate and enterprise LMS',
    officialUrl: 'https://360learning.com/',
    bestFor: 'Collaborative learning, internal knowledge sharing, company training, L&D teams',
    recommendedService: 'Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Moodle / Moodle Workplace',
    slug: 'moodle',
    group: 'Education and academic LMS',
    officialUrl: 'https://moodle.com/',
    bestFor: 'Open-source LMS, academic learning, workplace training, customized learning portals',
    recommendedService: 'LMS Migration Map or Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Canvas by Instructure',
    slug: 'canvas',
    group: 'Education and academic LMS',
    officialUrl: 'https://www.instructure.com/canvas',
    bestFor: 'Schools, universities, academic learning environments, institutional LMS planning',
    recommendedService: 'LMS Migration Map or Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Blackboard LMS',
    slug: 'blackboard',
    group: 'Education and academic LMS',
    officialUrl: 'https://www.blackboard.com/products/teaching-and-learning/learning-effectiveness/blackboard-lms',
    bestFor: 'Higher education, institutional learning, academic course delivery',
    recommendedService: 'LMS Migration Map or Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'D2L Brightspace',
    slug: 'brightspace',
    group: 'Education and academic LMS',
    officialUrl: 'https://www.d2l.com/brightspace/',
    bestFor: 'Schools, higher education, organizations, structured learning delivery',
    recommendedService: 'LMS Migration Map or Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'TalentLMS',
    slug: 'talentlms',
    group: 'Corporate and enterprise LMS',
    officialUrl: 'https://www.talentlms.com/',
    bestFor: 'Small and mid-size business training, quick online training setup, internal learning',
    recommendedService: 'LMS Migration Map or Course + Platform Build',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Adobe Learning Manager',
    slug: 'adobe-learning-manager',
    group: 'Corporate and enterprise LMS',
    officialUrl: 'https://business.adobe.com/products/learning-manager/adobe-learning-manager.html',
    bestFor: 'Employee, partner, and customer learning with reporting and learning workflows',
    recommendedService: 'Enterprise Learning Systems',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'LearnWorlds',
    slug: 'learnworlds',
    group: 'Course-selling platforms',
    officialUrl: 'https://www.learnworlds.com/',
    bestFor: 'Learning businesses, course websites, online academies, interactive online learning',
    recommendedService: 'Course + Platform Build',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Thinkific',
    slug: 'thinkific',
    group: 'Course-selling platforms',
    officialUrl: 'https://www.thinkific.com/',
    bestFor: 'Creators, coaches, course businesses, communities, online learning products',
    recommendedService: 'Course + Platform Build',
    externalLinkLabel: 'Visit Official Site',
  },
  {
    name: 'Kajabi',
    slug: 'kajabi',
    group: 'Course-selling platforms',
    officialUrl: 'https://www.kajabi.com/',
    bestFor: 'Courses, coaching, memberships, landing pages, funnels, email, checkout, automation',
    recommendedService: 'Kajabi Setup Sprint',
    externalLinkLabel: 'Visit Official Site',
  },
];

export const extraToolsData: PlatformData[] = [
  // Extra tools
  {
    name: 'Articulate 360 / Rise / Storyline',
    slug: 'articulate',
    group: 'Authoring and interactive content tools',
    officialUrl: 'https://www.articulate.com/',
    bestFor: 'Interactive e-learning, Rise courses, Storyline modules, SCORM-ready content',
    recommendedService: 'Content Conversion',
  },
  {
    name: 'iSpring Suite / iSpring Learn',
    slug: 'ispring',
    group: 'Authoring and interactive content tools',
    officialUrl: 'https://www.ispringsolutions.com/',
    bestFor: 'PowerPoint-to-course workflows, quizzes, corporate training, LMS-ready content',
    recommendedService: 'Content Conversion',
  },
  {
    name: 'LearnDash',
    slug: 'learndash',
    group: 'WordPress LMS and website-based learning',
    officialUrl: 'https://www.learndash.com/',
    bestFor: 'WordPress-based online courses and website-based LMS workflows',
    recommendedService: 'Course + Platform Build',
  },
  {
    name: 'Skool',
    slug: 'skool',
    group: 'Community/course platforms',
    officialUrl: 'https://www.skool.com/',
    bestFor: 'Community-led courses, coaching groups, paid/free learning communities',
    recommendedService: 'Course + Platform Build',
  },
  {
    name: 'Teachable',
    slug: 'teachable',
    group: 'Course-selling platforms',
    officialUrl: 'https://www.teachable.com/',
    bestFor: 'Courses, coaching, memberships, digital products, creator learning businesses',
    recommendedService: 'Course + Platform Build',
  }
];
