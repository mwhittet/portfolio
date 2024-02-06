import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Wrapper } from '../../styles/shared';
import { LinkBox } from '../../types';
import { checkLinkType } from '../../helpers/checkLinkType';
import { Content } from '../../components';

const PortfolioItem = ({ image, name, url }: LinkBox): React.ReactElement => {
  const contentImage = getImage(image);

  return (
    <Wrapper>
      {checkLinkType(url) ? (
        <a href={url} rel="noopener noreferrer" target="_blank">
          {contentImage && <Content image={contentImage} name={name} />}
        </a>
      ) : (
        <Link to={url}>
          {contentImage && <Content image={contentImage} name={name} />}
        </Link>
      )}
    </Wrapper>
  );
};

export default PortfolioItem;
