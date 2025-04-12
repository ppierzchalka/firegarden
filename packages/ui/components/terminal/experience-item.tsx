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
		<div className="border-b border-blue/10 pb-4">
			<div className="flex items-start">
				<span className="text-primary mr-2 mt-1">|</span>
				<div>
					<h3 className="text-lg font-medium tracking-wide text-foreground">
						{title}
					</h3>
					<div className="text-sm text-muted-foreground mb-2">
						<span className="text-primary mr-1">&gt;</span> {meta}
					</div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}
