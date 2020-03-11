import React from 'react';
import { Button, FormWrapper, Input, Label, Textarea } from './styled';

const Form = (): React.ReactElement => (
  <>
    <FormWrapper
      action="/success"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Input
        className="hidden"
        type="hidden"
        name="form-name"
        value="contact"
      />
      <Input className="hidden" type="hidden" name="bot-field" />
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
        <Textarea name="message" id="message" required />
      </p>
      <p>
        <Button type="submit">Send message</Button>
      </p>
    </FormWrapper>
  </>
);

export default Form;
