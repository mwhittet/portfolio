import React from 'react';
import * as Gatsby from 'gatsby';
import { getByTestId, render, RenderResult } from '@testing-library/react';

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
    const { container } = renderComponent();
    const layout = getByTestId(container, 'layout');

    expect(layout).toBeInTheDocument();
  });

  it('should render with the header component', () => {
    const { container } = renderComponent();
    const layout = getByTestId(container, 'layout');
    const header = getByTestId(container, 'header');

    expect(layout).toContainElement(header);
  });

  it('should render with the footer component', () => {
    const { container } = renderComponent();
    const layout = getByTestId(container, 'layout');
    const footer = getByTestId(container, 'footer');

    expect(layout).toContainElement(footer);
  });
});
