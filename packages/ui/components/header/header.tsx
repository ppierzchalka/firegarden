import Link from "next/link";
import { ReactNode } from "react";
import { ThemeToggle } from "../theme";

export type HeaderProps = {
	logo?: ReactNode;
	right?: ReactNode;
};

export const Header = ({ logo, right }: HeaderProps) => {
	return (
		<header
			className="border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 sticky top-0"
			role="banner">
			<div className="container flex h-14 max-w-screen-2xl items-center justify-between">
				<Link
					href="/"
					className="flex items-center space-x-2 group"
					aria-label="Go to homepage">
					<div className="relative flex items-center">
						<span
							className="text-primary group-hover:text-foreground transition-colors duration-500 ease-in-out font-bold"
							aria-hidden="true">
							&gt;_
						</span>
					</div>
					<div className="flex items-center">{logo}</div>
				</Link>
				<div className="flex items-center space-x-2">
					<nav
						className="hidden md:flex items-center mr-2 text-xs text-muted-foreground border border-primary/20 px-2 py-1 bg-background/50 hover:theme-glow"
						aria-label="Header navigation">
						{right}
					</nav>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
