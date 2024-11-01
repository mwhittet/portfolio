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

const Portfolio = ({ data }) => (
  <Layout pageTitle="Portfolio">
    <p>
      I've worked at various sized companies from small start-ups, agencies and
      enterprises but I also try and work on personal projects when I can too,
      here are a few examples:
    </p>
    <h2>Personal projects:</h2>
    <Container>
      {data.allCompanyJson.edges.slice(0, 2).map(({ node }) => {
        const { id, image, name, url } = node;

        return (
          <PortfolioItem
            image={getImage(image)}
            key={id}
            name={name}
            url={url}
          />
        );
      })}
    </Container>

    <h2>Professional experience:</h2>
    <Container>
      {data.allCompanyJson.edges.slice(2).map(({ node }) => {
        const { id, image, name, url } = node;

        return (
          <PortfolioItem
            image={getImage(image)}
            key={id}
            name={name}
            url={url}
          />
        );
      })}
    </Container>
  </Layout>
);

export default Portfolio;

export const Head = () => <Seo title="Michael Whittet | Portfolio" />;
