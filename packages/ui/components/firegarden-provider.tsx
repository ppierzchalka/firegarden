import { ThemeProvider } from "./theme";

export interface FiregardenProviderProps {
	children: React.ReactNode;
	defaultTheme?: "light" | "dark";
}

export const FiregardenProvider = ({
	children,
	defaultTheme = "dark",
}: FiregardenProviderProps) => (
	<ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
);
