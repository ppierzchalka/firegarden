/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: { ecmaVersion: "latest", sourceType: "module", project: true },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": "warn",
	},
};
