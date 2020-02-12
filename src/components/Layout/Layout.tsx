import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, MainWrapper } from './styled';
import { Props } from '.';

import Header from '../Header';
import Footer from '../Footer';
import '../../styles/layout.css';

const Layout = ({ children }: Props): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
