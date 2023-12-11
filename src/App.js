import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Portfolio from './components/Portfolio';

import theme from './styles/theme';

export default function () {
   const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      border: 0;
      padding: 0;
      outline: 0;
      appearance: none;
      list-style: none;
      text-decoration: none;
      box-sizing: border-box;
      color: #000;
      font-size: 1rem;
      font-family: 'Nunito', sans-serif;
    }

    html {
      scroll-behavior: smooth;
    }
  `;

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <Portfolio />
      </ThemeProvider>
   );
}
