module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'xo',
		'xo-typescript',
	],
	rules: {
		'implicit-arrow-linebreak': ['error', 'beside'],
		'no-warning-comments': 'off',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/object-shorthand': 'off',
		'@typescript-eslint/capitalized-comments': 'off',
		'@typescript-eslint/guard-for-in': 'off',
	}
};
