import React from 'react';
import * as Gatsby from 'gatsby';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'Michael Whittet',
    },
  },
}));

describe('<Layout /> component', () => {
  beforeEach(() => {
    render(<Layout>Render child here</Layout>);
  });

  it('renders', () => {
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders with the header component', () => {
    expect(screen.getByTestId('layout')).toContainElement(
      screen.getByTestId('header')
    );
  });

  it('renders with the footer component', () => {
    expect(screen.getByTestId('layout')).toContainElement(
      screen.getByTestId('footer')
    );
  });
});
