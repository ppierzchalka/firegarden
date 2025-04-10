"use client";

import { FontProvider, ThemeProvider } from "./theme";

export interface FiregardenProviderProps {
	children: React.ReactNode;
	defaultTheme?: "light" | "dark" | "system";
}

export function FiregardenProvider({
	children,
	defaultTheme = "system",
}: FiregardenProviderProps) {
	return (
		<ThemeProvider defaultTheme={defaultTheme}>
			<FontProvider>{children}</FontProvider>
		</ThemeProvider>
	);
}
