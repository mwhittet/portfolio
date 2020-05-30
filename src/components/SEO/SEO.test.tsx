import React from 'react';
import * as Gatsby from 'gatsby';
import '@testing-library/jest-dom';
import { render, waitFor, waitForDomChange } from '@testing-library/react';

import SEO from './SEO';

const author = '@michaelwhittet';
const description =
  'Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex';
const title = 'Portfolio page';
const siteTitle = 'site title';
const siteDescription = 'site description';

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

describe('<SEO /> component', () => {
  it('should render the title tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() =>
      expect(document.querySelector('title')).toHaveTextContent(
        `${siteTitle} | ${title}`
      )
    );
  });

  it('should render the description tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() => expect(getMeta('description')).toEqual(description));
  });

  it('should render the description tag with the default text', async () => {
    render(<SEO title={title} />);

    await waitFor(() =>
      expect(getMeta('description')).toEqual(siteDescription)
    );
  });

  it('should render the og:description tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() => expect(getMeta('og:description')).toEqual(description));
  });

  it('should render the og:description tag with the default text', async () => {
    render(<SEO title={title} />);

    await waitFor(() =>
      expect(getMeta('og:description')).toEqual(siteDescription)
    );
  });

  it('should render the og:title tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() => expect(getMeta('og:title')).toEqual(title));
  });

  it('should render the og:type tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() => expect(getMeta('og:type')).toEqual('website'));
  });

  it('should render the twitter:card tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() => expect(getMeta('twitter:card')).toEqual('summary'));
  });

  it('should render the twitter:creator tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() => expect(getMeta('twitter:creator')).toEqual(author));
  });

  it('should render the twitter:description tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() =>
      expect(getMeta('twitter:description')).toEqual(description)
    );
  });

  it('should render the twitter:description tag with the default text', async () => {
    render(<SEO title={title} />);

    await waitFor(() =>
      expect(getMeta('twitter:description')).toEqual(siteDescription)
    );
  });

  it('should render the twitter:title tag with the correct text', async () => {
    render(<SEO description={description} title={title} />);

    await waitFor(() => expect(getMeta('twitter:title')).toEqual(title));
  });
});
