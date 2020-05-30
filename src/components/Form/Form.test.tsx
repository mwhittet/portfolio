import React from 'react';
import { getByTestId, render, RenderResult } from '@testing-library/react';

import Form from './Form';

const renderComponent = (): RenderResult => render(<Form />);

describe('<Form /> component', () => {
  it('should render', () => {
    const { container } = renderComponent();
    const form = getByTestId(container, 'form');

    expect(form).toBeInTheDocument();
  });

  it('should render the form element with the correct action', () => {
    const { container } = renderComponent();
    const form = getByTestId(container, 'form');

    expect(form).toHaveAttribute('action', '/success');
  });

  it('should render the form element with the data-netlify attribute', () => {
    const { container } = renderComponent();
    const form = getByTestId(container, 'form');

    expect(form).toHaveAttribute('data-netlify', 'true');
  });

  it('should render the form element with the data-netlify-honeypot attribute', () => {
    const { container } = renderComponent();
    const form = getByTestId(container, 'form');

    expect(form).toHaveAttribute('data-netlify-honeypot', 'bot-field');
  });

  it('should render the form element with the data-netlify-recaptcha attribute', () => {
    const { container } = renderComponent();
    const form = getByTestId(container, 'form');

    expect(form).toHaveAttribute('data-netlify-recaptcha', 'true');
  });

  it('should render the form element with the correct method', () => {
    const { container } = renderComponent();
    const form = getByTestId(container, 'form');

    expect(form).toHaveAttribute('method', 'post');
  });

  it('should render the form element with the correct name', () => {
    const { container } = renderComponent();
    const form = getByTestId(container, 'form');

    expect(form).toHaveAttribute('name', 'contact');
  });

  it('should render the hidden netlify input', () => {
    const { container } = renderComponent();
    const inputFormName = getByTestId(container, 'input-form-name');

    expect(inputFormName).toHaveClass('hidden');
    expect(inputFormName).toHaveAttribute('name', 'form-name');
    expect(inputFormName).toHaveAttribute('type', 'hidden');
    expect(inputFormName).toHaveAttribute('value', 'contact');
  });

  it('should render the hidden netlify bot input', () => {
    const { container } = renderComponent();
    const inputBotField = getByTestId(container, 'input-bot-field');

    expect(inputBotField).toHaveClass('hidden');
    expect(inputBotField).toHaveAttribute('name', 'bot-field');
    expect(inputBotField).toHaveAttribute('type', 'hidden');
  });

  it('should render the correct name label and input elements', () => {
    const { container } = renderComponent();
    const labelName = getByTestId(container, 'label-name');
    const inputName = getByTestId(container, 'input-name');

    expect(labelName).toHaveTextContent('Your Name:');
    expect(inputName).toHaveAttribute('autoComplete', 'nickname');
    expect(inputName).toHaveAttribute('name', 'name');
    expect(inputName).toHaveAttribute('type', 'text');
  });

  it('should render the correct email label and input elements', () => {
    const { container } = renderComponent();
    const labelEmail = getByTestId(container, 'label-email');
    const inputEmail = getByTestId(container, 'input-email');

    expect(labelEmail).toHaveTextContent('Your Email:');
    expect(inputEmail).toHaveAttribute('autoComplete', 'email');
    expect(inputEmail).toHaveAttribute('name', 'email');
    expect(inputEmail).toHaveAttribute('type', 'email');
  });

  it('should render the correct message label and textarea elements', () => {
    const { container } = renderComponent();
    const labelMessage = getByTestId(container, 'label-message');
    const textareaMessage = getByTestId(container, 'textarea-message');

    expect(labelMessage).toHaveTextContent('Message:');
    expect(textareaMessage).toHaveAttribute('name', 'message');
  });

  it('should render the ReCAPTCHA component', () => {
    const { container } = renderComponent();
    const reCAPTCHA = getByTestId(container, 'reCAPTCHA');

    expect(reCAPTCHA).toBeInTheDocument();
  });

  it('should render the form submit button', () => {
    const { container } = renderComponent();
    const buttonSubmit = getByTestId(container, 'button-submit');

    expect(buttonSubmit).toHaveAttribute('type', 'submit');
    expect(buttonSubmit).toHaveTextContent('Send message');
  });
});
