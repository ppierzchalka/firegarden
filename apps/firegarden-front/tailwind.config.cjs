/** @type {import('tailwindcss').Config} */

const config = require("@firegarden/tailwind-config/tailwindConfig");

module.exports = {
	...config,
	content: ["./app/**/*.tsx", "../../packages/ui/**/*.tsx"],
};
