import React from 'react';
import { Button, FormWrapper, Input, Label, Textarea } from './styled';

const Form = (): React.ReactElement => (
  <>
    <FormWrapper
      action="/success"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      method="post"
      name="contact"
    >
      <Input
        className="hidden"
        data-test="input-form-name"
        name="form-name"
        type="hidden"
        value="contact"
      />
      <Input
        className="hidden"
        data-test="input-bot-field"
        name="form-name"
        type="hidden"
      />
      <p>
        <Label data-test="label-name" htmlFor="name">
          Your Name:
        </Label>
        <Input
          autoComplete="nickname"
          data-test="input-name"
          id="name"
          name="name"
          required
          type="text"
        />
      </p>
      <p>
        <Label data-test="label-email" htmlFor="email">
          Your Email:
        </Label>
        <Input
          autoComplete="email"
          data-test="input-email"
          id="email"
          name="email"
          required
          type="email"
        />
      </p>
      <p>
        <Label data-test="label-message" htmlFor="message">
          Message:
        </Label>
        <Textarea
          data-test="textarea-message"
          id="message"
          name="message"
          required
        />
      </p>
      <p>
        <Button data-test="button-submit" type="submit">
          Send message
        </Button>
      </p>
    </FormWrapper>
  </>
);

export default Form;
