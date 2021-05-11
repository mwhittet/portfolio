import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Title } from '../../../styles/shared';
import { ContentItem } from '../../../types';

const Content = ({ image, name }: ContentItem): React.ReactElement => (
  <>
    <GatsbyImage alt="" image={getImage(image)} />
    <Title>{name}</Title>
  </>
);

export default Content;
