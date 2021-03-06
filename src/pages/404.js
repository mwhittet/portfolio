import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { PageTitle, StyledImg } from '../styles/shared';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

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
      <Seo title="404: Not found" />
      <PageTitle>404: Not found</PageTitle>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Go back to the <Link to="/">home</Link> page?
      </p>
      <StyledImg alt="404 facepalm" image={image} />
    </Layout>
  );
};

export default NotFoundPage;
