import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import PortfolioItem from './PortfolioItem';
import { portfolioItemDefaultProps } from './PortfolioItem.mocks';

const renderComponent = (props?): RenderResult =>
  render(<PortfolioItem {...portfolioItemDefaultProps} {...props} />);

describe('<PortfolioItem /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(
      screen.getByText(portfolioItemDefaultProps.name)
    ).toBeInTheDocument();
  });

  it('should render internal link', () => {
    renderComponent();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      portfolioItemDefaultProps.url
    );
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });

  it('should render external link', () => {
    renderComponent({ url: '/' });
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
