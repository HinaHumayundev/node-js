/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	testEnvironment: "node",
	clearMocks: true,
	coverageProvider: "v8",
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
	roots: ["<rootDir>/src/tests"],
	testMatch: ["**/?(*.)+(test|spec).[tj]s?(x)"],
	transform: {
		"^.+.tsx?$": ["ts-jest", {}],
	},
};
