module.exports = {
	root: true,
	env: {
		es6: true,
	},
	extends: [
		'xo',
		'xo-react',
	],
	rules: {
		'react/function-component-definition': [2, {
			namedComponents: 'arrow-function',
			unnamedComponents: 'arrow-function',
		}],
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: ['*.tsx', '*.ts'],
			extends: 'xo-typescript',
		},
	],
};
