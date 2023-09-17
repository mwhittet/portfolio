import React from 'react';
import { graphql } from 'gatsby';
import { Container, SkillList, Skill } from '../styles/shared';

import { Layout, PortfolioItem, Seo } from '../components';

export const query = graphql`
  query ($slug: String!) {
    portfolioJson(slug: { eq: $slug }) {
      title
      intro
      achievements
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
  const { achievements, intro, projects, skills, title } = portfolio;

  return (
    <Layout pageTitle={title}>
      {intro.length > 0 &&
        intro.map((skill, index) => <p key={index}>{skill}</p>)}

      {skills.length > 0 && (
        <>
          <h2>Software, skills & technology used:</h2>
          <SkillList>
            {skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </SkillList>
        </>
      )}

      {achievements.length > 0 && (
        <>
          <h2>Most recent achievements:</h2>
          <ul>
            {achievements.map((achievement) => (
              <li key={achievement}>
                <p>{achievement}</p>
              </li>
            ))}
          </ul>
        </>
      )}

      {projects.length > 0 && (
        <>
          <h2>What I have worked on:</h2>
          <Container>
            {projects.map((project) => {
              const { id, image, name, url } = project;

              return (
                <PortfolioItem image={image} key={id} name={name} url={url} />
              );
            })}
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
