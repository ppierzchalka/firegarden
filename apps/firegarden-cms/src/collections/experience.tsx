import { buildCollection } from "firecms";
import { localeCollection } from "./locales.tsx";

// Type definition for Experience
export type Experience = {
	title: string;
	company: string;
	from: Date;
	to?: Date;
	description: string;
};

// Experience Collection
export const experienceCollection = buildCollection<Experience>({
	name: "Experience",
	singularName: "Experience Entry",
	path: "experience",
	icon: "Work",
	group: "Website",
	subcollections: [localeCollection],
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
