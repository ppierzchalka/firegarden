import type { StorybookConfig } from "@storybook/react-webpack5";

import { join, dirname } from "path";
import { fileURLToPath } from "url";
import postcssOptions from "../postcss.config.cjs";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	return join(__dirname, "../node_modules", value);
}
const config: StorybookConfig = {
	stories: [
		"../components/**/*.mdx",
		"../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],

	addons: [
		getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-interactions"),
		getAbsolutePath("@storybook/addon-themes"),
		"@chromatic-com/storybook",
	],

	framework: {
		name: getAbsolutePath("@storybook/react-webpack5"),
		options: {},
	},

	webpackFinal: async (config) => {
		// Find CSS rule
		const cssRule = (config.module as any).rules.find(
			(rule) => rule.test && rule.test.toString().includes(".css")
		);

		// If CSS rule exists, add PostCSS loader for Tailwind
		if (cssRule && cssRule.use) {
			// Add our PostCSS config
			const postCssLoader = {
				loader: "postcss-loader",
				options: {
					postcssOptions,
				},
			};
			// Add the loader to the rule
			if (Array.isArray(cssRule.use)) {
				cssRule.use.push(postCssLoader);
			}
		}

		return config;
	},

	docs: {
		autodocs: true,
	},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
};
export default config;
