"use client";

import { useState, useEffect, ReactNode } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../button";

export const Hero = ({
	id,
	image,
	title,
}: {
	id: string;
	image: ReactNode;
	title: string;
}) => {
	const [typedText, setTypedText] = useState("");
	const fullText =
		"Front-end developer passionate about creating beautiful, accessible, and performant web experiences.";

	useEffect(() => {
		if (typedText.length < fullText.length) {
			const timeout = setTimeout(() => {
				setTypedText(fullText.slice(0, typedText.length + 1));
			}, 50);
			return () => clearTimeout(timeout);
		}
	}, [typedText, fullText]);

	return (
		<div
			id={id}
			className="h-full w-full flex items-center justify-center shrink-0">
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

				<div
					className="md:max-w-xl lg:max-w-2xl mx-auto mb-6 text-muted-foreground md:text-lg font-code relative bg-background/30 border border-primary/10 p-3 animate-crt-on"
					style={{ animationDelay: "600ms" }}>
					<div className="flex items-center text-xs text-primary mb-1 border-b border-primary/10 pb-1">
						<span className="mr-1">+---[ bio.txt ]---+</span>
					</div>
					<p className="text-left">
						<span className="text-primary">$ </span>
						{typedText}
						<span
							className={`inline-block w-2 h-4 bg-primary ml-1 ${typedText.length === fullText.length ? "animate-blink" : "opacity-0"}`}></span>
					</p>
				</div>

				<div
					className="flex items-center justify-center mb-8 space-x-4 animate-crt-on"
					style={{ animationDelay: "900ms" }}>
					<Button
						variant="outline"
						size="icon"
						className="border border-primary/30 hover:bg-primary/10 text-foreground relative group theme-element"
						asChild>
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer">
							<Github className="w-5 h-5 text-primary group-hover:text-foreground transition-colors duration-300" />
							<span className="sr-only">GitHub</span>
						</a>
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="border border-primary/30 hover:bg-primary/10 text-foreground relative group theme-element"
						asChild>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer">
							<Linkedin className="w-5 h-5 text-primary group-hover:text-foreground transition-colors duration-300" />
							<span className="sr-only">LinkedIn</span>
						</a>
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="border border-primary/30 hover:bg-primary/10 text-foreground relative group theme-element"
						asChild>
						<a href="mailto:jane@example.com">
							<Mail className="w-5 h-5 text-primary group-hover:text-foreground transition-colors duration-300" />
							<span className="sr-only">Email</span>
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
};
