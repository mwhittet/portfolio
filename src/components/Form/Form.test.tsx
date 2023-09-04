import React from 'react';
import { screen, render } from '@testing-library/react';

import Form from './';

describe('<Form /> component', () => {
  beforeEach(() => {
    render(<Form recaptcha="key" />);
  });

  it('renders with the correct attributes', () => {
    const form = screen.getByRole('form');

    expect(form).toHaveAttribute('action', '/success');
    expect(form).toHaveAttribute('data-netlify', 'true');
    expect(form).toHaveAttribute('data-netlify-honeypot', 'bot-field');
    expect(form).toHaveAttribute('data-netlify-recaptcha', 'true');
    expect(form).toHaveAttribute('method', 'post');
    expect(form).toHaveAttribute('name', 'contact');
  });

  it('renders with the hidden netlify input', () => {
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

  it('renders with the hidden netlify bot input', () => {
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

  it('renders with the name label and input elements', () => {
    const label = screen.getByText(/name:/i);
    const input = screen.getByRole('textbox', {
      name: /name:/i,
    });

    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute('autoComplete', 'nickname');
    expect(input).toHaveAttribute('name', 'name');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with the email label and input elements', () => {
    const label = screen.getByText(/email address:/i);
    const input = screen.getByRole('textbox', { name: /email address:/i });

    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute('autoComplete', 'email');
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders with the message label and textarea elements', () => {
    const label = screen.getByText(/message:/i);
    const input = screen.getByRole('textbox', { name: /message:/i });

    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'message');
  });

  it('renders with the ReCAPTCHA component', () => {
    expect(screen.queryByTestId('recaptcha')).toBeInTheDocument();
  });

  it('renders with the submit button', () => {
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    expect(screen.getByRole('button')).toHaveTextContent('Send message');
  });
});
