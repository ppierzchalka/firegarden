"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { IconButton } from "../icon-button";
import { Button } from "../button";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

	if (!mounted) {
		return (
			<Button
				variant="outline"
				size="icon"
				className="border border-blue/30 hover:bg-primary/10 text-foreground relative group w-9 h-9 p-0 button-hover">
				<span className="sr-only">Toggle theme</span>
				<div aria-hidden="true" className="flex items-center justify-center">
					{theme === "dark" ? <Sun /> : <Moon />}
				</div>
			</Button>
		);
	}

	return (
		<IconButton
			onClick={toggleTheme}
			icon={theme === "dark" ? <Sun /> : <Moon />}
			label={
				theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
			}
			className="w-9 h-9 p-0 button-hover"
			ariaProps={{
				"aria-live": "polite",
				role: "switch",
				"aria-checked": theme === "dark",
				"aria-pressed": false,
			}}
		/>
	);
};
