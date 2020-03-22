import React from 'react';
import { Link } from 'gatsby';
import { Props } from '.';
import Logo from '../../images/logo.svg';
import { HeaderWrapper, LinkWrapper, Navigation, Title } from './styled';

const Header = ({ siteTitle }: Props): React.ReactElement => (
  <HeaderWrapper>
    <Title to="/" title={siteTitle}>
      <Logo height="48" width="48" />
    </Title>

    <Navigation>
      <LinkWrapper>
        <Link to="/about" activeClassName="active" data-testing="nav-about">
          About
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link
          to="/portfolio"
          activeClassName="active"
          partiallyActive={true}
          data-testing="nav-portfolio"
        >
          Portfolio
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/contact" activeClassName="active" data-testing="nav-contact">
          Contact
        </Link>
      </LinkWrapper>
    </Navigation>
  </HeaderWrapper>
);

export default Header;
