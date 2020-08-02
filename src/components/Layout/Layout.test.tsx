import React from 'react';
import * as Gatsby from 'gatsby';
import { render, RenderResult, screen } from '@testing-library/react';
import Layout from './Layout';

const siteTitle = 'Michael Whittet';
const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: siteTitle,
    },
  },
}));

const renderComponent = (): RenderResult =>
  render(<Layout>Render child here</Layout>);

describe('<Layout /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('should render with the header component', () => {
    renderComponent();
    expect(screen.getByTestId('layout')).toContainElement(
      screen.getByTestId('header')
    );
  });

  it('should render with the footer component', () => {
    renderComponent();
    expect(screen.getByTestId('layout')).toContainElement(
      screen.getByTestId('footer')
    );
  });
});
