import React from 'react';
import { Link } from 'gatsby';
import Content from './Content';
import { Wrapper } from '../../styles/shared';
import { LinkBox } from '../../types';
import { checkLinkType } from '../../helpers/checkLinkType';

const PortfolioItem = ({ image, name, url }: LinkBox): React.ReactElement => (
  <Wrapper>
    {checkLinkType(url) ? (
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Content image={image} name={name} />
      </a>
    ) : (
      <Link to={url}>
        <Content image={image} name={name} />
      </Link>
    )}
  </Wrapper>
);

export default PortfolioItem;
