module.exports = {
	root: true,
	env: {
		es6: true
	},
	extends: [
		// 'xo',
		// 'xo-react',
		// 'xo-typescript',
	],
	ignorePatterns: [
		'.eslintrc.*',
	],
	rules: {
		"react/function-component-definition": [2, {
			namedComponents: "arrow-function",
			unnamedComponents: "arrow-function"
		}],
	}
};
