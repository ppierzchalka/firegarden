"use client";

import { useState, useEffect, CSSProperties } from "react";
import { useBreakpoint } from "../../lib/breakpoint.hook";
import { cn } from "../../lib/utils";

export interface HeroTextProps {
	/** The title to display in the text box */
	title: string;
	/** The content text that will be animated */
	content: string;
	/** Additional CSS classes */
	className?: string;
	/** Additional inline styles */
	style?: CSSProperties;
}

export function HeroText({ title, content, className, style }: HeroTextProps) {
	const { isBelowMd } = useBreakpoint();
	const [typedText, setTypedText] = useState("");

	useEffect(() => {
		if (!isBelowMd && typedText.length < content.length) {
			const timeout = setTimeout(() => {
				setTypedText(content.slice(0, typedText.length + 1));
			}, 50);
			return () => clearTimeout(timeout);
		}
	}, [typedText, content, isBelowMd]);

	return (
		<div
			className={cn(
				"md:max-w-xl lg:max-w-2xl mx-auto mb-6 text-muted-foreground md:text-lg font-code relative bg-background/30 border border-primary/10 p-3",
				className
			)}
			style={style}
			role="region"
			aria-label={`${title} description`}>
			<div className="flex items-center text-xs text-primary mb-1 border-b border-primary/10 pb-1">
				<span className="mr-1" aria-hidden="true">
					+---[ {title} ]---+
				</span>
			</div>
			<p className="text-left">
				<span className="text-primary" aria-hidden="true">
					${" "}
				</span>
				{isBelowMd ? content : typedText}
				<span
					className={`inline-block w-2 h-4 bg-primary ml-1 ${
						typedText.length === content.length ? "animate-blink" : "opacity-0"
					}`}
					aria-hidden="true"></span>
			</p>
		</div>
	);
}
