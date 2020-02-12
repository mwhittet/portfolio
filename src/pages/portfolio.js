import React from 'react';
import { graphql } from 'gatsby';
import { Container, PageTitle } from '../styles/shared';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Company from '../components/Company';

export const companyQuery = graphql`
  query {
    allCompanyJson {
      edges {
        node {
          id
          title
          href
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
      I've worked with various companies from small startups, agencys and
      enterprises:
    </p>
    <Container>
      {data.allCompanyJson.edges.map(({ node }) => (
        <Company key={node.id} companyInfo={node} />
      ))}
    </Container>
  </Layout>
);

export default Portfolio;
