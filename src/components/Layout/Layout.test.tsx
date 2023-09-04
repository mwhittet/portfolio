import React from 'react';
import * as Gatsby from 'gatsby';
import { render, screen } from '@testing-library/react';

import Layout from './';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'Michael Whittet',
    },
  },
}));

describe('<Layout /> component', () => {
  it('renders', () => {
    render(<Layout>Rendered child text</Layout>);

    expect(screen.getByTestId('layout')).toContainElement(
      screen.getByTestId('header')
    );
    expect(screen.getByText(/rendered child text/i)).toBeInTheDocument();
    expect(screen.getByTestId('layout')).toContainElement(
      screen.getByTestId('footer')
    );
  });

  it('renders with a page title', () => {
    render(<Layout pageTitle="Title">Rendered child text</Layout>);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
