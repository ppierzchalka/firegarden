import { Footer, Header, Hero, Slide, Slider } from "@firegarden/ui";
import { fetchSiteConfig } from "./lib/firebase-utils";
import {
	BioContent,
	ExperienceContent,
	FooterLeft,
	FooterRight,
	HeaderLogo,
	HeaderRight,
	heroImage,
	HeroContent,
	InterestsContent,
} from "./page-content";

export default async function Home() {
	// Fetch site config for the page title
	const siteConfig = await fetchSiteConfig();
	const name = siteConfig?.name || "Przemysław Pierzchałka";

	return (
		<div
			className="flex flex-col md:h-screen bg-background font-code relative overflow-hidden transition-colors duration-300"
			role="document">
			{/* Skip to main content link for keyboard users */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
				Skip to main content
			</a>

			<Header logo={<HeaderLogo />} right={<HeaderRight />} />
			<main
				className="flex-1 relative overflow-hidden crt-effect"
				id="main-content"
				tabIndex={-1}
				aria-labelledby="hero-heading">
				<Slider aria-label="Main content sections" aria-orientation="vertical">
					<Hero id="hero" image={heroImage} title={name}>
						<HeroContent />
					</Hero>
					<Slide id="about" title="About Me">
						<BioContent />
					</Slide>
					<Slide id="experience" title="Experience">
						<ExperienceContent />
					</Slide>
					<Slide id="interests" title="Interests">
						<InterestsContent />
					</Slide>
				</Slider>
			</main>
			<Footer left={<FooterLeft />} right={<FooterRight />}>
				Made with{" "}
				<span aria-label="love" className="px-2">
					❤️
				</span>{" "}
				by Przemek
			</Footer>
		</div>
	);
}
