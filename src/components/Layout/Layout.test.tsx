import React from 'react';
import * as Gatsby from 'gatsby';
import { shallow } from 'enzyme';

import Layout from './Layout';

jest.mock('./styled', () => ({
  Container: 'Container',
  MainWrapper: 'MainWrapper',
}));

jest.mock('../Header', () => 'Header');
jest.mock('../Footer', () => 'Footer');
jest.mock('../../styles/layout.css');

const siteTitle = 'Michael Whittet';
const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: siteTitle,
    },
  },
}));

describe('<Layout />', () => {
  it('renders correctly', () => {
    const component = shallow(<Layout>Render child here</Layout>);

    expect(component.find('Container')).toHaveLength(1);

    expect(component.find('Header')).toHaveLength(1);
    expect(component.find('Header').prop('siteTitle')).toEqual(siteTitle);

    expect(component.find('MainWrapper').text()).toMatch('Render child here');

    expect(component.find('Footer')).toHaveLength(1);
  });
});
