import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Title } from '../../../styles/shared';
import { ContentItem } from '../../../types';

const Content = ({ image, name }: ContentItem): React.ReactElement => {
  const contentImage = getImage(image)
  
  return (
    <>
      {contentImage && <GatsbyImage alt="" image={contentImage} />}
      <Title>{name}</Title>
    </>
  )
};

export default Content;
