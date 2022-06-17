import { createGlobalStyle } from 'styled-components';

import Fonts from './assets/fonts/Fonts';

const GlobalStyle = createGlobalStyle`
  body {
    ${Fonts}

    margin: 0;
    padding: 0;
    font-family: Work Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
