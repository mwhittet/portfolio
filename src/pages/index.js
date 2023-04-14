import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { HomeWrapper, Intro, StyledImg } from '../styles/shared';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

export const query = graphql`
  {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE, quality: 100)
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const image = getImage(data.file);

  return (
    <Layout className="home">
      <HomeWrapper>
        <StyledImg alt="" image={image} height="200" width="200" />
        <Intro>
          <span>Hello!</span> I'm <span>Michael Whittet</span> aka Mike, Bruce,
          Buzz, Spike, Goo, Whittet (those are some of my nicknames!) &amp; I am
          a <span>Front End Developer</span> based just outside of{' '}
          <span>London</span> in <span>Essex</span>.
        </Intro>
      </HomeWrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Michael Whittet | Front End Developer" />;
