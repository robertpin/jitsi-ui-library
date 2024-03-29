module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-actions',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    const arrayRule = config.module.rules.find(rule => Array.isArray(rule.oneOf));
    const svgRule = arrayRule.oneOf.find(rule => rule.test && !Array.isArray(rule.test) && rule.test.test('.svg'));
    svgRule.enforce = 'pre';
    svgRule.use = [{
      loader: require.resolve('@svgr/webpack'),
      options: {
        dimensions: false,
        expandProps: 'start'
      }
    }];
    delete svgRule.issuer;

    return config;
  }
}