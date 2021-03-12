import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import Content from './Content';
import { contentDefaultProps } from '../PortfolioItem.mocks';

const renderComponent = (): RenderResult =>
  render(<Content {...contentDefaultProps} />);

describe('<Content /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(screen.getByText(contentDefaultProps.name)).toBeInTheDocument();
  });
});
