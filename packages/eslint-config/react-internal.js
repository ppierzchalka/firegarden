const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"turbo",
	],
	plugins: ["only-warn"],
	globals: {
		React: true,
	},
	env: {
		browser: true,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	ignorePatterns: [
		// Ignore dotfiles
		".*.js",
		"node_modules/",
		"dist/",
	],
	overrides: [
		{
			rules: { "no-unused-vars": "off" },
			// Force ESLint to detect .tsx files
			files: ["*.js?(x)", "*.ts?(x)"],
		},
	],
};
