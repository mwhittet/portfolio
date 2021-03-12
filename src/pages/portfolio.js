import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Container, PageTitle } from '../styles/shared';

import Layout from '../components/Layout';
import PortfolioItem from '../components/PortfolioItem';
import SEO from '../components/SEO';

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
  <Layout>
    <SEO title="Portfolio" />
    <PageTitle>Portfolio</PageTitle>
    <p>
      I've worked with various companies from small start-ups, agencies and
      enterprises:
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
