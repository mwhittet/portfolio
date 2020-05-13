import React from 'react';
import { graphql } from 'gatsby';
import { Intro, StyledImg, HomeWrapper } from '../styles/shared';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
  <Layout className="home">
    <SEO title="Front End Developer" />
    <HomeWrapper>
      <StyledImg
        fluid={data.file.childImageSharp.fluid}
        alt="Michael Whittet"
      />
      <Intro>
        <span>Hello!</span> I'm <span>Michael Whittet</span> aka Mike, Bruce,
        Buzz, Spike, Goo, Whittet (those are some of my nicknames!) &amp; I am a{' '}
        <span>Front End Developer</span> based just outside of{' '}
        <span>London</span> in <span>Essex</span>.
      </Intro>
    </HomeWrapper>
  </Layout>
);

export default IndexPage;
