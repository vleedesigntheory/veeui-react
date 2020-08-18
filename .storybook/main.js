const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
		"@storybook/addon-actions",
		"@storybook/addon-links",
		"@storybook/addon-viewport",
		"@storybook/addon-knobs",
		{ name: "@storybook/addon-docs", options: { configureJSX: true } },
		"@storybook/addon-a11y",
		"@storybook/addon-storysource"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['sass-loader'],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('../src')
    }
    // Return the altered config
    return config;
  },
}