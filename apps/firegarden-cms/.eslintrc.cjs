/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["@firegarden/eslint-config/react.js"],
	overrides: [
		{
			files: ["*.cjs", "vite.config.ts"],
			parserOptions: {
				project: null,
			},
			rules: {
				"@typescript-eslint/no-var-requires": "off",
			},
		},
	],
	env: {
		node: true,
	},
};
