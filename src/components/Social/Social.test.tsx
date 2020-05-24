import React from 'react';
import { getByTestId, render, RenderResult } from '@testing-library/react';

import Social from './Social';

const renderComponent = (): RenderResult => render(<Social />);

describe('<Social /> component', () => {
  it('renders', () => {
    const { container } = renderComponent();
    const social = getByTestId(container, 'social');

    expect(social).toBeTruthy();
  });

  it('contains the correct Github aria-label', () => {
    const { container } = renderComponent();
    const github = getByTestId(container, 'social-github');

    expect(github).toHaveAttribute('aria-label', 'Visit my Github profile');
  });

  it('contains the correct Github href', () => {
    const { container } = renderComponent();
    const github = getByTestId(container, 'social-github');

    expect(github).toHaveAttribute('href', 'https://github.com/mwhittet');
  });

  it('contains the correct LinkedIn aria-label', () => {
    const { container } = renderComponent();
    const linkedin = getByTestId(container, 'social-linkedin');

    expect(linkedin).toHaveAttribute('aria-label', 'Visit my LinkedIn profile');
  });

  it('contains the correct LinkedIn href', () => {
    const { container } = renderComponent();
    const linkedin = getByTestId(container, 'social-linkedin');

    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/michaelwhittet'
    );
  });

  it('contains the correct Twitter aria-label', () => {
    const { container } = renderComponent();
    const twitter = getByTestId(container, 'social-twitter');

    expect(twitter).toHaveAttribute('aria-label', 'Visit my Twitter profile');
  });

  it('contains the correct Twitter href', () => {
    const { container } = renderComponent();
    const twitter = getByTestId(container, 'social-twitter');

    expect(twitter).toHaveAttribute(
      'href',
      'https://twitter.com/michaelwhittet'
    );
  });
});
