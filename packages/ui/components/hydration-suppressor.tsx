"use client";

import { ReactNode, useEffect, useState } from "react";

/**
 * BrowserExtensionSafeWrapper component addresses hydration errors
 * specifically caused by browser extensions that modify the DOM.
 *
 * Rather than suppressing all hydration warnings, it uses a client-only
 * rendering strategy for the affected content, which avoids the hydration
 * mismatch entirely.
 */
export function HydrationSuppressor({ children }: { children: ReactNode }) {
	// Only render children on the client side
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// During SSR and initial client render, return an empty placeholder
	// This avoids hydration mismatches by not rendering problematic content during hydration
	if (!isMounted) {
		return (
			<div aria-hidden="true" className="browser-extension-placeholder"></div>
		);
	}

	// Once mounted on client, render the actual children
	return <>{children}</>;
}
