"use client";

import { createContext, useContext } from "react";

// This context will be used to pass Next.js font objects to components
export interface NextFontContextType {
	geistSans?: { className: string };
	geistMono?: { className: string };
}

export const NextFontContext = createContext<NextFontContextType | null>(null);

export function NextFontProvider({
	children,
	geistSans,
	geistMono,
}: {
	children: React.ReactNode;
	geistSans?: { className: string };
	geistMono?: { className: string };
}) {
	return (
		<NextFontContext.Provider value={{ geistSans, geistMono }}>
			{children}
		</NextFontContext.Provider>
	);
}

export function useNextFonts() {
	const context = useContext(NextFontContext);
	// This will return null if no Next.js fonts are provided
	return context;
}
