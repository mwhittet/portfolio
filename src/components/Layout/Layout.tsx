import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, MainWrapper } from './styled';
import { GlobalStyle } from '../../styles/layout';
import { Props } from '.';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, className }: Props): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper className={className}>{children}</MainWrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
