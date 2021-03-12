import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { PageTitle, StyledImg } from '../styles/shared';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const query = graphql`
  {
    file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
  }
`;

const NotFoundPage = ({ data }) => {
  const image = getImage(data.file);

  return (
    <Layout>
      <SEO title="404: Not found" />
      <PageTitle>404: Not found</PageTitle>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <StyledImg alt="Michael Whittet" image={image} />
    </Layout>
  );
};

export default NotFoundPage;
