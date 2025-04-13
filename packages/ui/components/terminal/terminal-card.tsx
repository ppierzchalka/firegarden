import { ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface TerminalCardProps {
	/** The command shown at the top of the terminal */
	command: string;
	/** The main content to display */
	children: ReactNode;
	/** Optional additional class names */
	className?: string;
}

export function TerminalCard({
	command,
	children,
	className,
	...props
}: TerminalCardProps & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"font-code text-foreground/90 terminal-container",
				className
			)}
			role="region"
			{...props}>
			<div className="text-xs text-primary mb-4 md:mb-2" aria-hidden="true">
				<span>{command}</span>
			</div>

			<div className="terminal-text">{children}</div>

			<div
				className="mt-4 md:mt-2 text-xs text-muted-foreground flex items-center"
				aria-hidden="true">
				<span className="text-primary mr-2">$</span>
				<span className="inline-block w-2 h-4 bg-primary animate-blink"></span>
			</div>
		</div>
	);
}
