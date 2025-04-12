"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { useAccordion } from "./accordion.hook";

export interface AccordionItemProps {
	title: string;
	children: React.ReactNode;
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
			<div
				onClick={() => setSelectedItem(isSelected ? null : id)}
				className={`py-1 px-2 cursor-pointer flex items-center ${
					isSelected
						? "bg-primary/20 text-foreground"
						: "hover:bg-primary/10 text-muted-foreground"
				}`}>
				{isSelected && <ChevronRight className="w-3 h-3 text-primary mr-1" />}
				<span>{title}</span>
			</div>
		);
	}

	if (renderContent && isSelected) {
		return (
			<>
				<h3 className="text-lg font-medium mb-2 text-foreground border-b border-blue/10 pb-1">
					<span className="text-primary mr-1">&gt;</span> {title}
				</h3>
				<div>{children}</div>
			</>
		);
	}

	return null;
}
