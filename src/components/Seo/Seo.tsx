import React from 'react';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

type SEO = {
  description: string;
  title: string;
};

const Seo = ({ description, title }: SEO) => {
  const { siteMetadata } = useSiteMetadata();
  const seoDescription = description || siteMetadata.description;
  const seoTitle = title || siteMetadata.title;

  return (
    <>
      <html lang="en" />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="og:description" content={seoDescription} />
      <meta name="og:title" content={seoTitle} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:title" content={seoTitle} />
    </>
  );
};

export default Seo;
