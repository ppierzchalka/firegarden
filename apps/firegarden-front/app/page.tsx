import { Footer, Header, Hero, Slide, Slider } from "@firegarden/ui";
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

export default function Home() {
	return (
		<div className="flex flex-col md:h-screen bg-background font-code relative overflow-hidden transition-colors duration-300">
			<Header logo={<HeaderLogo />} right={<HeaderRight />} />
			<main className="flex-1 relative overflow-hidden crt-effect">
				<Slider>
					<Hero id="hero" image={heroImage} title={"Przemysław Pierzchałka"}>
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
				Made with ❤️ by Przemek
			</Footer>
		</div>
	);
}
