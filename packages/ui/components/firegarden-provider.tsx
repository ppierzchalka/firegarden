import { ReactNode } from "react";
import { ThemeProvider } from "./theme";

export interface FiregardenProviderProps {
	children: ReactNode;
	defaultTheme?: "light" | "dark";
}

export const FiregardenProvider = ({
	children,
	defaultTheme = "dark",
}: FiregardenProviderProps) => (
	<ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
);
