module.exports = {
	root: true,
	env: {
		// this section will be used to determine which APIs are available to us
		// (i.e are we running in a browser environment or a node.js env)
		node: true,
		browser: true
	},
	extends: [
		// use the recommended rule set for both plain javascript and vue
		"eslint:recommended",
		"plugin:vue/recommended",
		"standard"
	],
	rules: {
		"no-new": 0,
		"quote-props": 0,
		// we should always disable console logs and debugging in production
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
	}
};
