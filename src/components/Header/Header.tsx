import React from 'react';
import { Link } from 'gatsby';
import { Props } from '.';
import Logo from '../../images/logo.svg';
import { HeaderWrapper, LinkWrapper, Navigation, Title } from './styled';

const Header = ({ siteTitle }: Props): React.ReactElement => (
  <HeaderWrapper>
    <Title title={siteTitle} to="/">
      <Logo height="48" width="48" />
    </Title>

    <Navigation>
      <LinkWrapper>
        <Link activeClassName="active" data-testing="nav-about" to="/about">
          About
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link
          activeClassName="active"
          data-testing="nav-portfolio"
          partiallyActive={true}
          to="/portfolio"
        >
          Portfolio
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link activeClassName="active" data-testing="nav-contact" to="/contact">
          Contact
        </Link>
      </LinkWrapper>
    </Navigation>
  </HeaderWrapper>
);

export default Header;
