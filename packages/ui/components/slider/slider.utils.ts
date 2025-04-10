import { Children, isValidElement } from "react";
import { Slides } from "./slider.types";

export const childrenToSlides = (children: React.ReactNode): Slides => {
	const slidesObj: Record<string, React.ReactNode> = {};

	Children.forEach(children, (child) => {
		if (!isValidElement(child)) return;

		const id = child.props.id;
		if (!id) return;

		slidesObj[id] = child;
	});

	return slidesObj;
};
