import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Wrapper } from '../../styles/shared';
import { LinkBox } from '../../types';
import { checkLinkType } from '../../helpers/checkLinkType';
import { Content } from '../../components';

const PortfolioItem = ({ image, name, url }: LinkBox): React.ReactElement => {
  const contentImage = getImage(image);
  const renderContentImage = contentImage && (
    <Content image={contentImage} name={name} />
  );

  const renderContent = () => {
    if (checkLinkType(url)) {
      return (
        <a href={url} rel="noopener noreferrer" target="_blank">
          {renderContentImage}
        </a>
      );
    } else if (url === '/') {
      return renderContentImage;
    }

    return <Link to={url}>{renderContentImage}</Link>;
  };

  return <Wrapper>{renderContent()}</Wrapper>;
};

export default PortfolioItem;
