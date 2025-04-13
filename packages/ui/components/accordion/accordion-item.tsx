"use client";

import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { useAccordion } from "./accordion.hook";

export interface AccordionItemProps {
	title: string;
	children: ReactNode;
	id?: string;
	renderTitle?: boolean;
	renderContent?: boolean;
}

export function AccordionItem({
	title,
	children,
	id = title,
	renderTitle = false,
	renderContent = false,
}: AccordionItemProps) {
	const { selectedItem, setSelectedItem } = useAccordion();
	const isSelected = selectedItem === id;

	if (renderTitle) {
		return (
			<button
				onClick={() => setSelectedItem(isSelected ? null : id)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setSelectedItem(isSelected ? null : id);
					}
				}}
				className={`py-1 px-2 cursor-pointer flex items-center w-full text-left ${
					isSelected
						? "bg-primary/20 text-foreground"
						: "hover:bg-primary/10 text-muted-foreground"
				}`}
				aria-expanded={isSelected}
				aria-controls={`accordion-content-${id}`}
				id={`accordion-header-${id}`}>
				{isSelected && (
					<ChevronRight
						className="w-3 h-3 text-primary mr-1"
						aria-hidden="true"
					/>
				)}
				<span>{title}</span>
			</button>
		);
	}

	if (renderContent && isSelected) {
		return (
			<div
				id={`accordion-content-${id}`}
				aria-labelledby={`accordion-header-${id}`}
				role="region"
				tabIndex={0}>
				<h3 className="text-lg font-medium mb-2 text-foreground border-b border-blue/10 pb-1">
					<span className="text-primary mr-1" aria-hidden="true">
						&gt;
					</span>{" "}
					{title}
				</h3>
				<div>{children}</div>
			</div>
		);
	}

	return null;
}
