import { buildCollection } from "firecms";
import { localeCollection } from "./locales.tsx";

// Type definition for Interest
export type Interest = {
	label: string;
	icon?: string;
	description?: string;
};

// Interests Collection
export const interestsCollection = buildCollection<Interest>({
	name: "Interests",
	singularName: "Interest",
	path: "interests",
	icon: "EmojiEvents",
	group: "Website",
	subcollections: [localeCollection],
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
