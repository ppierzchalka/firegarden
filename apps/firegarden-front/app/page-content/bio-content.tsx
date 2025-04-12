"use client";

import { useEffect, useState, useRef } from "react";

export const BioContent = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [typingComplete, setTypingComplete] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsVisible(true);

		// Set typing complete after animation duration
		const timer = setTimeout(() => {
			setTypingComplete(true);
		}, 1500); // Adjust based on your animation duration

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="font-code text-foreground/90 terminal-container">
			<div className="text-xs text-primary mb-4">
				<span>$ cat about-me.txt</span>
			</div>

			<div
				ref={contentRef}
				className={`space-y-4 terminal-text ${isVisible ? "typing-animation" : ""}`}
				style={{
					animationDuration: "1.5s",
					opacity: isVisible ? 1 : 0,
				}}>
				<p>
					I'm a front-end developer with 5 years of experience building
					responsive, accessible, and performant web applications. I specialize
					in React, TypeScript, and modern CSS techniques.
				</p>

				<p>
					My approach to development focuses on creating intuitive user
					experiences while maintaining clean, maintainable code. I'm passionate
					about web standards, performance optimization, and staying current
					with the latest front-end technologies.
				</p>

				<p>
					When I'm not coding, you can find me hiking, reading science fiction,
					or experimenting with new cooking recipes.
				</p>
			</div>

			{typingComplete && (
				<div className="mt-4 text-xs text-muted-foreground flex items-center">
					<span className="text-primary mr-2">$</span>
					<span className="inline-block w-2 h-4 bg-primary animate-blink"></span>
				</div>
			)}
		</div>
	);
};
