import React from 'react';
import { graphql } from 'gatsby';
import { Container, PageTitle } from '../styles/shared';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PortfolioItem from '../components/PortfolioItem';

export const companyQuery = graphql`
  query {
    allCompanyJson {
      edges {
        node {
          id
          name
          url
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
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
          image={node.image}
        />
      ))}
    </Container>
  </Layout>
);

export default Portfolio;
