import { createGlobalStyle } from 'styled-components';
import { breakpoints, colors } from '.';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    background-image: linear-gradient(135deg, ${colors.springWood} 0%, ${colors.bone} 100%);
    box-sizing: border-box;
    color: ${colors.mineShaft};
    font-family: 'Marmelad', sans-serif;
    font-size: 16px;
    line-height: 1.4;
    margin: 0;
  }

  h1 {
    margin: 0;

    span {
      color: ${colors.internationalOrange};
    }
  }

  h2 {
    font-size: 1.5rem;
    margin: 0 0 30px;
  }

  a {
    color: ${colors.mineShaft};
    text-decoration: none;
    transition: color 0.5s ease-out, fill 0.5s ease-out;

    &:hover {
      color: ${colors.internationalOrange};
      fill: ${colors.internationalOrange};
    }
  }

  ul {
    margin: 0 0 30px;
  }

  p {
    margin: 0;
  }

  img {
    border-style: none;
  }

  blockquote {
    margin: 0 0 30px;
  }

  figure {
    font-size: 1.75rem;
    font-weight: bold;
    margin: 0 auto 30px;
    padding: 0;
    text-align: center;
    width: 75%;

    &.no-margin {
      margin: 0 auto;
    }

    figcaption {
      color: ${colors.internationalOrange};
    }

    ${breakpoints.md} {
      width: 50%;
    }
  }
`;
