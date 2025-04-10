"use client";

import { FontProvider, NextFontProvider, ThemeProvider } from "./theme";

export interface FiregardenProviderProps {
	children: React.ReactNode;
	defaultTheme?: "light" | "dark" | "system";
	fonts?: {
		geistSans?: { className: string };
		geistMono?: { className: string };
	};
}

export function FiregardenProvider({
	children,
	defaultTheme = "system",
	fonts,
}: FiregardenProviderProps) {
	// Wrap with NextFontProvider if Next.js fonts are provided
	const content = (
		<ThemeProvider defaultTheme={defaultTheme}>
			<FontProvider>{children}</FontProvider>
		</ThemeProvider>
	);

	// If Next.js fonts are provided, wrap with NextFontProvider
	if (fonts?.geistSans || fonts?.geistMono) {
		return (
			<NextFontProvider geistSans={fonts.geistSans} geistMono={fonts.geistMono}>
				{content}
			</NextFontProvider>
		);
	}

	// Otherwise, just return the regular content
	return content;
}
