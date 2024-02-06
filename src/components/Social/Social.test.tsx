import { render, screen } from '@testing-library/react';
import Social from './';

describe('<Social /> component', () => {
  beforeEach(() => {
    render(<Social />);
  });

  it('renders', () => {
    const social = screen.getByTestId('social');

    expect(social.childElementCount).toBe(2);
  });

  it('renders the Github link', () => {
    const github = screen.getByTestId('social-github');

    expect(github).toHaveAttribute('aria-label', 'Visit my Github profile');
    expect(github).toHaveAttribute('href', 'https://github.com/mwhittet/');
  });

  it('renders the LinkedIn link', () => {
    const linkedin = screen.getByTestId('social-linkedin');

    expect(linkedin).toHaveAttribute('aria-label', 'Visit my LinkedIn profile');
    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/mike-w-b8756168/'
    );
  });
});
