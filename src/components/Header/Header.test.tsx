import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './';

describe('<Header /> component', () => {
  beforeEach(() => {
    render(<Header siteTitle="Michael Whittet" />);
  });

  it('renders the title link', () => {
    const title = screen.getByTestId('header-title');

    expect(title).toHaveAttribute('href', '/');
    expect(title).toHaveAttribute('title', 'Michael Whittet');
    expect(title).toContainElement(screen.getByTestId('header-logo'));
  });

  it('renders the about page link', () => {
    const about = screen.getByRole('link', {
      name: /about/i,
    });

    expect(about).toHaveAttribute('href', '/about');
    expect(about).not.toHaveClass('active');
  });

  it('renders the portfolio page link', () => {
    const portfolio = screen.getByRole('link', {
      name: /portfolio/i,
    });

    expect(portfolio).toHaveAttribute('href', '/portfolio');
    expect(portfolio).not.toHaveClass('active');
  });

  it('renders the contact page link', () => {
    const contact = screen.getByRole('link', {
      name: /contact/i,
    });

    expect(contact).toHaveAttribute('href', '/contact');
    expect(contact).not.toHaveClass('active');
  });
});
