// Collections configuration
import { siteConfigCollection } from "./site-config.tsx";
import { experienceCollection } from "./experience.tsx";
import { interestsCollection } from "./interests.tsx";
import { blogCollection } from "./blog.tsx";

// Export all collections as an array for use in the app
export const websiteCollections = [
	siteConfigCollection,
	experienceCollection,
	interestsCollection,
	blogCollection,
];
