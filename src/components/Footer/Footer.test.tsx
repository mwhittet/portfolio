import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './';

const mockYear = new Date().getFullYear();

describe('<Footer /> component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders', () => {
    const footer = screen.getByTestId('footer');

    expect(footer.childElementCount).toBe(3);
  });

  it('renders the first paragraph tag', () => {
    expect(
      screen.getByText(
        /proudly built using react, gatsby, graphqL, typescript, styled\-components/i
      )
    ).toBeInTheDocument();
  });

  it('renders the second paragraph tag', () => {
    expect(
      screen.getByText(`Copyright © ${mockYear}, Michael Whittet`)
    ).toBeInTheDocument();
  });
});
