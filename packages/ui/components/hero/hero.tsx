"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../button";

export const Hero = ({ id }: { id: string }) => {
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
			<div className="container max-w-4xl px-4 py-8 mx-auto text-center relative z-10 crt-effect">
				<div className="absolute inset-0 bg-pixels opacity-[0.05] pointer-events-none"></div>

				<div className="relative mx-auto mb-8 overflow-hidden w-44 h-44 md:w-56 md:h-56 border-2 border-blue/30 animate-crt-on">
					<div className="absolute inset-0 bg-scanlines opacity-10 z-20"></div>
					<div className="absolute inset-0 bg-noise opacity-5 z-10"></div>
					<Image
						src="/placeholder.svg?height=224&width=224"
						alt="Profile"
						width={224}
						height={224}
						className="object-cover"
						priority
					/>
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue/0 via-blue/30 to-blue/0"></div>
					<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue/0 via-blue/30 to-blue/0"></div>
					<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue/50"></div>
					<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue/50"></div>
					<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue/50"></div>
					<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue/50"></div>
				</div>

				<div
					className="relative inline-block mb-2 px-4 py-1 bg-blue/5 border-l-2 border-blue/30 animate-crt-on"
					style={{ animationDelay: "300ms" }}>
					<h1 className="text-4xl font-bold tracking-tight md:text-5xl font-code text-foreground">
						Przemyslaw Pierzchalka
					</h1>
				</div>

				<div className="w-24 h-px mx-auto my-4 bg-blue/40"></div>

				<div
					className="max-w-2xl mx-auto mb-6 text-muted-foreground md:text-lg font-code relative bg-background/30 border border-blue/10 p-3 animate-crt-on"
					style={{ animationDelay: "600ms" }}>
					<div className="flex items-center text-xs text-blue mb-1 border-b border-blue/10 pb-1">
						<span className="mr-1">+---[ bio.txt ]---+</span>
					</div>
					<p className="text-left">
						<span className="text-blue">$ </span>
						{typedText}
						<span
							className={`inline-block w-2 h-4 bg-blue ml-1 ${typedText.length === fullText.length ? "animate-blink" : "opacity-0"}`}></span>
					</p>
				</div>

				<div
					className="flex items-center justify-center mb-8 space-x-4 animate-crt-on"
					style={{ animationDelay: "900ms" }}>
					<Button
						variant="outline"
						size="icon"
						className="border border-blue/30 hover:bg-blue/10 text-foreground relative group"
						asChild>
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer">
							<Github className="w-5 h-5 text-blue group-hover:text-foreground transition-colors duration-300" />
							<span className="sr-only">GitHub</span>
							<div className="absolute -inset-0.5 border border-blue/0 group-hover:border-blue/30 transition-all duration-300"></div>
						</a>
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="border border-blue/30 hover:bg-blue/10 text-foreground relative group"
						asChild>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer">
							<Linkedin className="w-5 h-5 text-blue group-hover:text-foreground transition-colors duration-300" />
							<span className="sr-only">LinkedIn</span>
							<div className="absolute -inset-0.5 border border-blue/0 group-hover:border-blue/30 transition-all duration-300"></div>
						</a>
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="border border-blue/30 hover:bg-blue/10 text-foreground relative group"
						asChild>
						<a href="mailto:jane@example.com">
							<Mail className="w-5 h-5 text-blue group-hover:text-foreground transition-colors duration-300" />
							<span className="sr-only">Email</span>
							<div className="absolute -inset-0.5 border border-blue/0 group-hover:border-blue/30 transition-all duration-300"></div>
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
};
