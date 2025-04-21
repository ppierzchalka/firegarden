import { buildCollection, buildProperty } from "firecms";

// Type definition for Experience
export type Experience = {
	title: string;
	company: string;
	from: Date;
	to?: Date;
	description: string;
};

export const experienceCollection = buildCollection<Experience>({
	name: "Experience",
	singularName: "Experience Entry",
	path: "experience",
	icon: "Work",
	group: "Website",
	properties: {
		title: buildProperty({
			name: "Title",
			validation: { required: true },
			dataType: "string",
		}),
		company: buildProperty({
			name: "Company",
			validation: { required: true },
			dataType: "string",
		}),
		from: buildProperty({
			name: "From",
			validation: { required: true },
			dataType: "date",
		}),
		to: buildProperty({
			name: "To",
			description: "Leave blank if current",
			dataType: "date",
		}),
		description: buildProperty({
			name: "Description",
			validation: { required: true },
			dataType: "string",
			markdown: true,
			multiline: true,
		}),
	},
});
