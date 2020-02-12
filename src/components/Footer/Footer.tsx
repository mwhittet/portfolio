import React from 'react';
import { FooterWrapper } from './styled';

import Social from '../Social';

const Footer = (): React.ReactElement => (
  <FooterWrapper>
    <Social />
    <p>Proudly built using React, Gatsby, GraphQL, TypeScript, styled-components</p>
    <p>Copyright &copy; {new Date().getFullYear()}, Michael Whittet</p>
  </FooterWrapper>
);

export default Footer;
