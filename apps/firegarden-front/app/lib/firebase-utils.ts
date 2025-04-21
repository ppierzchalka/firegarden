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

const converter = <T extends DocumentData>(
	doc: QueryDocumentSnapshot<DocumentData>
): T => {
	const data = doc.data();

	Object.keys(data).forEach((key) => {
		if (data[key]?.toDate instanceof Function) {
			data[key] = data[key].toDate();
		}
	});

	return {
		id: doc.id,
		...data,
	} as T;
};

export async function fetchSiteConfig(): Promise<SiteConfig | null> {
	try {
		const q = query(
			collection(db, SITE_CONFIG_COLLECTION),
			orderBy("created_at", "desc"),
			limit(1)
		);

		const snapshot = await getDocs(q);

		console.log("Site config snapshot:", snapshot.docs[0]);

		if (snapshot.empty) {
			console.warn("No site configuration found");
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

		console.log("Experience snapshot:", snapshot);

		if (snapshot.empty) {
			console.warn("No experience entries found");
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

		console.log("Interests snapshot:", snapshot);

		if (snapshot.empty) {
			console.warn("No interests found");
			return [];
		}

		return snapshot.docs.map((doc) => converter<Interest>(doc));
	} catch (error) {
		console.error("Error fetching interests:", error);
		return [];
	}
}
