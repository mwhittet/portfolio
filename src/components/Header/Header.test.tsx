import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

jest.mock('../../images/logo.svg', () => 'Logo');
jest.mock('./styled', () => ({
  HeaderWrapper: 'HeaderWrapper',
  LinkWrapper: 'LinkWrapper',
  Navigation: 'Navigation',
  Title: 'Title',
}));

const defaultProps = {
  siteTitle: 'Michael Whittet',
};

const navAbout = '[data-testing="nav-about"]';
const navPortfolio = '[data-testing="nav-portfolio"]';
const navContact = '[data-testing="nav-contact"]';

describe('<Header />', () => {
  it('renders correctly', () => {
    const component = shallow(<Header {...defaultProps} />);

    expect(component.find('Title')).toHaveLength(1);
    expect(component.find('Title').prop('title')).toBe(defaultProps.siteTitle);
    expect(component.find('Title').prop('to')).toBe('/');

    expect(component.find('Logo')).toHaveLength(1);

    expect(component.find('Navigation')).toHaveLength(1);

    expect(component.find(navAbout)).toHaveLength(1);
    expect(component.find(navAbout).prop('to')).toBe('/about');

    expect(component.find(navPortfolio)).toHaveLength(1);
    expect(component.find(navPortfolio).prop('to')).toBe('/portfolio');

    expect(component.find(navContact)).toHaveLength(1);
    expect(component.find(navContact).prop('to')).toBe('/contact');
  });
});
