import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const mockYear = new Date().getFullYear();

describe('<Footer /> component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders', () => {
    const footer = screen.getByTestId('footer');

    expect(footer).toBeInTheDocument();
    expect(footer.childElementCount).toBe(3);
  });

  it('renders the first paragraph tag', () => {
    expect(
      screen.getByText(
        'Proudly built using React, Gatsby, GraphQL, TypeScript, styled-components'
      )
    ).toBeInTheDocument();
  });

  it('renders the second paragraph tag', () => {
    expect(
      screen.getByText(`Copyright © ${mockYear}, Michael Whittet`)
    ).toBeInTheDocument();
  });
});
