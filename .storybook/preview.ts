import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    themes: {
      default: 'Normal',
      list: [
        { name: 'Dark', class: 'dark_theme', color: '#1c4e57' },
        { name: 'Normal', class: 'normal_theme', color: '#da884c' }
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
