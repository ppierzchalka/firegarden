import { buildCollection, buildEnumValues } from "firecms";

const locales = buildEnumValues({
	"en-US": "English (United States)",
	"pl-PL": "Polish (Poland)",
});

export const localeCollection = buildCollection({
	path: "locale",
	customId: locales,
	name: "Locales",
	singularName: "Locale",
	properties: {
		name: {
			name: "Title",
			validation: { required: true },
			dataType: "string",
		},
		selectable: {
			name: "Selectable",
			description: "Is this locale selectable",
			dataType: "boolean",
		},
	},
});
