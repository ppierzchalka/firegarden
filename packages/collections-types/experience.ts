// Shared type definition for experience entries
export type Experience = {
	id?: string; // Document ID in Firestore
	created_at?: Date | string; // Timestamp
	updated_at?: Date | string; // Timestamp
	title: string;
	company: string;
	from: Date | string; // Firestore timestamp will be converted to string or Date
	to?: Date | string; // Optional end date
	description: string;
};

// The collection path in Firestore
export const EXPERIENCE_COLLECTION = "experience";
