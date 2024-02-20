import { HomeWrapper, Intro } from '../styles/shared';
import { Layout, Seo } from '../components';

const IndexPage = () => (
  <Layout className="home">
    <HomeWrapper
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <Intro
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <span>Hello!</span> I'm <span>Michael Whittet</span> aka Mike, Bruce,
        Buzz, Spike, Goo, Whittet (those are some of my nicknames!) &amp; I am a{' '}
        <span>Front End Developer</span> based just outside of{' '}
        <span>London</span> in <span>Essex</span>.
      </Intro>
    </HomeWrapper>
  </Layout>
);

export default IndexPage;

export const Head = () => <Seo title="Michael Whittet | Front End Developer" />;
