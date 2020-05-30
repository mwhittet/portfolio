import React from 'react';
import { getByTestId, render, RenderResult } from '@testing-library/react';

import Social from './Social';

const renderComponent = (): RenderResult => render(<Social />);

describe('<Social /> component', () => {
  it('should render', () => {
    const { container } = renderComponent();
    const social = getByTestId(container, 'social');

    expect(social).toBeInTheDocument();
  });

  it('should render with three links', () => {
    const { container } = renderComponent();
    const social = getByTestId(container, 'social');

    expect(social.childElementCount).toBe(3);
  });

  it('should render the Github link with the aria-label', () => {
    const { container } = renderComponent();
    const github = getByTestId(container, 'social-github');

    expect(github).toHaveAttribute('aria-label', 'Visit my Github profile');
  });

  it('should render the Github link with the correct href', () => {
    const { container } = renderComponent();
    const github = getByTestId(container, 'social-github');

    expect(github).toHaveAttribute('href', 'https://github.com/mwhittet');
  });

  it('should render the LinkedIn link with the aria-label', () => {
    const { container } = renderComponent();
    const linkedin = getByTestId(container, 'social-linkedin');

    expect(linkedin).toHaveAttribute('aria-label', 'Visit my LinkedIn profile');
  });

  it('should render the LinkedIn link with the correct href', () => {
    const { container } = renderComponent();
    const linkedin = getByTestId(container, 'social-linkedin');

    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/michaelwhittet'
    );
  });

  it('should render the Twitter link with the aria-label', () => {
    const { container } = renderComponent();
    const twitter = getByTestId(container, 'social-twitter');

    expect(twitter).toHaveAttribute('aria-label', 'Visit my Twitter profile');
  });

  it('should render the Twitter link with the correct href', () => {
    const { container } = renderComponent();
    const twitter = getByTestId(container, 'social-twitter');

    expect(twitter).toHaveAttribute(
      'href',
      'https://twitter.com/michaelwhittet'
    );
  });
});
