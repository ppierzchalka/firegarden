"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { HeroText, IconButton } from "@firegarden/ui";

export function HeroContent() {
	return (
		<>
			<div
				className="flex items-center justify-center mb-8 space-x-4 animate-crt-on"
				style={{ animationDelay: "900ms" }}>
				<IconButton
					href="https://github.com"
					icon={<Github />}
					label="GitHub"
				/>
				<IconButton
					href="https://linkedin.com"
					icon={<Linkedin />}
					label="LinkedIn"
				/>
				<IconButton
					href="mailto:przemek@example.com"
					icon={<Mail />}
					label="Email"
					external={false}
				/>
			</div>

			<HeroText
				title="bio.txt"
				content="Front-end developer passionate about creating beautiful, accessible, and performant web experiences."
				className="animate-crt-on"
				style={{ animationDelay: "600ms" }}
			/>
		</>
	);
}
