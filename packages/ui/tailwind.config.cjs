/** @type {import('tailwindcss').Config} */
const config = require("../tailwind-config/tailwind.config.cjs");

module.exports = {
	...config,
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.stories.{js,ts,jsx,tsx}",
	],
};
