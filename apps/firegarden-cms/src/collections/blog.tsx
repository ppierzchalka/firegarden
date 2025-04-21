import { buildCollection } from "firecms";
import { localeCollection } from "./locales.tsx";

// Type definition for BlogPost
export type BlogPost = {
	title: string;
	slug: string;
	content: string;
	created_at: Date;
	tags?: string[];
};

// Digital Garden Collection
export const blogCollection = buildCollection<BlogPost>({
	name: "Digital Garden",
	singularName: "Blog Post",
	path: "blog",
	icon: "Book",
	group: "Content",
	subcollections: [localeCollection],
	properties: {
		title: {
			name: "Title",
			validation: { required: true },
			dataType: "string",
		},
		slug: {
			name: "Slug",
			validation: { required: true },
			dataType: "string",
			description: "e.g. 'my-first-post'",
		},
		content: {
			name: "Content",
			validation: { required: true },
			dataType: "string",
			markdown: true,
			multiline: true,
		},
		created_at: {
			name: "Created At",
			validation: { required: true },
			dataType: "date",
		},
		tags: {
			name: "Tags",
			dataType: "array",
			of: {
				dataType: "string",
			},
			validation: { required: false },
		},
	},
});
