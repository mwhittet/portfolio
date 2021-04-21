import React from 'react';
import * as Gatsby from 'gatsby';
import '@testing-library/jest-dom';
import { render, RenderResult, waitFor } from '@testing-library/react';
import Seo from './Seo';
import {
  author,
  description,
  siteDescription,
  siteTitle,
  title,
} from './Seo.mocks';

const getMeta = (metaName: string) => {
  const metas = document.getElementsByTagName('meta');

  for (let value of metas) {
    if (
      value.getAttribute('name') === metaName ||
      value.getAttribute('property') === metaName
    ) {
      return value.getAttribute('content');
    }
  }
  return '';
};

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author,
      description: siteDescription,
      title: siteTitle,
    },
  },
}));

const renderComponent = (props?): RenderResult =>
  render(<Seo title={title} {...props} />);

describe('<Seo /> component', () => {
  it('should render the title tag with the correct text', async () => {
    renderComponent();
    await waitFor(() =>
      expect(document.querySelector('title')).toHaveTextContent(
        `${siteTitle} | ${title}`
      )
    );
  });

  it('should render the description tag with the correct text', async () => {
    renderComponent({ description });
    await waitFor(() => expect(getMeta('description')).toEqual(description));
  });

  it('should render the description tag with the default text', async () => {
    renderComponent({ description: '' });
    await waitFor(() =>
      expect(getMeta('description')).toEqual(siteDescription)
    );
  });

  it('should render the og:description tag with the correct text', async () => {
    renderComponent({ description });
    await waitFor(() => expect(getMeta('og:description')).toEqual(description));
  });

  it('should render the og:description tag with the default text', async () => {
    renderComponent({ description: '' });
    await waitFor(() =>
      expect(getMeta('og:description')).toEqual(siteDescription)
    );
  });

  it('should render the og:title tag with the correct text', async () => {
    renderComponent();
    await waitFor(() => expect(getMeta('og:title')).toEqual(title));
  });

  it('should render the og:type tag with the correct text', async () => {
    renderComponent();
    await waitFor(() => expect(getMeta('og:type')).toEqual('website'));
  });

  it('should render the twitter:card tag with the correct text', async () => {
    renderComponent();
    await waitFor(() => expect(getMeta('twitter:card')).toEqual('summary'));
  });

  it('should render the twitter:creator tag with the correct text', async () => {
    renderComponent();
    await waitFor(() => expect(getMeta('twitter:creator')).toEqual(author));
  });

  it('should render the twitter:description tag with the correct text', async () => {
    renderComponent({ description });
    await waitFor(() =>
      expect(getMeta('twitter:description')).toEqual(description)
    );
  });

  it('should render the twitter:description tag with the default text', async () => {
    renderComponent({ description: '' });
    await waitFor(() =>
      expect(getMeta('twitter:description')).toEqual(siteDescription)
    );
  });

  it('should render the twitter:title tag with the correct text', async () => {
    renderComponent();
    await waitFor(() => expect(getMeta('twitter:title')).toEqual(title));
  });
});
