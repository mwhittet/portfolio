import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header /> component', () => {
  beforeEach(() => {
    render(<Header siteTitle="Michael Whittet" />);
  });

  it('renders', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders the title link', () => {
    const title = screen.getByTestId('header-title');

    expect(title).toHaveAttribute('href', '/');
    expect(title).toHaveAttribute('title', 'Michael Whittet');
    expect(title).toContainElement(screen.getByTestId('header-logo'));
  });

  it('renders the navigation element', () => {
    const headerNav = screen.getByTestId('header-nav');

    expect(headerNav).toBeInTheDocument();
    expect(headerNav.childElementCount).toBe(3);
  });

  it('renders the about page link', () => {
    const about = screen.getByTestId('header-nav-about');

    expect(about).toHaveAttribute('href', '/about');
    expect(about).toHaveTextContent('About');
    expect(about).not.toHaveClass('active');
  });

  it('renders the portfolio page link', () => {
    const portfolio = screen.getByTestId('header-nav-portfolio');

    expect(portfolio).toHaveAttribute('href', '/portfolio');
    expect(portfolio).toHaveTextContent('Portfolio');
    expect(portfolio).not.toHaveClass('active');
  });

  it('renders the contact page link', () => {
    const contact = screen.getByTestId('header-nav-contact');

    expect(contact).toHaveAttribute('href', '/contact');
    expect(contact).toHaveTextContent('Contact');
    expect(contact).not.toHaveClass('active');
  });
});
