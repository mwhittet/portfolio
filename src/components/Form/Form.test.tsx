import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

jest.mock('./styled', () => ({
  Button: 'Button',
  FormWrapper: 'FormWrapper',
  Input: 'Input',
  Label: 'Label',
  Textarea: 'Textarea',
}));

describe('<Form />', () => {
  it('renders correctly', () => {
    const component = shallow(<Form />);

    expect(component.find('FormWrapper')).toHaveLength(1);
    expect(component.find('FormWrapper').prop('action')).toEqual('/success');
    expect(component.find('FormWrapper').prop('method')).toEqual('post');
    expect(component.find('FormWrapper').prop('name')).toEqual('contact');

    expect(component.find('[data-test="input-form-name"]')).toHaveLength(1);
    expect(component.find('[data-test="input-bot-field"]')).toHaveLength(1);

    expect(component.find('[data-test="label-name"]')).toHaveLength(1);
    expect(component.find('[data-test="input-name"]')).toHaveLength(1);

    expect(component.find('[data-test="label-email"]')).toHaveLength(1);
    expect(component.find('[data-test="input-email"]')).toHaveLength(1);

    expect(component.find('[data-test="label-message"]')).toHaveLength(1);
    expect(component.find('[data-test="textarea-message"]')).toHaveLength(1);

    expect(component.find('[data-test="button-submit"]')).toHaveLength(1);
  });

  it('renders with correct netlify attributes', () => {
    const component = shallow(<Form />);

    expect(component.find('FormWrapper')).toHaveLength(1);
    expect(component.find('FormWrapper').prop('data-netlify')).toEqual('true');
    expect(component.find('FormWrapper').prop('data-netlify-honeypot')).toEqual(
      'bot-field'
    );
  });
});
