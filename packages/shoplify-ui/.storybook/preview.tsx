// .storybook/preview.js
import { ThemeProvider } from 'styled-components';

import { Preview } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { lightTheme } from '../src/tokens';

const theme = lightTheme;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${theme.typography.family.sans};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.bg}; 
    color: ${theme.colors.text};
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story {...context.args} />
    </ThemeProvider>
  ),
];
