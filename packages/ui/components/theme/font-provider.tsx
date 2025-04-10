"use client";

import { createContext, useContext } from "react";
import "../../fonts/fonts.css";

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
	return (
		<FontContext.Provider value={{ fontClasses }}>
			<div className={`${fontClasses.geistSans}`}>{children}</div>
		</FontContext.Provider>
	);
}

export function useFonts() {
	const context = useContext(FontContext);

	if (!context) {
		throw new Error("useFonts must be used within a FontProvider");
	}

	return context;
}
