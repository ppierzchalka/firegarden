"use client";

import React, { createContext, useContext, useState } from "react";

// Context to manage the selected accordion item
type AccordionContextType = {
	selectedItem: string | null;
	setSelectedItem: (id: string | null) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
	undefined
);

export interface AccordionProps {
	children: React.ReactNode;
	className?: string;
}

export function Accordion({ children, className = "" }: AccordionProps) {
	// Find the first item ID or title to use as default selected item
	let firstItemId: string | null = null;

	// Safely extract the first id or title from children
	React.Children.forEach(children, (child) => {
		if (
			firstItemId === null &&
			React.isValidElement(child) &&
			(child.props.id || child.props.title)
		) {
			firstItemId = child.props.id || child.props.title;
		}
	});

	const [selectedItem, setSelectedItem] = useState<string | null>(firstItemId);

	// Custom setter that prevents unselecting the last active item
	const handleSetSelectedItem = (id: string | null) => {
		if (id !== null) {
			setSelectedItem(id);
		}
		// If trying to unselect (setting to null), do nothing - we always want an item selected
	};

	return (
		<AccordionContext.Provider
			value={{ selectedItem, setSelectedItem: handleSetSelectedItem }}>
			<div
				className={`font-code text-foreground/90 terminal-container ${className}`}>
				<div className="text-xs text-primary mb-4">
					<span>$ browse accordion.dat</span>
				</div>

				<div className="terminal-text">
					<div className="border border-blue/20 mb-4">
						<div className="bg-primary/10 border-b border-blue/20 px-2 py-1 text-sm">
							<span className="text-primary mr-1">$</span> Accordion Content
						</div>

						<div className="grid grid-cols-1 md:grid-cols-4">
							<div className="border-r border-blue/20 p-2">
								{React.Children.map(children, (child) => {
									if (!React.isValidElement(child)) return null;

									// Pass props directly without typecasting
									const titleProps = {
										renderTitle: true,
										renderContent: false,
									};
									return React.cloneElement(child, titleProps);
								})}
							</div>

							<div className="p-3 col-span-3 min-h-[150px]">
								{React.Children.map(children, (child) => {
									if (!React.isValidElement(child)) return null;

									// Pass props directly without typecasting
									const contentProps = {
										renderTitle: false,
										renderContent: true,
									};
									return React.cloneElement(child, contentProps);
								})}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4 text-xs text-muted-foreground flex items-center">
					<span className="text-primary mr-2">$</span>
					<span className="inline-block w-2 h-4 bg-primary animate-blink"></span>
				</div>
			</div>
		</AccordionContext.Provider>
	);
}

export const useAccordion = () => {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error("useAccordion must be used within an AccordionProvider");
	}
	return context;
};
