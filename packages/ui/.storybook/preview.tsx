import type { Preview } from "@storybook/react";
// import "./storybook.css";
import "../../tailwind-config/globals.css";
import React from "react";
import { FiregardenProvider } from "../components/firegarden-provider";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		themes: {
			default: "dark",
			list: [
				{ name: "light", class: "light", color: "#ffffff" },
				{ name: "dark", class: "dark", color: "hsl(222.2 84% 4.9%)" },
			],
		},
		backgrounds: { disable: true },
	},
	decorators: [
		// Apply the theme class to the html element
		withThemeByClassName({
			themes: {
				light: "light",
				dark: "dark",
			},
			defaultTheme: "light",
		}),
		(Story) => {
			return (
				<FiregardenProvider defaultTheme="light">
					<div className="font-sans p-4">
						<Story />
					</div>
				</FiregardenProvider>
			);
		},
	],
};

export default preview;
