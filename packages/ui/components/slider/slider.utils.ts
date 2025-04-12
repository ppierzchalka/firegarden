import { Children, isValidElement, ReactElement } from "react";
import { SlideProps, Slides } from "./slider.types";

export const childrenToSlides = (
	children: ReactElement<SlideProps>[]
): Slides => {
	const slidesObj: Record<string, ReactElement<SlideProps>> = {};

	Children.forEach(children, (child) => {
		if (!isValidElement(child)) return;

		const id = child.props.id;
		if (!id) return;

		slidesObj[id] = child;
	});

	return slidesObj;
};
