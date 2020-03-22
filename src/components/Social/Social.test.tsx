import React from 'react';
import { shallow } from 'enzyme';

import Social from './Social';

jest.mock('react-icons/fa', () => ({
  FaGithub: 'FaGithub',
  FaLinkedin: 'FaLinkedin',
  FaTwitter: 'FaTwitter',
}));
jest.mock('./styled', () => ({
  Link: 'Link',
  NavWrapper: 'NavWrapper',
}));

const linkedIn = '[aria-label="Visit my LinkedIn profile"]';
const twitter = '[aria-label="Visit my Twitter profile"]';
const github = '[aria-label="Visit my Github profile"]';

describe('<Social />', () => {
  it('renders correctly', () => {
    const component = shallow(<Social />);

    expect(component.prop('alternative')).toBe(undefined);

    expect(component.find(linkedIn)).toHaveLength(1);
    expect(component.find(linkedIn).prop('href')).toEqual(
      'https://www.linkedin.com/in/michaelwhittet'
    );

    expect(component.find(twitter)).toHaveLength(1);
    expect(component.find(twitter).prop('href')).toEqual(
      'https://twitter.com/michaelwhittet'
    );

    expect(component.find(github)).toHaveLength(1);
    expect(component.find(github).prop('href')).toEqual(
      'https://github.com/mwhittet'
    );
  });

  it('renders correctly with the alternative prop', () => {
    const component = shallow(<Social alternative />);

    expect(component.prop('alternative')).toBe(true);
    expect(component.find(linkedIn).prop('alternative')).toBe(true);
  });
});
