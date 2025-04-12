"use client";

import { useState, useEffect } from "react";

// Helper hook to detect breakpoints
export const useBreakpoint = () => {
	const [isBelowMd, setIsBelowMd] = useState(false);

	useEffect(() => {
		const checkBreakpoint = () => {
			setIsBelowMd(window.innerWidth < 768); // 768px is the standard md breakpoint in Tailwind
		};

		// Initial check
		checkBreakpoint();

		// Add event listener for window resize
		window.addEventListener("resize", checkBreakpoint);

		// Cleanup
		return () => window.removeEventListener("resize", checkBreakpoint);
	}, []);

	return { isBelowMd };
};
