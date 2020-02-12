import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Title, Wrapper } from '../../styles/shared';
import { Props } from '.';

const Company = ({ companyInfo }: Props): React.ReactElement => (
  <Wrapper>
    <Link to={`/portfolio/${companyInfo.href}`}>
      <Img fluid={companyInfo.image.childImageSharp.fluid} />
      <Title>{companyInfo.title}</Title>
    </Link>
  </Wrapper>
);

export default Company;
