"use client";

import { useState, useEffect, useCallback } from "react";
import { ContentSlider, Slides } from "./slider.types";

export const useContentSlider = (slides: Slides): ContentSlider => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const slidesIds = Object.keys(slides);

	// Function to change slides with transition lock
	const changeSlide = useCallback(
		(index: number) => {
			if (
				isTransitioning ||
				index === activeSlide ||
				index < 0 ||
				index >= slidesIds.length
			)
				return;

			setIsTransitioning(true);
			setActiveSlide(index);

			// Reset transition lock after animation completes
			setTimeout(() => {
				setIsTransitioning(false);
			}, 700);
		},
		[activeSlide, isTransitioning]
	);

	// Handle wheel events
	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();

			if (e.deltaY > 0) {
				// Scroll down
				changeSlide(activeSlide + 1);
			} else {
				// Scroll up
				changeSlide(activeSlide - 1);
			}
		};

		// Add event listener to document instead of a specific element
		document.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			document.removeEventListener("wheel", handleWheel);
		};
	}, [activeSlide, changeSlide]);

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case "ArrowDown":
				case "PageDown":
					e.preventDefault();
					changeSlide(activeSlide + 1);
					break;
				case "ArrowUp":
				case "PageUp":
					e.preventDefault();
					changeSlide(activeSlide - 1);
					break;
				case "Home":
					e.preventDefault();
					changeSlide(0);
					break;
				case "End":
					e.preventDefault();
					changeSlide(slidesIds.length - 1);
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeSlide, changeSlide]);

	// Handle touch events for mobile
	useEffect(() => {
		let touchStartY = 0;

		const handleTouchStart = (e: TouchEvent) => {
			touchStartY = e.touches[0]?.clientY || touchStartY;
		};

		const handleTouchMove = (e: TouchEvent) => {
			e.preventDefault();
			const touchEndY = e.touches[0]?.clientY || 0;
			const diff = touchStartY - touchEndY;

			if (Math.abs(diff) > 50) {
				// Threshold to detect swipe
				if (diff > 0) {
					// Swipe up (next slide)
					changeSlide(activeSlide + 1);
				} else {
					// Swipe down (previous slide)
					changeSlide(activeSlide - 1);
				}
				touchStartY = touchEndY; // Reset for continuous swiping
			}
		};

		document.addEventListener("touchstart", handleTouchStart);
		document.addEventListener("touchmove", handleTouchMove, { passive: false });

		return () => {
			document.removeEventListener("touchstart", handleTouchStart);
			document.removeEventListener("touchmove", handleTouchMove);
		};
	}, [activeSlide, changeSlide]);

	return {
		activeSlide,
		isTransitioning,
		changeSlide,
	};
};
