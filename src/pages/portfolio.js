import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Container } from '../styles/shared';

import { Layout, PortfolioItem, Seo } from '../components';

export const query = graphql`
  {
    allCompanyJson {
      edges {
        node {
          id
          name
          url
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
      }
    }
  }
`;

const Portfolio = ({ data }) => (
  <Layout pageTitle='Portfolio'>
    <p>
      I've worked with various companies from small start-ups, agencies and
      enterprises, here are some examples:
    </p>
    <Container>
      {data.allCompanyJson.edges.map(({ node }) => (
        <PortfolioItem
          key={node.id}
          url={node.url}
          name={node.name}
          image={getImage(node.image)}
        />
      ))}
    </Container>
  </Layout>
);

export default Portfolio;

export const Head = () => <Seo title="Michael Whittet | Portfolio" />;
