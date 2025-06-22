import { ReactNode } from "react";

export type FooterProps = {
	left: ReactNode;
	children: ReactNode;
	right: ReactNode;
};

export const Footer = ({ left, right, children }: FooterProps) => {
	return (
		<footer
			className="py-4 border-t border-blue/20 relative z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
			role="contentinfo">
			<div className="container grid grid-cols-3">
				<div className="hidden md:flex justify-start text-xs text-muted-foreground">
					{left}
				</div>
				<p className="text-sm text-muted-foreground tracking-wide flex items-center justify-center col-span-3 md:col-span-1">
					<span className="text-primary mr-1" aria-hidden="true">
						&lt;
					</span>
					{children}
					<span className="text-primary ml-1" aria-hidden="true">
						/&gt;
					</span>
				</p>
				<div className="hidden md:flex justify-end text-xs text-muted-foreground">
					{right}
				</div>
			</div>
		</footer>
	);
};
