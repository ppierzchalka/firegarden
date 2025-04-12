import { Accordion, AccordionItem } from "@firegarden/ui";

export const InterestsContent = () => {
	return (
		<Accordion>
			<AccordionItem title="Web Technologies">
				I'm passionate about exploring new web technologies and frameworks.
				Currently experimenting with Astro, Svelte, and Web Components.
			</AccordionItem>

			<AccordionItem title="Open Source">
				I contribute to open source projects in my free time, primarily focusing
				on accessibility tools and UI component libraries.
			</AccordionItem>

			<AccordionItem title="Design Systems">
				I enjoy the intersection of design and development, particularly in
				creating and implementing cohesive design systems that scale.
			</AccordionItem>

			<AccordionItem title="Outside of Tech">
				When I'm not coding, I enjoy hiking, photography, reading science
				fiction, and experimenting with new cooking recipes.
			</AccordionItem>
		</Accordion>
	);
};
