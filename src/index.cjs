/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
	extends: "xo",
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			extends: ["xo-typescript"]
		},
		{
			files: ['*.tsx', '*.js', '*.jsx'],
			extends: ["xo-react"]
		},
	]
}
