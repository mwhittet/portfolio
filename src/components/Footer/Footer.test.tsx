import React from 'react';
import {
  getByTestId,
  render,
  RenderResult,
  within,
} from '@testing-library/react';

import Footer from './Footer';

const mockYear = new Date().getFullYear();

const renderComponent = (): RenderResult => render(<Footer />);

describe('<Footer /> component', () => {
  it('should render', () => {
    const { container } = renderComponent();
    const footer = getByTestId(container, 'footer');

    expect(footer).toBeInTheDocument();
  });

  it('should render with three elements', () => {
    const { container } = renderComponent();
    const footer = getByTestId(container, 'footer');

    expect(footer.childElementCount).toBe(3);
  });

  it('should render the first paragraph tag with the correct text', () => {
    const { container } = renderComponent();
    const footer = getByTestId(container, 'footer');
    const { getByText } = within(footer);

    expect(
      getByText(
        'Proudly built using React, Gatsby, GraphQL, TypeScript, styled-components'
      )
    ).toBeInTheDocument();
  });

  it('should render the second paragraph tag with the correct text', () => {
    const { container } = renderComponent();
    const footer = getByTestId(container, 'footer');
    const { getByText } = within(footer);

    expect(
      getByText(`Copyright © ${mockYear}, Michael Whittet`)
    ).toBeInTheDocument();
  });
});
