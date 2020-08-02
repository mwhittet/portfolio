import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import Footer from './Footer';

const mockYear = new Date().getFullYear();

const renderComponent = (): RenderResult => render(<Footer />);

describe('<Footer /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render with three elements', () => {
    renderComponent();
    expect(screen.getByTestId('footer').childElementCount).toBe(3);
  });

  it('should render the first paragraph tag with the correct text', () => {
    renderComponent();
    expect(
      screen.getByText(
        'Proudly built using React, Gatsby, GraphQL, TypeScript, styled-components'
      )
    ).toBeInTheDocument();
  });

  it('should render the second paragraph tag with the correct text', () => {
    renderComponent();
    expect(
      screen.getByText(`Copyright © ${mockYear}, Michael Whittet`)
    ).toBeInTheDocument();
  });
});
