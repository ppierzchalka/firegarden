/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["@firegarden/eslint-config/react.js"],
	overrides: [
		{
			// Exclude configuration files from TypeScript-based linting
			files: ["*.cjs", "vite.config.ts"],
			parserOptions: {
				project: null, // Disable TypeScript parsing for these files
			},
			rules: {
				"@typescript-eslint/no-var-requires": "off",
			},
		},
	],
	env: {
		node: true, // This allows 'module' to be recognized
	},
};
