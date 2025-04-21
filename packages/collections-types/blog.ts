// Shared type definition for BlogPost
export type BlogPost = {
	title: string;
	slug: string;
	content: string;
	created_at: Date;
	tags?: string[];
	related_posts?: string[];
};

// The collection path in Firestore
export const BLOG_COLLECTION = "blog";
