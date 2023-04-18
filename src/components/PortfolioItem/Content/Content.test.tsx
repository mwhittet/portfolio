import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './Content';
import { contentDefaultProps } from '../PortfolioItem.mocks';

describe('<Content /> component', () => {
  it('renders', () => {
    render(<Content {...contentDefaultProps} />);

    expect(screen.getByText(contentDefaultProps.name)).toBeInTheDocument();
  });
});
