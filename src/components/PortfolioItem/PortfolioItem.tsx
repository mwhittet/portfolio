import React from 'react';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Wrapper } from '../../styles/shared';
import { LinkBox } from '../../types';
import { checkLinkType } from '../../helpers/checkLinkType';

import Content from './Content';

const PortfolioItem = ({ image, name, url }: LinkBox): React.ReactElement => (
  <Wrapper>
    {checkLinkType(url) ? (
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Content image={getImage(image)} name={name} />
      </a>
    ) : (
      <Link to={url}>
        <Content image={getImage(image)} name={name} />
      </Link>
    )}
  </Wrapper>
);

export default PortfolioItem;
