import React from 'react';
import { graphql } from 'gatsby';
import { Container, PageTitle, SkillList, Skill } from '../styles/shared';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PortfolioItem from '../components/PortfolioItem';

export const query = graphql`
  query($slug: String!) {
    portfolioJson(slug: { eq: $slug }) {
      title
      intro
      skills
      projects {
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
`;

const portfolio = ({ data }) => {
  const portfolio = data.portfolioJson;

  return (
    <Layout>
      <SEO title={`Portfolio | ${portfolio.title}`} />
      <PageTitle>{portfolio.title}</PageTitle>
      <p>{portfolio.intro}</p>
      <h3>Software, skills & technology</h3>
      <SkillList>
        {portfolio.skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillList>
      <h3>Websites worked on & built</h3>
      <Container>
        {portfolio.projects.map((project) => (
          <PortfolioItem
            key={project.id}
            url={project.url}
            name={project.name}
            image={project.image}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default portfolio;
