import { HeroText, IconButton } from "@firegarden/ui";
import { fetchSiteConfig } from "../lib/firebase-utils";
import * as LucideIcons from "lucide-react";

export async function HeroContent() {
	const siteConfig = await fetchSiteConfig();

	if (!siteConfig) {
		return (
			<HeroText
				title="bio.txt"
				content={
					"Site configuration not found. Please set up your site in the CMS."
				}
				className="animate-crt-on"
				style={{ animationDelay: "600ms" }}
			/>
		);
	}

	return (
		<>
			<nav
				className="flex items-center justify-center mb-8 space-x-4 animate-crt-on"
				style={{ animationDelay: "900ms" }}
				aria-label="Social links">
				{siteConfig.hero_buttons.map((button, index) => {
					const IconComponent =
						button.icon && (LucideIcons as Record<string, any>)[button.icon]
							? (LucideIcons as Record<string, any>)[button.icon]
							: LucideIcons.Link;

					return (
						<IconButton
							key={index}
							href={button.url}
							icon={<IconComponent />}
							label={button.label}
							ariaProps={{ "aria-label": `Visit my ${button.label}` }}
						/>
					);
				})}
			</nav>

			<HeroText
				title="bio.txt"
				content={siteConfig.below_buttons_text}
				className="animate-crt-on"
				style={{ animationDelay: "600ms" }}
			/>
		</>
	);
}
