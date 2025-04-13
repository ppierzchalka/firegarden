import { Slides, ContentSlider } from "./slider.types";

export const SlidesNav = ({
	activeSlide,
	isTransitioning,
	slides,
	changeSlide,
}: ContentSlider & { slides: Slides }) => (
	<nav
		className="fixed left-2 sm:left-4 md:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-start space-y-6 md:block hidden"
		aria-label="Main navigation"
		role="navigation">
		{Object.keys(slides).map((slide, index) => (
			<button
				key={slide}
				onClick={() => changeSlide(index)}
				className="group flex items-center text-muted-foreground hover:text-foreground transition-colors"
				aria-label={`Go to ${slide} section`}
				aria-current={activeSlide === index ? "page" : undefined}
				disabled={isTransitioning}>
				<div className="relative w-8 h-6 flex items-center">
					<span
						className={`absolute transition-all duration-500 ${
							activeSlide === index
								? "text-primary opacity-100 left-0"
								: "opacity-0 -left-4"
						}`}
						aria-hidden="true">
						&gt;
					</span>
					<span
						className={`absolute left-4 transition-colors duration-300 ${
							activeSlide === index
								? "text-foreground"
								: "text-muted-foreground"
						}`}
						aria-hidden="true">
						_
					</span>
				</div>
			</button>
		))}
	</nav>
);
