// Shared type definition for site configuration
export type SiteConfig = {
	id?: string; // Document ID in Firestore
	created_at?: Date | string; // Timestamp
	updated_at?: Date | string; // Timestamp
	name: string;
	location: string;
	timezone: string;
	hero_buttons: Array<{
		label: string;
		icon: string;
		url: string;
	}>;
	below_buttons_text: string;
	about_me: string;
	tech_stack: string;
	footer_text: string;
};

// The collection path in Firestore
export const SITE_CONFIG_COLLECTION = "site_config";
