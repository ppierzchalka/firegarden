import { buildCollection, buildProperty } from "firecms";
import {
	Experience,
	EXPERIENCE_COLLECTION,
} from "@firegarden/collections-types";

export const experienceCollection = buildCollection<Experience>({
	name: "Experience",
	singularName: "Experience Entry",
	path: EXPERIENCE_COLLECTION,
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
			validation: { required: false },
			dataType: "date",
			description: "Leave empty if this is your current position",
		}),
		description: buildProperty({
			name: "Description",
			validation: { required: true },
			dataType: "string",
			markdown: true,
		}),
	},
});
