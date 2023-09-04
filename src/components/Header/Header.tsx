import React from 'react';
import { Link } from 'gatsby';
import { Props } from '.';
import Logo from '../../images/logo.svg';
import { HeaderWrapper, LinkWrapper, Title } from './styled';

const Header = ({ siteTitle }: Props): React.ReactElement => (
  <HeaderWrapper data-testid="header">
    <Title data-testid="header-title" title={siteTitle} to="/">
      <Logo data-testid="header-logo" height="48" width="36" />
    </Title>

    <nav aria-label="main navigation">
      <LinkWrapper>
        <Link activeClassName="active" to="/about">
          About
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link activeClassName="active" partiallyActive={true} to="/portfolio">
          Portfolio
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
      </LinkWrapper>
    </nav>
  </HeaderWrapper>
);

export default Header;
