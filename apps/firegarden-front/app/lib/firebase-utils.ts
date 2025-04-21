import {
	collection,
	getDocs,
	query,
	orderBy,
	limit,
	DocumentData,
	QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import {
	SiteConfig,
	Experience,
	Interest,
	SITE_CONFIG_COLLECTION,
	EXPERIENCE_COLLECTION,
	INTERESTS_COLLECTION,
} from "@firegarden/collections-types";

/**
 * Converts a Firestore document to the specified type
 * Adds the document ID and converts any Firestore timestamps to JavaScript Date objects
 */
function converter<T>(doc: QueryDocumentSnapshot<DocumentData>): T {
	const data = doc.data();

	// Process any Firestore Timestamps into JavaScript Date objects
	Object.keys(data).forEach((key) => {
		if (data[key]?.toDate instanceof Function) {
			data[key] = data[key].toDate();
		}
	});

	// Return with document ID added
	return {
		id: doc.id,
		...data,
	} as T;
}

export async function fetchSiteConfig(): Promise<SiteConfig | null> {
	try {
		// Get the site config without ordering by created_at since it might not exist
		const q = query(collection(db, SITE_CONFIG_COLLECTION), limit(1));
		const snapshot = await getDocs(q);

		if (snapshot.empty || !snapshot.docs[0]) {
			return null;
		}

		return converter<SiteConfig>(snapshot.docs[0]);
	} catch (error) {
		console.error("Error fetching site config:", error);
		return null;
	}
}

export async function fetchExperiences(): Promise<Experience[]> {
	try {
		const q = query(
			collection(db, EXPERIENCE_COLLECTION),
			orderBy("from", "desc")
		);

		const snapshot = await getDocs(q);

		if (snapshot.empty) {
			return [];
		}

		return snapshot.docs.map((doc) => converter<Experience>(doc));
	} catch (error) {
		console.error("Error fetching experiences:", error);
		return [];
	}
}

export async function fetchInterests(): Promise<Interest[]> {
	try {
		const q = query(collection(db, INTERESTS_COLLECTION));

		const snapshot = await getDocs(q);

		if (snapshot.empty) {
			return [];
		}

		return snapshot.docs.map((doc) => converter<Interest>(doc));
	} catch (error) {
		console.error("Error fetching interests:", error);
		return [];
	}
}
