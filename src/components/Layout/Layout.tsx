import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, MainWrapper } from './styled';
import { Props } from '.';

import Header from '../Header';
import Footer from '../Footer';
import '../../styles/layout.css';

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper className={className}>{children}</MainWrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
