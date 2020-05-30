import { createGlobalStyle } from 'styled-components';
import { colors } from '.';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font-family: 'Marmelad', sans-serif;
    font-size: 16px;
    line-height: 1.15;
    margin: 0;
  }

  main {
    display: block;
  }

  h1,
  h2 {
    color: ${colors.emperor};
    margin: 0;
  }

  h1 span,
  h2 span {
    color: ${colors.internationalOrange};
  }

  h2 {
    font-size: 1.75rem;
    margin: 40px 0;
    padding: 0;
    text-align: center;
  }

  h3 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    color: ${colors.internationalOrange};
    font-size: 1.5rem;
    margin: 30px 0 20px;
    padding: 0 0 5px;
  }

  a {
    background-color: transparent;
    color: ${colors.mercury};
    fill: ${colors.mercury};
    text-decoration: none;
    transition: color 0.5s ease-out, fill 0.5s ease-out;
  }

  a:hover {
    color: ${colors.internationalOrange};
    fill: ${colors.internationalOrange};
  }

  p {
    margin: 0;
  }

  b,
  strong {
    font-weight: bolder;
  }

  img {
    border-style: none;
  }
`;
