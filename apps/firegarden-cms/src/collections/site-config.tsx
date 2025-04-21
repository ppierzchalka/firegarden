import { buildCollection, buildProperty } from "firecms";
import {
	SiteConfig,
	SITE_CONFIG_COLLECTION,
} from "@firegarden/collections-types";

export const siteConfigCollection = buildCollection<SiteConfig>({
	name: "Site Configuration",
	singularName: "Configuration",
	path: SITE_CONFIG_COLLECTION,
	icon: "Settings",
	group: "Website",
	properties: {
		name: buildProperty({
			name: "Name",
			validation: { required: true },
			dataType: "string",
			description: "Your full name as displayed on the website",
		}),
		location: buildProperty({
			name: "Location",
			validation: { required: true },
			dataType: "string",
			description: "Your current location (e.g., 'Warsaw, Poland')",
		}),
		timezone: buildProperty({
			name: "Timezone",
			validation: { required: true },
			dataType: "string",
			description: "e.g. 'Europe/Warsaw'",
		}),
		hero_buttons: buildProperty({
			name: "Hero Buttons",
			description:
				"Navigation buttons for your profile (GitHub, LinkedIn, etc.)",
			dataType: "array",
			of: {
				dataType: "map",
				properties: {
					label: buildProperty({
						name: "Label",
						dataType: "string",
						description: "Button text (e.g., 'GitHub')",
					}),
					icon: buildProperty({
						name: "Icon",
						dataType: "string",
						description: "Lucide icon name (e.g., 'github')",
					}),
					url: buildProperty({
						name: "URL",
						dataType: "string",
						url: true,
						description:
							"Link destination (e.g., 'https://github.com/yourusername')",
					}),
				},
			},
		}),
		below_buttons_text: buildProperty({
			name: "Short Bio",
			dataType: "string",
			markdown: true,
			description: "Brief bio displayed below the hero buttons",
		}),
		about_me: buildProperty({
			name: "About Me",
			dataType: "string",
			markdown: true,
			description: "Detailed description about yourself",
		}),
		tech_stack: buildProperty({
			name: "Tech Stack",
			dataType: "string",
			markdown: true,
			description: "List of technologies you work with",
		}),
		footer_text: buildProperty({
			name: "Footer Text",
			dataType: "string",
			markdown: true,
			description: "Text displayed in the website footer",
		}),
	},
});
