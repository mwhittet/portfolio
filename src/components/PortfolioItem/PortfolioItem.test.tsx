import { render, screen } from '@testing-library/react';
import PortfolioItem from './';
import { portfolioItemDefaultProps } from './PortfolioItem.mocks';

describe('<PortfolioItem /> component', () => {
  it('renders', () => {
    render(<PortfolioItem {...portfolioItemDefaultProps} />);

    const { name } = portfolioItemDefaultProps;
    const getName = screen.getByText(name);
    const link = screen.getByRole('link');

    expect(getName).toBeInTheDocument();
    expect(link).toHaveAttribute('href', portfolioItemDefaultProps.url);
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders external link', () => {
    render(<PortfolioItem {...portfolioItemDefaultProps} url="/" />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
