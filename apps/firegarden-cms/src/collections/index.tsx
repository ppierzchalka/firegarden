// Main collection entry point - only exports components
import { siteConfigCollection } from "./site-config.tsx";
import { experienceCollection } from "./experience.tsx";
import { interestsCollection } from "./interests.tsx";
import { blogCollection } from "./blog.tsx";

// Only export components for fast refresh to work properly
export {
	siteConfigCollection,
	experienceCollection,
	interestsCollection,
	blogCollection,
};
