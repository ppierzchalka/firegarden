import { buildCollection } from "firecms";
import { localeCollection } from "./locales.tsx";

// Type definition for SiteConfig
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

// Site Configuration Collection
export const siteConfigCollection = buildCollection<SiteConfig>({
	name: "Site Configuration",
	singularName: "Configuration",
	path: "site_config",
	icon: "Settings",
	group: "Website",
	subcollections: [localeCollection],
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
