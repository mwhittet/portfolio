import React from 'react';
import { graphql } from 'gatsby';
import { Container, PageTitle, SkillList, Skill } from '../styles/shared';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
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
      <Seo title={`Portfolio | ${portfolio.title}`} />
      <PageTitle>{portfolio.title}</PageTitle>
      <p>{portfolio.intro}</p>
      <h3>Software, skills & technology I used</h3>
      <SkillList>
        {portfolio.skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillList>
      <h3>What I worked on</h3>
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
