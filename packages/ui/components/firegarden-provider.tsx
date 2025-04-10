"use client";

import { ThemeProvider } from "./theme";

export interface FiregardenProviderProps {
	children: React.ReactNode;
	defaultTheme?: "light" | "dark" | "system";
}

export const FiregardenProvider = ({
	children,
	defaultTheme = "system",
}: FiregardenProviderProps) => (
	<ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
);
