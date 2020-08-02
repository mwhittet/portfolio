import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import Content from './Content';

const defaultProps = {
  name: 'Michael Whittet',
  image: {
    childImageSharp: {
      fluid: {
        aspectRatio: 2,
        base64:
          'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHQvokaUIC//8QAGhABAAMAAwAAAAAAAAAAAAAAAgABAwQFFP/aAAgBAQABBQLsBbHEyR3mhpVga9E//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bp//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAQABBAMAA...',
        sizes: '(max-width: 1200px) 100vw, 1200px',
        src: '/static/f2291be24049472839268fd3aaf375bc/47498/roh.jpg',
        srcSet:
          '/static/f2291be24049472839268fd3aaf375bc/9dc27/roh.jpg 300w,\n/static/f2291be24049472839268fd3aaf375bc/4fe8c/roh.jpg 600w,\n/static/f2291be24049472839268fd3aaf375bc/47498/roh.jpg 1200w,\n/static/f2291be24049472839268fd3aaf375bc/52258/roh.jpg 1800w',
      },
    },
  },
};

const renderComponent = (): RenderResult =>
  render(<Content {...defaultProps} />);

describe('<Content /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
  });
});
