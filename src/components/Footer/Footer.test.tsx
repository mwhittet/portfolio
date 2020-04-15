import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

jest.mock('../Social', () => 'Social');
jest.mock('./styled', () => ({
  FooterWrapper: 'FooterWrapper',
}));

describe('<Footer />', () => {
  it('renders correctly', () => {
    const component = shallow(<Footer />);

    expect(component.find('Social')).toHaveLength(1);
    expect(component.find('p')).toHaveLength(2);
  });
});
