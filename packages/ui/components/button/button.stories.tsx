import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

/**
 * The Button component is used to trigger an action or event, such as submitting a form,
 * opening a dialog, canceling an action, or performing a delete operation.
 *
 * Built on top of Radix UI's Slot primitive, it supports various styles and sizes to
 * accommodate different UI needs.
 */
const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A versatile button component with different variants and sizes.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
			description: "The visual style of the button",
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon"],
			description: "The size of the button",
		},
		asChild: {
			control: "boolean",
			description:
				"When true, the component will render its child as the root element",
		},
		disabled: {
			control: "boolean",
			description: "When true, the button will be disabled",
		},
		className: {
			control: "text",
			description: "Additional CSS classes to apply",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * The default button style.
 */
export const Default: Story = {
	args: {
		children: "Button",
		variant: "default",
		size: "default",
	},
};

/**
 * The destructive variant is typically used for delete actions or other critical actions.
 */
export const Destructive: Story = {
	args: {
		children: "Delete",
		variant: "destructive",
	},
};

/**
 * The outline variant provides a button with a border but no background.
 */
export const Outline: Story = {
	args: {
		children: "Outline",
		variant: "outline",
	},
};

/**
 * The secondary variant is used for secondary actions.
 */
export const Secondary: Story = {
	args: {
		children: "Secondary",
		variant: "secondary",
	},
};

/**
 * The ghost variant has no background or border, only showing on hover.
 */
export const Ghost: Story = {
	args: {
		children: "Ghost",
		variant: "ghost",
	},
};

/**
 * The link variant appears as a text link.
 */
export const Link: Story = {
	args: {
		children: "Link",
		variant: "link",
	},
};

/**
 * Examples of different button sizes.
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col items-start gap-4">
			<Button size="sm">Small Button</Button>
			<Button>Default Button</Button>
			<Button size="lg">Large Button</Button>
			<Button size="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M12 5v14M5 12h14" />
				</svg>
			</Button>
		</div>
	),
};

/**
 * Example of a disabled button.
 */
export const Disabled: Story = {
	args: {
		children: "Disabled Button",
		disabled: true,
	},
};

/**
 * Examples of buttons with icons.
 */
export const WithIcon: Story = {
	render: () => (
		<div className="flex flex-col items-start gap-4">
			<Button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
				Continue
			</Button>
			<Button variant="outline">
				Download
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
				</svg>
			</Button>
		</div>
	),
};
