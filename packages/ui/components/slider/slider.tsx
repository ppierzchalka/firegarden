"use client";

import { SlideIndicator } from "./slide-indicator";
import { useContentSlider } from "./slider.hook";
import { SliderProps } from "./slider.types";
import { childrenToSlides } from "./slider.utils";
import { SlidesNav } from "./slides-nav";
import { useBreakpoint } from "../../lib/breakpoint.hook";

export const DesktopSlider = ({ children }: SliderProps) => {
	const slides = childrenToSlides(children);
	const { activeSlide, isTransitioning, changeSlide } =
		useContentSlider(slides);

	return (
		<div className="h-full w-full overflow-hidden">
			<SlidesNav
				slides={slides}
				activeSlide={activeSlide}
				isTransitioning={isTransitioning}
				changeSlide={changeSlide}
			/>

			<SlideIndicator activeSlide={activeSlide} />

			<div
				className="flex flex-col transition-transform duration-700 ease-in-out h-full"
				style={{ transform: `translateY(-${activeSlide * 100}%)` }}>
				{children}
			</div>
		</div>
	);
};

export const Slider = ({ children }: SliderProps) => {
	const { isBelowMd } = useBreakpoint();

	// On smaller screens (below md breakpoint), return children directly
	if (isBelowMd) {
		return <>{children}</>;
	}

	// For medium screens and above, use the slider with scroll jacking
	return <DesktopSlider>{children}</DesktopSlider>;
};
