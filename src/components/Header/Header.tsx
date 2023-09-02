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

    <nav aria-label="main navigation" data-testid="header-nav">
      <LinkWrapper>
        <Link
          activeClassName="active"
          data-testid="header-nav-about"
          to="/about"
        >
          About
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link
          activeClassName="active"
          data-testid="header-nav-portfolio"
          partiallyActive={true}
          to="/portfolio"
        >
          Portfolio
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link
          activeClassName="active"
          data-testid="header-nav-contact"
          to="/contact"
        >
          Contact
        </Link>
      </LinkWrapper>
    </nav>
  </HeaderWrapper>
);

export default Header;
