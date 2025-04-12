"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export const InterestsContent = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [typingComplete, setTypingComplete] = useState(false);
	const [selectedItem, setSelectedItem] = useState(0);

	const items = [
		{
			title: "Web Technologies",
			content:
				"I'm passionate about exploring new web technologies and frameworks. Currently experimenting with Astro, Svelte, and Web Components.",
		},
		{
			title: "Open Source",
			content:
				"I contribute to open source projects in my free time, primarily focusing on accessibility tools and UI component libraries.",
		},
		{
			title: "Design Systems",
			content:
				"I enjoy the intersection of design and development, particularly in creating and implementing cohesive design systems that scale.",
		},
		{
			title: "Outside of Tech",
			content:
				"When I'm not coding, I enjoy hiking, photography, reading science fiction, and experimenting with new cooking recipes.",
		},
	];

	useEffect(() => {
		setIsVisible(true);

		// Set typing complete after animation duration
		const timer = setTimeout(() => {
			setTypingComplete(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="font-code text-foreground/90 terminal-container">
			<div className="text-xs text-primary mb-4">
				<span>$ browse interests.dat</span>
			</div>

			<div
				className={`terminal-text ${isVisible ? "fade-in" : ""}`}
				style={{
					animationDuration: "1s",
					opacity: isVisible ? 1 : 0,
				}}>
				<div className="border border-blue/20 mb-4">
					<div className="bg-primary/10 border-b border-blue/20 px-2 py-1 text-sm">
						<span className="text-primary mr-1">$</span> Interests Catalog
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4">
						<div className="border-r border-blue/20 p-2">
							{items.map((item, index) => (
								<div
									key={index}
									onClick={() => setSelectedItem(index)}
									className={`py-1 px-2 cursor-pointer flex items-center ${selectedItem === index ? "bg-primary/20 text-foreground" : "hover:bg-primary/10 text-muted-foreground"}`}>
									{selectedItem === index && (
										<ChevronRight className="w-3 h-3 text-primary mr-1" />
									)}
									<span>{item.title}</span>
								</div>
							))}
						</div>

						<div className="p-3 col-span-3 min-h-[150px]">
							<h3 className="text-lg font-medium mb-2 text-foreground border-b border-blue/10 pb-1">
								<span className="text-primary mr-1">&gt;</span>{" "}
								{items[selectedItem]?.title}
							</h3>
							<p>{items[selectedItem]?.content}</p>
						</div>
					</div>
				</div>
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
