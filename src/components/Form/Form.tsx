import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Props } from '.';
import { Button, FormWrapper, Input, Label, Textarea } from './styled';

const Form = ({ recaptcha }: Props): React.ReactElement => (
  <FormWrapper
    action="/success"
    data-netlify-honeypot="bot-field"
    data-netlify="true"
    data-netlify-recaptcha="true"
    method="post"
    name="contact"
  >
    <Input
      className="hidden"
      data-testid="input-form-name"
      name="form-name"
      type="hidden"
      value="contact"
    />
    <Input
      className="hidden"
      data-testid="input-bot-field"
      name="bot-field"
      type="hidden"
    />
    <p>
      <Label htmlFor="name">Your Name:</Label>
      <Input
        autoComplete="nickname"
        data-testid="input-name"
        id="name"
        name="name"
        required
        type="text"
      />
    </p>
    <p>
      <Label htmlFor="email">Your Email:</Label>
      <Input
        autoComplete="email"
        data-testid="input-email"
        id="email"
        name="email"
        required
        type="email"
      />
    </p>
    <p>
      <Label htmlFor="message">Message:</Label>
      <Textarea
        data-testid="textarea-message"
        id="message"
        name="message"
        required
      />
    </p>
    {recaptcha && <ReCAPTCHA data-testid="recaptcha" sitekey={recaptcha} />}
    <p>
      <Button type="submit">Send message</Button>
    </p>
  </FormWrapper>
);

export default Form;
