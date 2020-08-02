import React from 'react';
import { screen, render, RenderResult } from '@testing-library/react';
import Form from './Form';

const renderComponent = (props?): RenderResult => render(<Form {...props} />);

describe('<Form /> component', () => {
  it('should render', () => {
    renderComponent();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should render the form element with the correct action', () => {
    renderComponent();
    expect(screen.getByRole('form')).toHaveAttribute('action', '/success');
  });

  it('should render the form element with the data-netlify attribute', () => {
    renderComponent();
    expect(screen.getByRole('form')).toHaveAttribute('data-netlify', 'true');
  });

  it('should render the form element with the data-netlify-honeypot attribute', () => {
    renderComponent();
    expect(screen.getByRole('form')).toHaveAttribute(
      'data-netlify-honeypot',
      'bot-field'
    );
  });

  it('should render the form element with the data-netlify-recaptcha attribute', () => {
    renderComponent();
    expect(screen.getByRole('form')).toHaveAttribute(
      'data-netlify-recaptcha',
      'true'
    );
  });

  it('should render the form element with the correct method', () => {
    renderComponent();
    expect(screen.getByRole('form')).toHaveAttribute('method', 'post');
  });

  it('should render the form element with the correct name', () => {
    renderComponent();
    expect(screen.getByRole('form')).toHaveAttribute('name', 'contact');
  });

  it('should render the hidden netlify input', () => {
    renderComponent();
    expect(screen.getByTestId('input-form-name')).toHaveClass('hidden');
    expect(screen.getByTestId('input-form-name')).toHaveAttribute(
      'name',
      'form-name'
    );
    expect(screen.getByTestId('input-form-name')).toHaveAttribute(
      'type',
      'hidden'
    );
    expect(screen.getByTestId('input-form-name')).toHaveAttribute(
      'value',
      'contact'
    );
  });

  it('should render the hidden netlify bot input', () => {
    renderComponent();
    expect(screen.getByTestId('input-bot-field')).toHaveClass('hidden');
    expect(screen.getByTestId('input-bot-field')).toHaveAttribute(
      'name',
      'bot-field'
    );
    expect(screen.getByTestId('input-bot-field')).toHaveAttribute(
      'type',
      'hidden'
    );
  });

  it('should render the correct name label and input elements', () => {
    renderComponent();
    expect(screen.getByText('Your Name:')).toBeInTheDocument();
    expect(screen.getByTestId('input-name')).toHaveAttribute(
      'autoComplete',
      'nickname'
    );
    expect(screen.getByTestId('input-name')).toHaveAttribute('name', 'name');
    expect(screen.getByTestId('input-name')).toHaveAttribute('type', 'text');
  });

  it('should render the correct email label and input elements', () => {
    renderComponent();
    expect(screen.getByText('Your Email:')).toBeInTheDocument();
    expect(screen.getByTestId('input-email')).toHaveAttribute(
      'autoComplete',
      'email'
    );
    expect(screen.getByTestId('input-email')).toHaveAttribute('name', 'email');
    expect(screen.getByTestId('input-email')).toHaveAttribute('type', 'email');
  });

  it('should render the correct message label and textarea elements', () => {
    renderComponent();
    expect(screen.getByText('Message:')).toBeInTheDocument();
    expect(screen.getByTestId('textarea-message')).toHaveAttribute(
      'name',
      'message'
    );
  });

  it('should not render the ReCAPTCHA component', () => {
    renderComponent();
    expect(screen.queryByTestId('recaptcha')).not.toBeInTheDocument();
  });

  it('should render the ReCAPTCHA component', () => {
    renderComponent({ recaptcha: 'key' });
    expect(screen.queryByTestId('recaptcha')).toBeInTheDocument();
  });

  it('should render the form submit button', () => {
    renderComponent();
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    expect(screen.getByRole('button')).toHaveTextContent('Send message');
  });
});
