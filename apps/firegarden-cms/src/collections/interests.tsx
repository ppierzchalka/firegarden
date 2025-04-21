import { buildCollection, buildProperty } from "firecms";

export type Interest = {
	label: string;
	icon?: string;
	description?: string;
};

export const interestsCollection = buildCollection<Interest>({
	name: "Interests",
	singularName: "Interest",
	path: "interests",
	icon: "EmojiEvents",
	group: "Website",
	properties: {
		label: buildProperty({
			name: "Label",
			validation: { required: true },
			dataType: "string",
		}),
		icon: buildProperty({
			name: "Icon (optional)",
			dataType: "string",
			validation: { required: false },
		}),
		description: buildProperty({
			name: "Description",
			dataType: "string",
			markdown: true,
			multiline: true,
			validation: { required: false },
		}),
	},
});
