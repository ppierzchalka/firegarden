"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ThemeToggle } from "../theme";

export type HeaderProps = {
	logo?: ReactNode;
	right?: ReactNode;
};

export const Header = ({ logo, right }: HeaderProps) => {
	return (
		<header className="border-b border-blue/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 sticky top-0">
			<div className="container flex h-14 max-w-screen-2xl items-center justify-between">
				<Link href="/" className="flex items-center space-x-2 group">
					<div className="relative flex items-center">
						<span className="text-blue group-hover:text-foreground transition-colors duration-500 ease-in-out font-bold">
							&gt;_
						</span>
					</div>
					<div className="flex items-center">{logo}</div>
				</Link>
				<div className="flex items-center space-x-2">
					<div className="hidden md:flex items-center mr-2 text-xs text-muted-foreground border border-blue/20 px-2 py-1 bg-background/50">
						{right}
					</div>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
