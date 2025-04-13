import { Accordion, AccordionItem } from "@firegarden/ui";

export const InterestsContent = () => {
	return (
		<Accordion>
			<AccordionItem title="Web Tech">
				I’m deeply interested in evolving front-end ecosystems—especially where
				performance, architecture, and developer experience intersect. I enjoy
				working on scalable codebases, improving build systems, and exploring
				topics like monorepos, typed APIs, and modular design.
			</AccordionItem>

			<AccordionItem title="AI at Work">
				I actively explore how AI can enhance daily frontend development—from
				boosting productivity with smart tools to integrating LLMs and
				generative AI directly into apps. I'm especially interested in how AI
				shapes user experience and team workflows.
			</AccordionItem>

			<AccordionItem title="Mentoring">
				I enjoy sharing knowledge and supporting others—whether it’s through
				tutoring, onboarding, or guiding teammates during technical challenges.
				I believe in building strong foundations, writing maintainable code, and
				fostering growth through collaboration.
			</AccordionItem>

			<AccordionItem title="Outside Tech">
				Outside the screen, I ride my MTB on forest paths, play squash, and
				enjoy story-driven games. I follow gadget and console news closely,
				appreciate well-crafted mechanical watches, and love traveling—whether
				to bustling cities or quiet, remote places. I also share life with a
				curious Canadian Sphynx cat who keeps things lively.
			</AccordionItem>
		</Accordion>
	);
};
