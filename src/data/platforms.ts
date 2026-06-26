export interface PlatformGroup {
    category: string;
    description?: string;
    examples: string[];
}

export const platformGroups: PlatformGroup[] = [
    {
        category: "Course-selling platforms",
        examples: ["Kajabi", "Thinkific", "LearnWorlds", "Teachable", "Podia"]
    },
    {
        category: "Community/course platforms",
        examples: ["Skool", "Circle", "Mighty Networks"]
    },
    {
        category: "Corporate and enterprise LMS",
        examples: ["Docebo", "Cornerstone Learning", "Absorb LMS", "LearnUpon", "Litmos", "360Learning", "Adobe Learning Manager"]
    },
    {
        category: "Education and academic LMS",
        examples: ["Moodle", "Moodle Workplace", "Canvas", "Blackboard", "D2L Brightspace"]
    },
    {
        category: "Authoring and interactive content tools",
        examples: ["Articulate 360", "Rise", "Storyline", "SCORM", "H5P", "iSpring"]
    },
    {
        category: "WordPress LMS and website-based learning",
        examples: ["LearnDash", "LifterLMS", "Tutor LMS", "BuddyBoss"]
    }
];
