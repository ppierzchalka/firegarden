import { buildCollection, buildProperty } from "@firecms/core";

export const getCollections = () => [
	// 1. Site-wide config (hero text, links, name, etc.)
	buildCollection({
		id: "site_config",
		name: "Site Config",
		path: "site_config",
		singularName: "Config",
		properties: {
			name: buildProperty({
				name: "Name",
				dataType: "string",
			}),
			location: buildProperty({
				name: "Location",
				dataType: "string",
			}),
			timezone: buildProperty({
				name: "Timezone",
				dataType: "string",
				description: "e.g. 'Europe/Warsaw'",
			}),
			hero_text: buildProperty({
				name: "Hero Text",
				dataType: "string",
				markdown: true,
			}),
			buttons: buildProperty({
				name: "Buttons",
				description: "Use Lucide icon names",
				dataType: "array",
				of: {
					dataType: "map",
					properties: {
						label: buildProperty({ name: "Label", dataType: "string" }),
						icon: buildProperty({ name: "Icon", dataType: "string" }),
						url: buildProperty({ name: "URL", dataType: "string" }),
					},
				},
			}),
			below_buttons_text: buildProperty({
				name: "Text Below Buttons",
				dataType: "string",
				markdown: true,
			}),
			photo_url: buildProperty({
				name: "Profile Photo URL",
				dataType: "string",
				url: true,
			}),
		},
	}),

	// 2. Experience list
	buildCollection({
		id: "experience",
		name: "Experience",
		path: "experience",
		properties: {
			title: buildProperty({ name: "Title", dataType: "string" }),
			company: buildProperty({ name: "Company", dataType: "string" }),
			from: buildProperty({ name: "From", dataType: "date" }),
			to: buildProperty({
				name: "To",
				dataType: "date",
				description: "Leave blank if current",
			}),
			description: buildProperty({
				name: "Description",
				dataType: "string",
				markdown: true,
			}),
		},
	}),

	// 3. Interests
	buildCollection({
		id: "interests",
		name: "Interests",
		path: "interests",
		properties: {
			label: buildProperty({ name: "Label", dataType: "string" }),
			icon: buildProperty({
				name: "Icon (optional)",
				dataType: "string",
				required: false,
			}),
			description: buildProperty({
				name: "Description",
				dataType: "string",
				markdown: true,
				required: false,
			}),
		},
	}),

	// 4. Blog / Digital Garden
	buildCollection({
		id: "blog",
		name: "Digital Garden",
		path: "blog",
		properties: {
			title: buildProperty({ name: "Title", dataType: "string" }),
			slug: buildProperty({
				name: "Slug",
				dataType: "string",
				description: "e.g. 'my-first-post'",
			}),
			content: buildProperty({
				name: "Content",
				dataType: "string",
				markdown: true, // Allows code, embeds, images, etc.
			}),
			created_at: buildProperty({
				name: "Created At",
				dataType: "date",
			}),
			tags: buildProperty({
				name: "Tags",
				dataType: "array",
				of: { dataType: "string" },
				required: false,
			}),
		},
	}),
];
