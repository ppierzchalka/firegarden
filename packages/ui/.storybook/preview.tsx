import type { Preview } from "@storybook/react";
import "../../tailwind-config/globals.css";
import "./storybook.css";
import React from "react";
import { FiregardenProvider } from "../components/firegarden-provider";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "dark",
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
				<FiregardenProvider>
					<div className="font-sans p-4">
						<Story />
					</div>
				</FiregardenProvider>
			);
		},
	],
};

export default preview;
