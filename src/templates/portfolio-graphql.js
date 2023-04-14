import React from 'react';
import { graphql } from 'gatsby';
import { Container, PageTitle, SkillList, Skill } from '../styles/shared';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PortfolioItem from '../components/PortfolioItem';

export const query = graphql`
  query ($slug: String!) {
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
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
      <PageTitle>{portfolio.title}</PageTitle>
      <p>{portfolio.intro}</p>

      {portfolio.skills.length > 0 && (
        <>
          <h2>Software, skills & technology used</h2>
          <SkillList>
            {portfolio.skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </SkillList>
        </>
      )}

      {portfolio.projects.length > 0 && (
        <>
          <h2>What I worked on</h2>
          <Container>
            {portfolio.projects.map((project) => (
              <PortfolioItem
                image={project.image}
                key={project.id}
                name={project.name}
                url={project.url}
              />
            ))}
          </Container>
        </>
      )}
    </Layout>
  );
};

export default portfolio;

export const Head = ({ data }) => (
  <Seo title={`Michael Whittet | ${data.portfolioJson.title}`} />
);
