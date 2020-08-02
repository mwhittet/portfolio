import React from 'react';
import '@testing-library/jest-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import Header from './Header';

const defaultProps = {
  siteTitle: 'Michael Whittet',
};

const renderComponent = (): RenderResult =>
  render(<Header {...defaultProps} />);

describe('<Header /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render the title link with the correct href', () => {
    renderComponent();
    expect(screen.getByTestId('header-title')).toHaveAttribute('href', '/');
  });

  it('should render the title link with the correct text', () => {
    renderComponent();
    expect(screen.getByTestId('header-title')).toHaveAttribute(
      'title',
      defaultProps.siteTitle
    );
  });

  it('should render the title with a logo', () => {
    renderComponent();
    expect(screen.getByTestId('header-title')).toContainElement(
      screen.getByTestId('header-logo')
    );
  });

  it('should render the navigation element', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });

  it('should render the navigation element with three links', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav').childElementCount).toBe(3);
  });

  it('should render the About page link with the correct href', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-about')).toHaveAttribute(
      'href',
      '/about'
    );
  });

  it('should render the About page link with the correct text', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-about')).toHaveTextContent('About');
  });

  it('should render the About page link without the active class', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-about')).not.toHaveClass('active');
  });

  it('should render the Portfolio page link with the correct href', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-portfolio')).toHaveAttribute(
      'href',
      '/portfolio'
    );
  });

  it('should render the Portfolio page link with the correct text', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-portfolio')).toHaveTextContent(
      'Portfolio'
    );
  });

  it('should render the Portfolio page link without the active class', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-portfolio')).not.toHaveClass(
      'active'
    );
  });

  it('should render the Contact page link with the correct href', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-contact')).toHaveAttribute(
      'href',
      '/contact'
    );
  });

  it('should render the Contact page link with the correct text', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-contact')).toHaveTextContent(
      'Contact'
    );
  });

  it('should render the Contact page link without the active class', () => {
    renderComponent();
    expect(screen.getByTestId('header-nav-contact')).not.toHaveClass('active');
  });
});
