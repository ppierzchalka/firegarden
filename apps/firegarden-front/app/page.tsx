import { Footer, Header, Hero, Slider, Slide } from "@firegarden/ui";
import {
	BioContent,
	ExperienceContent,
	InterestsContent,
} from "./modal-content";

export const headerLogo = (
	<>
		<span className="font-medium tracking-wide text-foreground group-hover:text-blue transition-colors duration-500 ease-in-out">
			ppierzchalka
		</span>
		<span className="font-medium tracking-wide text-blue group-hover:text-foreground transition-colors duration-500 ease-in-out">
			.is-a.dev
		</span>
	</>
);

export const headerRight = (
	<>
		<span className="text-blue mr-1">$</span> location: warsaw | timezone: CET
	</>
);

export const footerLeft = (
	<>
		<span className="text-blue">$</span>{" "}
		<span className="text-foreground/70">stack:</span> react, typescript,
		next.js
	</>
);

export const footerRight = (
	<>
		<span className="text-blue">$</span>{" "}
		<span className="text-foreground/70">repos:</span> 42{" "}
		<span className="text-blue">|</span>{" "}
		<span className="text-foreground/70">last_commit:</span> today
	</>
);

export const children = "made by me";

export default function Home() {
	return (
		<div className="flex flex-col h-screen bg-background font-code relative overflow-hidden transition-colors duration-300">
			<div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
			<div className="absolute inset-0 bg-scanlines opacity-[0.07] pointer-events-none"></div>
			<div className="absolute inset-0 bg-pixels opacity-[0.03] pointer-events-none"></div>
			<div className="absolute inset-0 bg-pattern pointer-events-none"></div>
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue/0 via-blue/30 to-blue/0"></div>
			<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue/0 via-blue/30 to-blue/0"></div>
			<div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue/0 via-blue/30 to-blue/0"></div>
			<div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-blue/0 via-blue/30 to-blue/0"></div>
			<Header logo={headerLogo} right={headerRight} />
			<main className="flex-1 relative overflow-hidden">
				<Slider>
					<Hero id="hero" />
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
			<Footer left={footerLeft} right={footerRight}>
				made by me
			</Footer>
		</div>
	);
}
