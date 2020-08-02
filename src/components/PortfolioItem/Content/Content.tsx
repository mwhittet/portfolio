import React from 'react';
import Img from 'gatsby-image';
import { Title } from '../../../styles/shared';
import { ContentItem } from '../../../types';

const Content = ({ name, image }: ContentItem): React.ReactElement => (
  <>
    <Img fluid={image.childImageSharp.fluid} />
    <Title>{name}</Title>
  </>
);

export default Content;
