// Shared type definition for interests
export type Interest = {
	id?: string; // Document ID in Firestore
	created_at?: Date | string; // Timestamp
	updated_at?: Date | string; // Timestamp
	label: string;
	icon?: string;
	description?: string;
};

// The collection path in Firestore
export const INTERESTS_COLLECTION = "interests";
