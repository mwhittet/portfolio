import React from 'react';
import { Button, FormWrapper, Input, Label, Textarea } from './styled';

const Form = (): React.ReactElement => (
  <>
    <FormWrapper
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <Input
        className="hidden"
        type="hidden"
        name="form-name"
        value="contact"
      />
      <p className="hidden">
        <Label htmlFor="botField">Don’t fill this out if you're human:</Label>
        <Input name="bot-field" id="botField" />
      </p>
      <p>
        <Label htmlFor="name">Your Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          autoComplete="nickname"
          required
        />
      </p>
      <p>
        <Label htmlFor="email">Your Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
        />
      </p>
      <p>
        <Label htmlFor="message">Message:</Label>
        <Textarea name="message" id="message" required></Textarea>
      </p>
      <p data-netlify-recaptcha="true"></p>
      <p>
        <Button type="submit">Send message</Button>
      </p>
    </FormWrapper>
  </>
);

export default Form;
