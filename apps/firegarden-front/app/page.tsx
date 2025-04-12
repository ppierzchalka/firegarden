import { Footer, Header, Hero, Slider, Slide } from "@firegarden/ui";
import {
	BioContent,
	ExperienceContent,
	InterestsContent,
} from "./modal-content";
import Image from "next/image";

export const headerLogo = (
	<>
		<span className="font-medium tracking-wide text-foreground group-hover:text-primary transition-colors duration-500 ease-in-out">
			ppierzchalka
		</span>
		<span className="font-medium tracking-wide text-primary group-hover:text-foreground transition-colors duration-500 ease-in-out theme-glow">
			.is-a.dev
		</span>
	</>
);

export const headerRight = (
	<>
		<span className="text-primary mr-1">$</span> location: łódź | timezone: CET
	</>
);

export const footerLeft = (
	<>
		<span className="text-primary">$</span>{" "}
		<span className="text-foreground/70">stack:</span> react, rxjs, typescript
	</>
);

export const footerRight = (
	<>
		<span className="text-primary">$</span>{" "}
		<span className="text-foreground/70">repos:</span> 42{" "}
		<span className="text-primary">|</span>{" "}
		<span className="text-foreground/70">last_commit:</span> today
	</>
);

export const children = "made by me";

export const image = (
	<div className="image-container mx-auto w-[224px] h-[224px] flex items-center justify-center">
		<Image
			src="/IMG_5423.JPEG"
			alt="Profile photo of a man with a beard in a green t-shirt"
			width={224}
			height={224}
			className="object-cover w-full h-full"
			priority
			aria-label="Profile photo"
		/>
	</div>
);

export default function Home() {
	return (
		<div className="flex flex-col h-screen bg-background font-code relative overflow-hidden transition-colors duration-300">
			<Header logo={headerLogo} right={headerRight} />
			<main className="flex-1 relative overflow-hidden crt-effect">
				<Slider>
					<Hero id="hero" image={image} title={"Przemysław Pierzchałka"} />
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
