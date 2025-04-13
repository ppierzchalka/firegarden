export interface ExperienceItemProps {
	/** The job title */
	title: string;
	/** The company and date information */
	meta: string;
	/** The job description */
	description: string;
}

export function ExperienceItem({
	title,
	meta,
	description,
}: ExperienceItemProps) {
	return (
		<div className="border-b border-blue/10 pb-4 md:pb-3">
			<div className="flex items-start">
				<span className="text-primary mr-2 mt-1">|</span>
				<div>
					<h3 className="text-lg md:text-base font-medium tracking-wide text-foreground">
						{title}
					</h3>
					<div className="text-sm md:text-xs text-muted-foreground mb-2 md:mb-1">
						<span className="text-primary mr-1">&gt;</span> {meta}
					</div>
					<p className="md:text-sm">{description}</p>
				</div>
			</div>
		</div>
	);
}
