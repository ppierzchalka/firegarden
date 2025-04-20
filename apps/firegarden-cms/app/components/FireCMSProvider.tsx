"use client";

import { FireCMSFirebaseApp } from "@firecms/firebase";
import { useState, useEffect } from "react";
import { initFirebase, FirebaseServices } from "@firegarden/firebase-config";
import { getCollections } from "./collections";
import { BrowserRouter } from "react-router-dom";

export default function FireCMSProvider() {
	// Initialize Firebase services
	const [firebaseServices, setFirebaseServices] =
		useState<FirebaseServices | null>(null);

	useEffect(() => {
		const services = initFirebase();
		setFirebaseServices(services);
	}, []);

	// Show loading state until Firebase services are initialized
	if (!firebaseServices) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
			</div>
		);
	}

	const collections = getCollections();

	return (
		<BrowserRouter>
			<FireCMSFirebaseApp
				name="Firegarden CMS"
				collections={collections as any}
			/>
		</BrowserRouter>
	);
}
