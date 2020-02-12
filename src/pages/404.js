import React from 'react';
import { graphql } from 'gatsby';
import { PageTitle, StyledImg } from '../styles/shared';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <PageTitle>404: Not found</PageTitle>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <StyledImg fluid={data.file.childImageSharp.fluid} alt="Michael Whittet" />
  </Layout>
);

export default NotFoundPage;
