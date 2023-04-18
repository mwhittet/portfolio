import React from 'react';
import { screen, render } from '@testing-library/react';
import Form from './Form';

describe('<Form /> component', () => {
  beforeEach(() => {
    render(<Form recaptcha="key" />);
  });

  it('renders with the correct attributes', () => {
    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
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
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByTestId('input-name')).toHaveAttribute(
      'autoComplete',
      'nickname'
    );
    expect(screen.getByTestId('input-name')).toHaveAttribute('name', 'name');
    expect(screen.getByTestId('input-name')).toHaveAttribute('type', 'text');
  });

  it('renders with the email label and input elements', () => {
    expect(screen.getByText('Email address:')).toBeInTheDocument();
    expect(screen.getByTestId('input-email')).toHaveAttribute(
      'autoComplete',
      'email'
    );
    expect(screen.getByTestId('input-email')).toHaveAttribute('name', 'email');
    expect(screen.getByTestId('input-email')).toHaveAttribute('type', 'email');
  });

  it('renders with the message label and textarea elements', () => {
    expect(screen.getByText('Message:')).toBeInTheDocument();
    expect(screen.getByTestId('textarea-message')).toHaveAttribute(
      'name',
      'message'
    );
  });

  it('renders with the ReCAPTCHA component', () => {
    expect(screen.queryByTestId('recaptcha')).toBeInTheDocument();
  });

  it('renders with the submit button', () => {
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    expect(screen.getByRole('button')).toHaveTextContent('Send message');
  });
});
