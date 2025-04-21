// Main collection entry point - imports and exports all collections
import { siteConfigCollection } from "./site-config.tsx";
import { experienceCollection } from "./experience.tsx";
import { interestsCollection } from "./interests.tsx";
import { blogCollection } from "./blog.tsx";

// Re-export types
export type { SiteConfig } from "./site-config.tsx";
export type { Experience } from "./experience.tsx";
export type { Interest } from "./interests.tsx";
export type { BlogPost } from "./blog.tsx";

// Re-export individual collections
export {
	siteConfigCollection,
	experienceCollection,
	interestsCollection,
	blogCollection,
};

// Export all collections as an array for use in the app
export const websiteCollections = [
	siteConfigCollection,
	experienceCollection,
	interestsCollection,
	blogCollection,
];
