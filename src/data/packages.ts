export interface PackageData {
    slug: string;
    name: string;
    priceLabel: string;
    bestFor?: string;
    platformsSupported?: string[];
    tawkContext?: any;
}

export const packages: Record<string, PackageData> = {
    "course-clarity-blueprint": {
        slug: "course-clarity-blueprint",
        name: "Course Clarity Blueprint",
        priceLabel: "From $500",
    },
    "content-conversion-kit": {
        slug: "content-conversion-kit",
        name: "Content Conversion Kit",
        priceLabel: "From $900",
    },
    "kajabi-setup-sprint": {
        slug: "kajabi-setup-sprint",
        name: "Kajabi Setup Sprint",
        priceLabel: "From $1,500",
    },
    "lms-migration-map": {
        slug: "lms-migration-map",
        name: "LMS Migration Map",
        priceLabel: "From $700",
    },
    "course-platform-build": {
        slug: "course-platform-build",
        name: "Course + Platform Build",
        priceLabel: "From $4,000",
    },
    "ongoing-course-support": {
        slug: "ongoing-course-support",
        name: "Ongoing Course Support",
        priceLabel: "From $600/month",
    },
    "enterprise-learning-systems": {
        slug: "enterprise-learning-systems",
        name: "Enterprise Learning Systems",
        priceLabel: "Custom quote after scope review",
    }
};
