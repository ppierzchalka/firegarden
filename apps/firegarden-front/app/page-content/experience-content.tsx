import { ExperienceItem, TerminalCard } from "@firegarden/ui";

export const ExperienceContent = () => (
	<TerminalCard command="$ cat experience.log">
		<div className="space-y-6">
			<ExperienceItem
				title="Lead Frontend Developer / Senior Frontend Developer"
				meta="Vistex • Feb 2024 – Present"
				description="Leading a frontend team building a data analytics platform. Actively involved in day-to-day development while managing team needs, driving improvements in developer experience, and ensuring smooth collaboration with UX and QA teams."
			/>

			<ExperienceItem
				title="Senior Frontend Developer / Frontend Developer"
				meta="Xebia (formerly PGS Software) • Feb 2022 – Feb 2024"
				description="Delivered modern, performant UIs in client projects using React and TypeScript. Improved design systems, contributed to architecture decisions, and emphasized code quality and developer experience."
			/>

			<ExperienceItem
				title="Software Developer I – JavaScript / Junior JavaScript Developer"
				meta="Vistex • Oct 2019 – Jan 2022"
				description="Contributed to enterprise React applications, implementing new features and addressing technical debt. Progressed from junior to mid-level developer, gaining experience in team workflows and frontend best practices."
			/>

			<ExperienceItem
				title="Junior Web Developer"
				meta="Deloitte Digital CE • Oct 2018 – Sep 2019"
				description="Supported frontend development for corporate clients in agile teams. Gained early experience with HTML, CSS, and JavaScript, while learning team collaboration and QA workflows."
			/>
		</div>
	</TerminalCard>
);
