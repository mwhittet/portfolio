import React from 'react';
import { Button, FormWrapper, Input, Label, Textarea } from './styled';

const Form = (): React.ReactElement => (
  <FormWrapper
    action="/success"
    data-netlify-honeypot="bot-field"
    data-netlify="true"
    data-netlify-recaptcha="true"
    data-testid="form"
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
      <Label data-testid="label-name" htmlFor="name">
        Your Name:
      </Label>
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
      <Label data-testid="label-email" htmlFor="email">
        Your Email:
      </Label>
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
      <Label data-testid="label-message" htmlFor="message">
        Message:
      </Label>
      <Textarea
        data-testid="textarea-message"
        id="message"
        name="message"
        required
      />
    </p>
    <p>
      <div data-netlify-recaptcha="true"></div>
    </p>
    <p>
      <Button data-testid="button-submit" type="submit">
        Send message
      </Button>
    </p>
  </FormWrapper>
);

export default Form;
