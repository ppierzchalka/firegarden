export const ExperienceContent = () => (
	<div className="font-code text-foreground/90 terminal-container">
		<div className="text-xs text-primary mb-4">
			<span>$ cat experience.log</span>
		</div>

		<div className={`space-y-6 terminal-text `}>
			<div className="border-b border-blue/10 pb-4">
				<div className="flex items-start">
					<span className="text-primary mr-2 mt-1">|</span>
					<div>
						<h3 className="text-lg font-medium tracking-wide text-foreground">
							Senior Front-end Developer
						</h3>
						<div className="text-sm text-muted-foreground mb-2">
							<span className="text-primary mr-1">&gt;</span> TechCorp • 2021 -
							Present
						</div>
						<p>
							Led the development of the company's design system, improving
							development efficiency by 40%. Mentored junior developers and
							implemented best practices for accessibility and performance.
						</p>
					</div>
				</div>
			</div>

			<div className="border-b border-blue/10 pb-4">
				<div className="flex items-start">
					<span className="text-primary mr-2 mt-1">|</span>
					<div>
						<h3 className="text-lg font-medium tracking-wide text-foreground">
							Front-end Developer
						</h3>
						<div className="text-sm text-muted-foreground mb-2">
							<span className="text-primary mr-1">&gt;</span> WebSolutions •
							2019 - 2021
						</div>
						<p>
							Developed and maintained multiple client websites using React and
							Next.js. Collaborated with designers to implement responsive
							layouts and interactive UI components.
						</p>
					</div>
				</div>
			</div>

			<div className="border-b border-blue/10 pb-4">
				<div className="flex items-start">
					<span className="text-primary mr-2 mt-1">|</span>
					<div>
						<h3 className="text-lg font-medium tracking-wide text-foreground">
							Junior Developer
						</h3>
						<div className="text-sm text-muted-foreground mb-2">
							<span className="text-primary mr-1">&gt;</span> DigitalAgency •
							2018 - 2019
						</div>
						<p>
							Assisted in the development of client websites using HTML, CSS,
							and JavaScript. Participated in code reviews and improved skills
							in modern web development practices.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div className="mt-4 text-xs text-muted-foreground flex items-center">
			<span className="text-primary mr-2">$</span>
			<span className="inline-block w-2 h-4 bg-primary animate-blink"></span>
		</div>
	</div>
);
