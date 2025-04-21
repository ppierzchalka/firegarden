"use client";

import { useState, useEffect } from "react";

export const useBreakpoint = () => {
	const [isBelowMd, setIsBelowMd] = useState(false);

	useEffect(() => {
		const checkBreakpoint = () => {
			setIsBelowMd(window.innerWidth < 768); // 768px is the standard md breakpoint in Tailwind
		};

		checkBreakpoint();

		window.addEventListener("resize", checkBreakpoint);

		return () => window.removeEventListener("resize", checkBreakpoint);
	}, []);

	return { isBelowMd };
};
