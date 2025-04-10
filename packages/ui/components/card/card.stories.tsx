import type { Meta, StoryObj } from "@storybook/react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "./card";
import { Button } from "../button";

/**
 * The Card component is a container that groups related content and actions.
 * It provides a flexible layout system with header, content, and footer sections.
 */
const meta: Meta<typeof Card> = {
	title: "UI/Card",
	component: Card,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A versatile card component for grouping content with optional header, footer, and various content sections.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		className: {
			control: "text",
			description: "Additional CSS classes to apply to the card container",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Basic card with simple content.
 */
export const Basic: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardContent className="pt-6">
				<p>This is a basic card with just content.</p>
			</CardContent>
		</Card>
	),
};

/**
 * A card with a header containing title and description.
 */
export const WithHeader: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description with supporting text</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This card has a header with title and description.</p>
			</CardContent>
		</Card>
	),
};

/**
 * A complete card with header, content, and footer with action buttons.
 */
export const Complete: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Project Overview</CardTitle>
				<CardDescription>View details about this project</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<p>This is a complete card example with all sections.</p>
					<p>The content area can contain any elements you need.</p>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Continue</Button>
			</CardFooter>
		</Card>
	),
};

/**
 * An example of a card being used for a profile.
 */
export const ProfileCard: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader className="flex flex-row items-center gap-4">
				<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
					FG
				</div>
				<div>
					<CardTitle>FireGarden User</CardTitle>
					<CardDescription>firegarden@example.com</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<div className="space-y-1">
						<p className="text-sm text-muted-foreground">Member since</p>
						<p>April, 2025</p>
					</div>
					<div className="space-y-1">
						<p className="text-sm text-muted-foreground">Role</p>
						<p>Administrator</p>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="w-full">
					View Profile
				</Button>
			</CardFooter>
		</Card>
	),
};

/**
 * An example of a pricing card.
 */
export const PricingCard: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Pro Plan</CardTitle>
				<CardDescription>
					<span className="text-3xl font-bold">$24</span>
					<span className="text-muted-foreground"> /month</span>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					<li className="flex items-center">
						<svg
							className="mr-2 h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						Unlimited projects
					</li>
					<li className="flex items-center">
						<svg
							className="mr-2 h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						Advanced analytics
					</li>
					<li className="flex items-center">
						<svg
							className="mr-2 h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						Priority support
					</li>
					<li className="flex items-center">
						<svg
							className="mr-2 h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						Custom integrations
					</li>
				</ul>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Subscribe Now</Button>
			</CardFooter>
		</Card>
	),
};

/**
 * Demonstrating card as a notification or alert.
 */
export const NotificationCard: Story = {
	render: () => (
		<Card className="w-[350px] border-l-4 border-l-blue-500">
			<CardHeader className="pb-2">
				<CardTitle>New Update Available</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					A new version of the application is available. Please update to access
					the latest features.
				</p>
			</CardContent>
			<CardFooter className="flex justify-end gap-2">
				<Button variant="ghost" size="sm">
					Later
				</Button>
				<Button size="sm">Update Now</Button>
			</CardFooter>
		</Card>
	),
};
