import { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import { Authenticator, FirebaseCMSApp } from "firecms";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

import { firebaseConfig } from "./firebase-config.ts";
import { websiteCollections } from "./collections/collections-config.ts";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Cache for authorized emails to reduce Firestore reads
let cachedAuthorizedEmails: string[] | null = null;
let cacheTimestamp = 0;
const CACHE_VALIDITY = 5 * 60 * 1000; // 5 minutes

export default function App() {
	const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
		async ({ user, authController }) => {
			if (!user?.email) {
				throw Error("No email associated with this account");
			}

			try {
				let authorizedEmails: string[] = [];
				const currentTime = Date.now();

				// Use cached emails if available and cache is still valid
				if (
					cachedAuthorizedEmails &&
					currentTime - cacheTimestamp < CACHE_VALIDITY
				) {
					authorizedEmails = cachedAuthorizedEmails;
					console.log("Using cached admin list");
				} else {
					// Fetch fresh data from Firestore
					const adminDocRef = doc(db, "admin", "cms_access");
					const adminDoc = await getDoc(adminDocRef);

					if (!adminDoc.exists()) {
						console.error("Admin configuration document not found");
						throw Error("CMS access configuration not found");
					}

					const adminData = adminDoc.data();
					authorizedEmails = adminData.authorizedEmails || [];

					// Update cache
					cachedAuthorizedEmails = authorizedEmails;
					cacheTimestamp = currentTime;
					console.log("Refreshed admin list from Firestore");
				}

				if (!authorizedEmails.includes(user.email)) {
					console.warn(`Unauthorized access attempt by ${user.email}`);
					throw Error(
						"Unauthorized access. You do not have permission to access this CMS."
					);
				}

				// Define roles - you can have different roles for different users if needed
				const userRoles = ["admin"];
				authController.setExtra(userRoles);

				return true;
			} catch (error) {
				console.error("Authentication error:", error);
				throw error;
			}
		},
		[]
	);

	return (
		<FirebaseCMSApp
			name={"Firegarden CMS"}
			logo="/firecms.svg"
			authentication={myAuthenticator}
			collections={websiteCollections}
			firebaseConfig={firebaseConfig}
		/>
	);
}
