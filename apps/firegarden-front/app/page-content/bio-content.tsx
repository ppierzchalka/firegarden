import { TerminalCard } from "@firegarden/ui";

export const BioContent = () => (
	<TerminalCard command="$ cat about-me.txt" aria-label="About me section">
		<div className="space-y-4">
			<p>
				I’m a frontend developer with over 6 years of experience building
				modern, scalable web applications. I specialize in crafting clean,
				maintainable codebases using React, TypeScript, and modern frontend
				tooling. I’m passionate about elegant UI, developer experience, and
				striking the right balance between performance, flexibility, and
				long-term maintainability. I believe in strong architecture,
				collaborative problem-solving, and ensuring every feature I deliver
				aligns with the project's vision and quality standards.
			</p>
		</div>
	</TerminalCard>
);
