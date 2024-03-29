import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { StyledImg } from '../styles/shared';
import { Layout, Seo } from '../components';

export const query = graphql`
  {
    file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
  }
`;

const NotFoundPage = ({ data }) => {
  const image = getImage(data.file);

  return (
    <Layout pageTitle="404">
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <p>
        Let's go back to the <Link to="/">home page</Link>...
      </p>
      <StyledImg alt="404 facepalm" image={image} height="275" width="275" />
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Michael Whittet | 404" />;
