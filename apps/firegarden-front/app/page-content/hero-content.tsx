import { Github, Linkedin, Mail } from "lucide-react";
import { HeroText, IconButton } from "@firegarden/ui";

export function HeroContent() {
	return (
		<>
			<nav
				className="flex items-center justify-center mb-8 space-x-4 animate-crt-on"
				style={{ animationDelay: "900ms" }}
				aria-label="Social links">
				<IconButton
					href="https://github.com/ppierzchalka"
					icon={<Github />}
					label="GitHub Profile"
					ariaProps={{ "aria-label": "Visit my GitHub profile" }}
				/>
				<IconButton
					href="https://www.linkedin.com/in/przemyslaw-pierzchalka/"
					icon={<Linkedin />}
					label="LinkedIn Profile"
					ariaProps={{ "aria-label": "Visit my LinkedIn profile" }}
				/>
				<IconButton
					href="mailto:przemyslawpierzchalka@gmail.com"
					icon={<Mail />}
					label="Email me"
					external={false}
					ariaProps={{ "aria-label": "Send me an email" }}
				/>
			</nav>

			<HeroText
				title="bio.txt"
				content="Frontend engineer focused on scalable architecture, AI integration, and mentoring, while balancing a love for cycling, story-driven games, and the craftsmanship of mechanical watches."
				className="animate-crt-on"
				style={{ animationDelay: "600ms" }}
			/>
		</>
	);
}
