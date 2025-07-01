// .storybook/preview.js
import { ThemeProvider } from 'styled-components';

import { Preview } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { theme } from "../src/tokens";


const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${theme.light.typography.family.sans};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.light.colors.bg}; 
    color: ${theme.light.colors.text};
  }
`;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: Preview['decorators'] = [
  (Story, context) => (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <Story {...context.args} />
    </ThemeProvider>
  ),
];
