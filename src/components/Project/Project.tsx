import React from 'react';
import Img from 'gatsby-image';
import { Title, Wrapper } from '../../styles/shared';
import { Props } from '.';

const Project = ({ project }: Props): React.ReactElement => (
  <Wrapper>
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      <Img fluid={project.image.childImageSharp.fluid} />
      <Title>{project.name}</Title>
    </a>
  </Wrapper>
);

export default Project;
