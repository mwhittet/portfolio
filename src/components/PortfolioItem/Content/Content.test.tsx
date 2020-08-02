import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import Content from './Content';
import { defaultProps } from '../PortfolioItem.mocks';

const renderComponent = (): RenderResult =>
  render(<Content {...defaultProps} />);

describe('<Content /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
  });
});
