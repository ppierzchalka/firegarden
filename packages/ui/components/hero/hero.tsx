import { ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface HeroProps {
	/** The ID for the hero section */
	id: string;
	/** The profile image to display */
	image: ReactNode;
	/** The title to display */
	title: string;
	/** Children components (like HeroText and social buttons) */
	children: ReactNode;
	/** Optional additional classes */
	className?: string;
}

export const Hero = ({ id, image, title, children, className }: HeroProps) => {
	return (
		<div
			id={id}
			className={cn(
				"h-full w-full flex items-center justify-center shrink-0",
				className
			)}>
			<div className="container max-w-[85%] sm:max-w-[80%] md:max-w-3xl lg:max-w-4xl px-4 py-8 mx-auto text-center relative z-10">
				<div className="relative mx-auto mb-8 overflow-hidden w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 border-2 border-primary/30 animate-crt-on">
					<div className="absolute inset-0 bg-scanlines opacity-10 z-20"></div>
					<div className="absolute inset-0 bg-noise opacity-5 z-10"></div>
					<div className="w-full h-full flex items-center justify-center">
						{image}
					</div>
				</div>

				<div
					className="relative inline-block mb-2 px-4 py-1 bg-primary/5 border-l-2 border-primary/30 animate-crt-on theme-glow"
					style={{ animationDelay: "300ms" }}>
					<h1 className="text-4xl font-bold tracking-tight md:text-5xl font-code text-foreground">
						{title}
					</h1>
				</div>

				<div className="w-24 h-px mx-auto my-4 bg-primary/40 theme-glow"></div>

				{children}
			</div>
		</div>
	);
};
