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

  it('renders with a external link', () => {
    render(
      <PortfolioItem
        {...portfolioItemDefaultProps}
        url="https://www.google.co.uk/"
      />
    );

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.google.co.uk/'
    );
  });

  it('renders without a wrapping link', () => {
    render(<PortfolioItem {...portfolioItemDefaultProps} url="/" />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders with a internal link', () => {
    render(<PortfolioItem {...portfolioItemDefaultProps} url="/portfolio" />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/portfolio');
  });
});
