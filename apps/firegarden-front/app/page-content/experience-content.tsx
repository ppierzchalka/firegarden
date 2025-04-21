import { ExperienceItem, TerminalCard } from "@firegarden/ui";
import { fetchExperiences } from "../lib/firebase-utils";
import { MarkdownRenderer } from "../components/markdown-renderer";

export async function ExperienceContent() {
	const experiences = await fetchExperiences();

	if (!experiences || experiences.length === 0) {
		return (
			<TerminalCard
				command="$ cat experience.log"
				aria-label="Work experience history">
				<p>No experience entries found. Please add some in the CMS.</p>
			</TerminalCard>
		);
	}

	const formatDate = (date: Date | string | undefined): string => {
		if (!date) return "Present";
		const d = typeof date === "string" ? new Date(date) : date;
		return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
	};

	return (
		<TerminalCard
			command="$ cat experience.log"
			aria-label="Work experience history">
			<div className="space-y-6" role="list" aria-label="Employment history">
				{experiences.map((exp, index) => (
					<ExperienceItem
						key={exp.id || index}
						title={exp.title}
						meta={`${exp.company} • ${formatDate(exp.from)} – ${formatDate(exp.to)}`}
						description={<MarkdownRenderer content={exp.description} />}
					/>
				))}
			</div>
		</TerminalCard>
	);
}
