import { ExperienceItem, TerminalCard } from "@firegarden/ui";

export const ExperienceContent = () => (
	<TerminalCard command="$ cat experience.log">
		<div className="space-y-6">
			<ExperienceItem
				title="Senior Front-end Developer"
				meta="TechCorp • 2021 - Present"
				description="Led the development of the company's design system, improving development efficiency by 40%. Mentored junior developers and implemented best practices for accessibility and performance."
			/>

			<ExperienceItem
				title="Front-end Developer"
				meta="WebSolutions • 2019 - 2021"
				description="Developed and maintained multiple client websites using React and Next.js. Collaborated with designers to implement responsive layouts and interactive UI components."
			/>

			<ExperienceItem
				title="Junior Developer"
				meta="DigitalAgency • 2018 - 2019"
				description="Assisted in the development of client websites using HTML, CSS, and JavaScript. Participated in code reviews and improved skills in modern web development practices."
			/>
		</div>
	</TerminalCard>
);
