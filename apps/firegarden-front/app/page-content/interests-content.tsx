import { Accordion, AccordionItem } from "@firegarden/ui";
import { fetchInterests } from "../lib/firebase-utils";
import { Interest } from "@firegarden/collections-types";
import { MarkdownRenderer } from "../components/markdown-renderer";

export async function InterestsContent() {
	const interests = await fetchInterests();

	if (!interests || interests.length === 0) {
		return (
			<Accordion>
				<AccordionItem key={"not-found"} title={"404: Interests not found"}>
					<p>No interests found. Please add some in the CMS.</p>
				</AccordionItem>
			</Accordion>
		);
	}

	return (
		<Accordion>
			{interests.map((interest: Interest, index: number) => (
				<AccordionItem
					key={interest.id || `${interest.label}-${index}`}
					title={interest.label}>
					{interest.description ? (
						<MarkdownRenderer content={interest.description} />
					) : (
						<p>No description available.</p>
					)}
				</AccordionItem>
			))}
		</Accordion>
	);
}
