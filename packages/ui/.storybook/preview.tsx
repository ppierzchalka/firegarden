import type { Preview } from "@storybook/react";
import "../../tailwind-config/globals.css";
import "./storybook.css";
import React from "react";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "light",
			values: [
				{
					name: "dark",
					value: "hsl(222.2 84% 4.9%)",
				},
				{
					name: "light",
					value: "#ffffff",
				},
			],
		},
	},
	decorators: [
		(Story) => {
			return (
				<div className="font-sans p-4">
					<Story />
				</div>
			);
		},
	],
};

export default preview;
