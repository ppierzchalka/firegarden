import { ReactNode } from "react";

export type FooterProps = {
	left: ReactNode;
	children: ReactNode;
	right: ReactNode;
};

export const Footer = ({ left, right, children }: FooterProps) => {
	return (
		<footer className="py-4 border-t border-blue/20 relative z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex justify-between items-center">
				<div className="hidden md:block text-xs text-muted-foreground">
					{left}
				</div>
				<p className="text-sm text-muted-foreground tracking-wide flex items-center">
					<span className="text-blue mr-1">&lt;</span>
					{children}
					<span className="text-blue ml-1">/&gt;</span>
				</p>
				<div className="hidden md:block text-xs text-muted-foreground">
					{right}
				</div>
			</div>
		</footer>
	);
};
