import { ReactNode } from "react";

export type SliderProps = { children: React.ReactNode };
export type SlideProps = {
	title: string;
	id: string;
	children: ReactNode;
};
export type Slides = Record<string, React.ReactNode>;
export type ContentSlider = {
	activeSlide: number;
	isTransitioning: boolean;
	changeSlide: (slideNumber: number) => void;
};
