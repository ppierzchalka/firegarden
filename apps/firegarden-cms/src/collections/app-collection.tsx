import { buildCollection } from "firecms";

export type SiteConfig = {
	name: string;
	location: string;
	timezone: string;
	hero_text: string;
	buttons: Array<{
		label: string;
		icon: string;
		url: string;
	}>;
	below_buttons_text: string;
	photo_url: string;
};

export type Experience = {
	title: string;
	company: string;
	from: Date;
	to?: Date;
	description: string;
};

export type Interest = {
	label: string;
	icon?: string;
	description?: string;
};

export type BlogPost = {
	title: string;
	slug: string;
	content: string;
	created_at: Date;
	tags?: string[];
};

export const siteConfigCollection = buildCollection<SiteConfig>({
	name: "Site Configuration",
	singularName: "Configuration",
	path: "site_config",
	icon: "Settings",
	group: "Website",
	properties: {
		name: {
			name: "Name",
			validation: { required: true },
			dataType: "string",
		},
		location: {
			name: "Location",
			validation: { required: true },
			dataType: "string",
		},
		timezone: {
			name: "Timezone",
			validation: { required: true },
			dataType: "string",
			description: "e.g. 'Europe/Warsaw'",
		},
		hero_text: {
			name: "Hero Text",
			validation: { required: true },
			dataType: "string",
			markdown: true,
		},
		buttons: {
			name: "Buttons",
			description: "Use Lucide icon names",
			dataType: "array",
			of: {
				dataType: "map",
				properties: {
					label: {
						name: "Label",
						dataType: "string",
					},
					icon: {
						name: "Icon",
						dataType: "string",
					},
					url: {
						name: "URL",
						dataType: "string",
					},
				},
			},
		},
		below_buttons_text: {
			name: "Text Below Buttons",
			dataType: "string",
			markdown: true,
		},
		photo_url: {
			name: "Profile Photo URL",
			dataType: "string",
			url: true,
			storage: {
				storagePath: "profile_images",
				acceptedFiles: ["image/*"],
			},
		},
	},
});

export const experienceCollection = buildCollection<Experience>({
	name: "Experience",
	singularName: "Experience Entry",
	path: "experience",
	icon: "Work",
	group: "Website",
	properties: {
		title: {
			name: "Title",
			validation: { required: true },
			dataType: "string",
		},
		company: {
			name: "Company",
			validation: { required: true },
			dataType: "string",
		},
		from: {
			name: "From",
			validation: { required: true },
			dataType: "date",
		},
		to: {
			name: "To",
			description: "Leave blank if current",
			dataType: "date",
		},
		description: {
			name: "Description",
			validation: { required: true },
			dataType: "string",
			markdown: true,
			multiline: true,
		},
	},
});

export const interestsCollection = buildCollection<Interest>({
	name: "Interests",
	singularName: "Interest",
	path: "interests",
	icon: "EmojiEvents",
	group: "Website",
	properties: {
		label: {
			name: "Label",
			validation: { required: true },
			dataType: "string",
		},
		icon: {
			name: "Icon (optional)",
			dataType: "string",
			validation: { required: false },
		},
		description: {
			name: "Description",
			dataType: "string",
			markdown: true,
			multiline: true,
			validation: { required: false },
		},
	},
});

export const blogCollection = buildCollection<BlogPost>({
	name: "Digital Garden",
	singularName: "Blog Post",
	path: "blog",
	icon: "Book",
	group: "Content",
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

export const websiteCollections = [
	siteConfigCollection,
	experienceCollection,
	interestsCollection,
	blogCollection,
];
