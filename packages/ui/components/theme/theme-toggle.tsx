"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "../button";

export function ThemeToggle({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const { theme, setTheme } = useTheme();

	return (
		<div className={className} {...props}>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				{theme === "light" ? (
					<SunIcon className="h-[1.2rem] w-[1.2rem]" />
				) : (
					<MoonIcon className="h-[1.2rem] w-[1.2rem]" />
				)}
				<span className="sr-only">Toggle theme</span>
			</Button>
		</div>
	);
}
