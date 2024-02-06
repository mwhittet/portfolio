import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Props } from '.';

const Seo = ({ description, title }: Props) => {
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
