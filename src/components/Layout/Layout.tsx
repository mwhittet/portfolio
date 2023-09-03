import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, MainWrapper, PageTitle } from './styled';
import { GlobalStyle } from '../../styles/layout';
import { Props } from '.';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({
  children,
  className,
  pageTitle,
}: Props): React.ReactElement => {
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
    <Container data-testid="layout">
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper
        animate={{ opacity: 1 }}
        className={className}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
        {children}
      </MainWrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
