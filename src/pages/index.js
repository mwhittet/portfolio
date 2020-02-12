import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { StyledImg } from '../styles/shared';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 959px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  text-align: center;
`;

export const query = graphql`
  query {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Front End Developer" />
    <StyledImg fluid={data.file.childImageSharp.fluid} alt="Michael Whittet" />
    <Title>
      <span>Hello!</span> I'm <span>Michael Whittet</span> aka Mike, Bruce,
      Buzz, Spike, Goo, Whittet (those are some of my nicknames!) &amp; I am a{' '}
      <span>Front End Developer</span> based just outside of <span>London</span>{' '}
      in <span>Essex</span>.
    </Title>
    <Text>
      Feel free to checkout some of my <Link to="/portfolio">work</Link> or get
      in <Link to="/contact">touch</Link>!
    </Text>
  </Layout>
);

export default IndexPage;
