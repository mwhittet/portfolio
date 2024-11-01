import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Container } from '../styles/shared';
import { Layout, PortfolioItem, Seo } from '../components';

export const query = graphql`
  {
    allCompanyJson {
      edges {
        node {
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
  }
`;

const Portfolio = ({ data }) => {
  const portfolioItems = (start, end) =>
    data.allCompanyJson.edges.slice(start, end).map(({ node }) => {
      const { id, image, name, url } = node;

      return (
        <PortfolioItem image={getImage(image)} key={id} name={name} url={url} />
      );
    });

  return (
    <Layout pageTitle="Portfolio">
      <p>
        I've worked at various sized companies from small start-ups, agencies
        and enterprises but I also try and work on personal projects when I can
        too, here are a few examples:
      </p>
      <h2>Personal projects:</h2>
      <Container>{portfolioItems(0, 2)}</Container>

      <h2>Professional experience:</h2>
      <Container>{portfolioItems(2)}</Container>
    </Layout>
  );
};

export default Portfolio;

export const Head = () => <Seo title="Michael Whittet | Portfolio" />;
