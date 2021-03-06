import React from 'react';
import { Helmet } from 'react-helmet';
// @ts-ignore
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Props } from '.';

const Seo = ({ description = '', lang = 'en', meta = [], title }: Props) => {
  const { siteMetadata } = useSiteMetadata();
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:title`,
          content: title,
        },
      ].concat(meta)}
      title={title}
      titleTemplate={`${siteMetadata.title} | %s`}
    />
  );
};

export default Seo;
