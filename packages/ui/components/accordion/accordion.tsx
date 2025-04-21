"use client";

import {
	isValidElement,
	Children,
	useState,
	cloneElement,
	ReactElement,
} from "react";
import { AccordionContext } from "./accordion.hook";
import { AccordionItemProps } from "./accordion-item";
export interface AccordionProps {
	children:
		| ReactElement<AccordionItemProps>[]
		| ReactElement<AccordionItemProps>;
	className?: string;
}

export function Accordion({ children, className = "" }: AccordionProps) {
	let firstItemId: string | null = null;

	Children.forEach(children, (child) => {
		if (
			firstItemId === null &&
			isValidElement(child) &&
			(child.props.id || child.props.title)
		) {
			firstItemId = child.props.id || child.props.title;
		}
	});

	const [selectedItem, setSelectedItem] = useState<string | null>(firstItemId);

	const handleSetSelectedItem = (id: string | null) => {
		if (id !== null) {
			setSelectedItem(id);
		}
	};

	return (
		<AccordionContext.Provider
			value={{ selectedItem, setSelectedItem: handleSetSelectedItem }}>
			<div
				className={`font-code text-foreground/90 terminal-container ${className}`}
				role="region"
				aria-label="Interests accordion">
				<div className="text-xs text-primary mb-4" aria-hidden="true">
					<span>$ browse accordion.dat</span>
				</div>

				<div className="terminal-text">
					<div className="border border-blue/20 mb-4">
						<div className="bg-primary/10 border-b border-blue/20 px-2 py-1 text-sm">
							<span className="text-primary mr-1" aria-hidden="true">
								$
							</span>{" "}
							Accordion Content
						</div>

						<div className="grid grid-cols-1 md:grid-cols-4">
							<nav
								className="border-r border-blue/20 p-2"
								aria-label="Interests navigation">
								{Children.map(children, (child) => {
									if (!isValidElement(child)) return null;

									const titleProps = {
										renderTitle: true,
										renderContent: false,
									};
									return cloneElement(child, titleProps);
								})}
							</nav>

							<div
								className="p-3 col-span-3 min-h-[150px]"
								role="tabpanel"
								aria-live="polite">
								{Children.map(children, (child) => {
									if (!isValidElement(child)) return null;

									const contentProps = {
										renderTitle: false,
										renderContent: true,
									};
									return cloneElement(child, contentProps);
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
