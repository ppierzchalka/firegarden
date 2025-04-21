import { BlogPost, BLOG_COLLECTION } from "@firegarden/collections-types";
import { buildCollection, buildProperty } from "firecms";

export const blogCollection = buildCollection<BlogPost>({
	name: "Digital Garden",
	singularName: "Blog Post",
	path: BLOG_COLLECTION,
	icon: "Book",
	group: "Content",
	properties: {
		title: buildProperty({
			name: "Title",
			validation: { required: true },
			dataType: "string",
		}),
		slug: buildProperty({
			name: "Slug",
			validation: { required: true },
			dataType: "string",
			description: "e.g. 'my-first-post'",
		}),
		content: buildProperty({
			name: "Content",
			validation: { required: true },
			dataType: "string",
			markdown: true,
		}),
		related_posts: buildProperty({
			name: "Related Posts",
			dataType: "array",
			of: {
				dataType: "reference",
				path: BLOG_COLLECTION,
			},
			description: "Select other blog posts that are related to this one",
		}),
		created_at: buildProperty({
			name: "Created At",
			validation: { required: true },
			dataType: "date",
			disabled: {
				hidden: false, // Make it visible but not editable
				clearable: false, // Prevent clearing the field
			},
			defaultValue: new Date(), // Set default value to current date
			description: "Automatically set to the current date when created",
		}),
		tags: buildProperty({
			name: "Tags",
			dataType: "array",
			of: {
				dataType: "string",
			},
			validation: { required: false },
		}),
	},
});
