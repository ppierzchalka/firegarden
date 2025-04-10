"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "../button";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure component is mounted to avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button
				variant="outline"
				size="icon"
				className="border border-blue/30 hover:bg-blue/10 text-foreground relative group w-9 h-9 p-0 button-hover">
				<span className="sr-only">Toggle theme</span>
			</Button>
		);
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="border border-blue/30 hover:bg-blue/10 text-foreground relative group w-9 h-9 p-0 button-hover">
			{theme === "dark" ? (
				<Sun className="h-[1.2rem] w-[1.2rem] text-blue" />
			) : (
				<Moon className="h-[1.2rem] w-[1.2rem] text-blue" />
			)}
			<span className="sr-only">Toggle theme</span>
			<div className="absolute -inset-0.5 border border-blue/0 group-hover:border-blue/30 transition-all duration-500 ease-in-out"></div>
		</Button>
	);
};
