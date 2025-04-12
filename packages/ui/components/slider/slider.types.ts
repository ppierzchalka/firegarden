import { ReactElement, ReactNode } from "react";

export type SliderProps = { children: ReactElement<SlideProps>[] };
export type SlideProps = {
	title: string;
	id: string;
	children: ReactNode;
};
export type Slides = Record<string, ReactNode>;
export type ContentSlider = {
	activeSlide: number;
	isTransitioning: boolean;
	changeSlide: (slideNumber: number) => void;
};
