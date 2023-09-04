import React from 'react';
import { FooterWrapper } from './styled';

import { Social } from '../../components';

const Footer = (): React.ReactElement => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper data-testid="footer">
      <Social />
      <p>
        Proudly built using React, Gatsby, GraphQL, TypeScript,
        styled-components
      </p>
      <p>Copyright &copy; {year}, Michael Whittet</p>
    </FooterWrapper>
  );
};

export default Footer;
