import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import Social from './Social';

const renderComponent = (): RenderResult => render(<Social />);

describe('<Social /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(screen.getByTestId('social')).toBeInTheDocument();
  });

  it('should render with three links', () => {
    renderComponent();
    expect(screen.getByTestId('social').childElementCount).toBe(3);
  });

  it('should render the Github link with the aria-label', () => {
    renderComponent();
    expect(screen.getByTestId('social-github')).toHaveAttribute(
      'aria-label',
      'Visit my Github profile'
    );
  });

  it('should render the Github link with the correct href', () => {
    renderComponent();
    expect(screen.getByTestId('social-github')).toHaveAttribute(
      'href',
      'https://github.com/mwhittet'
    );
  });

  it('should render the LinkedIn link with the aria-label', () => {
    renderComponent();
    expect(screen.getByTestId('social-linkedin')).toHaveAttribute(
      'aria-label',
      'Visit my LinkedIn profile'
    );
  });

  it('should render the LinkedIn link with the correct href', () => {
    renderComponent();
    expect(screen.getByTestId('social-linkedin')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/michaelwhittet'
    );
  });

  it('should render the Twitter link with the aria-label', () => {
    renderComponent();
    expect(screen.getByTestId('social-twitter')).toHaveAttribute(
      'aria-label',
      'Visit my Twitter profile'
    );
  });

  it('should render the Twitter link with the correct href', () => {
    renderComponent();
    expect(screen.getByTestId('social-twitter')).toHaveAttribute(
      'href',
      'https://twitter.com/michaelwhittet'
    );
  });
});
