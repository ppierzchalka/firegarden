"use client";

import { createContext, useContext } from "react";
import "../../fonts/fonts.css";
import { useNextFonts } from "./next-font-loader";

// Define font class names that will be used throughout the application
const fontClasses = {
	geistSans: "font-geist-sans",
	geistMono: "font-geist-mono",
};

type FontContextType = {
	fontClasses: {
		geistSans: string;
		geistMono: string;
	};
};

const FontContext = createContext<FontContextType>({
	fontClasses,
});

export function FontProvider({ children }: { children: React.ReactNode }) {
	// Check if Next.js fonts are available
	const nextFonts = useNextFonts();

	// Use Next.js font classes if available, otherwise fall back to CSS classes
	const sansClass = nextFonts?.geistSans?.className || fontClasses.geistSans;

	return (
		<FontContext.Provider value={{ fontClasses }}>
			<div className={sansClass}>{children}</div>
		</FontContext.Provider>
	);
}

export function useFonts() {
	const context = useContext(FontContext);
	const nextFonts = useNextFonts();

	if (!context) {
		throw new Error("useFonts must be used within a FontProvider");
	}

	// If Next.js fonts are available, we'll provide them for direct use in components
	return {
		...context,
		nextFonts,
	};
}
