import React from 'react';
import '@testing-library/jest-dom';
import { getByTestId, render, RenderResult } from '@testing-library/react';

import Header from './Header';

const defaultProps = {
  siteTitle: 'Michael Whittet',
};

const renderComponent = (): RenderResult =>
  render(<Header {...defaultProps} />);

describe('<Header /> component', () => {
  it('should render', () => {
    const { container } = renderComponent();
    const header = getByTestId(container, 'header');

    expect(header).toBeInTheDocument();
  });

  it('should render the title link with the correct href', () => {
    const { container } = renderComponent();
    const title = getByTestId(container, 'header-title');

    expect(title).toHaveAttribute('href', '/');
  });

  it('should render the title link with the correct text', () => {
    const { container } = renderComponent();
    const title = getByTestId(container, 'header-title');

    expect(title).toHaveAttribute('title', defaultProps.siteTitle);
  });

  it('should render the title with a logo', () => {
    const { container } = renderComponent();
    const title = getByTestId(container, 'header-title');
    const logo = getByTestId(container, 'header-logo');

    expect(title).toContainElement(logo);
  });

  it('should render the navigation element', () => {
    const { container } = renderComponent();
    const headerNav = getByTestId(container, 'header-nav');

    expect(headerNav).toBeInTheDocument();
  });

  it('should render the navigation element with three links', () => {
    const { container } = renderComponent();
    const headerNav = getByTestId(container, 'header-nav');

    expect(headerNav.childElementCount).toBe(3);
  });

  it('should render the About page link with the correct href', () => {
    const { container } = renderComponent();
    const about = getByTestId(container, 'header-nav-about');

    expect(about).toHaveAttribute('href', '/about');
  });

  it('should render the About page link with the correct text', () => {
    const { container } = renderComponent();
    const about = getByTestId(container, 'header-nav-about');

    expect(about).toHaveTextContent('About');
  });

  it('should render the About page link without the active class', () => {
    const { container } = renderComponent();
    const about = getByTestId(container, 'header-nav-about');

    expect(about).not.toHaveClass('active');
  });

  it('should render the Portfolio page link with the correct href', () => {
    const { container } = renderComponent();
    const portfolio = getByTestId(container, 'header-nav-portfolio');

    expect(portfolio).toHaveAttribute('href', '/portfolio');
  });

  it('should render the Portfolio page link with the correct text', () => {
    const { container } = renderComponent();
    const portfolio = getByTestId(container, 'header-nav-portfolio');

    expect(portfolio).toHaveTextContent('Portfolio');
  });

  it('should render the Portfolio page link without the active class', () => {
    const { container } = renderComponent();
    const portfolio = getByTestId(container, 'header-nav-portfolio');

    expect(portfolio).not.toHaveClass('active');
  });

  it('should render the Contact page link with the correct href', () => {
    const { container } = renderComponent();
    const contact = getByTestId(container, 'header-nav-contact');

    expect(contact).toHaveAttribute('href', '/contact');
  });

  it('should render the Contact page link with the correct text', () => {
    const { container } = renderComponent();
    const contact = getByTestId(container, 'header-nav-contact');

    expect(contact).toHaveTextContent('Contact');
  });

  it('should render the Contact page link without the active class', () => {
    const { container } = renderComponent();
    const contact = getByTestId(container, 'header-nav-contact');

    expect(contact).not.toHaveClass('active');
  });
});
