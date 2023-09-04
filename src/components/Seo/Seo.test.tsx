import React from 'react';
import * as Gatsby from 'gatsby';
import { render } from '@testing-library/react';

import Seo from './';
import { description, siteDescription, siteTitle, title } from './Seo.mocks';

const getMeta = (metaName: string) => {
  const metas = document.getElementsByTagName('meta');

  for (let value of metas) {
    if (value.getAttribute('name') === metaName) {
      return value.getAttribute('content');
    }
  }
  return '';
};

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: siteDescription,
      title: siteTitle,
    },
  },
}));

describe('<Seo /> component', () => {
  // This error is expected and is caused by the <html lang="en" /> tag
  // It is only an issue in testing
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders the meta tags with the default values', () => {
    render(<Seo description={description} title={title} />);

    expect(document.querySelector('title')).toHaveTextContent(title);
    expect(getMeta('description')).toEqual(description);
    expect(getMeta('og:description')).toEqual(description);
    expect(getMeta('og:title')).toEqual(title);
    expect(getMeta('og:type')).toEqual('website');
    expect(getMeta('twitter:card')).toEqual('summary');
    expect(getMeta('twitter:description')).toEqual(description);
    expect(getMeta('twitter:title')).toEqual(title);
  });

  it('renders the title tag with the default text', () => {
    render(<Seo description={description} title="" />);

    expect(document.querySelector('title')).toHaveTextContent(siteTitle);
    expect(getMeta('og:title')).toEqual(siteTitle);
    expect(getMeta('twitter:title')).toEqual(siteTitle);
  });

  it('renders the description tags with the default text', () => {
    render(<Seo description="" title={title} />);

    expect(getMeta('description')).toEqual(siteDescription);
    expect(getMeta('og:description')).toEqual(siteDescription);
    expect(getMeta('twitter:description')).toEqual(siteDescription);
  });
});
