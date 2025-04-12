import { ChevronDown } from "lucide-react";
import { ContentSlider } from "./slider.types";

export const SlideIndicator = ({
	activeSlide,
}: Pick<ContentSlider, "activeSlide">) => (
	<>
		{activeSlide === 0 && (
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-primary">
				<ChevronDown className="w-6 h-6" />
			</div>
		)}
	</>
);
