import {
	AriaAttributes,
	cloneElement,
	ForwardRefExoticComponent,
	ReactElement,
	RefAttributes,
} from "react";
import { Button } from "../button";
import { cn } from "../../lib/utils";
import { LucideProps } from "lucide-react";

export interface IconButtonProps {
	/** The URL the button should link to (not needed if onClick is provided) */
	href?: string;
	/** The icon to display in the button */
	icon: ReactElement<
		ForwardRefExoticComponent<
			Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
		> & { className?: string }
	>;
	/** The accessible label for the button */
	label: string;
	/** Whether the link should open in a new tab */
	external?: boolean;
	/** Additional CSS classes */
	className?: string;
	/** Optional click handler for when the button is used as a button rather than a link */
	onClick?: () => void;
	/** Optional ARIA attributes */
	ariaProps?: AriaAttributes & {
		role?: string;
		"aria-checked"?: boolean;
		"aria-pressed"?: boolean;
	};
}

export function IconButton({
	href,
	icon,
	label,
	external = true,
	className,
	onClick,
	ariaProps,
}: IconButtonProps) {
	const styledIcon = cloneElement(icon, {
		className:
			"w-5 h-5 text-primary group-hover:text-foreground transition-colors duration-300",
	});

	const buttonProps = {
		variant: "outline" as const,
		size: "icon" as const,
		className: cn(
			"border border-primary/30 hover:bg-primary/10 text-foreground relative group theme-element",
			className
		),
		...ariaProps,
	};

	if (onClick) {
		return (
			<Button {...buttonProps} onClick={onClick}>
				{styledIcon}
				<span className="sr-only">{label}</span>
			</Button>
		);
	}

	return (
		<Button {...buttonProps} asChild>
			<a
				href={href}
				target={external ? "_blank" : undefined}
				rel={external ? "noopener noreferrer" : undefined}>
				{styledIcon}
				<span className="sr-only">{label}</span>
			</a>
		</Button>
	);
}
