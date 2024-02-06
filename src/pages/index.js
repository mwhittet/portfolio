import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { HomeWrapper, Intro, StyledImg } from '../styles/shared';
import { Layout, Seo } from '../components';

export const query = graphql`
  {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE, quality: 100)
      }
    }
  }
`;

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

const IndexPage = ({ data }) => {
  const image = getImage(data.file);

  return (
    <Layout className="home">
      <HomeWrapper
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.span
          style={{
            display: 'flex',
          }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible,
          }}
        >
          <StyledImg
            alt="Picture of Michael Whittet"
            image={image}
            height="200"
            width="200"
          />
        </motion.span>
        <Intro
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible,
          }}
        >
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
