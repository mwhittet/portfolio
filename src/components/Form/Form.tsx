import ReCAPTCHA from 'react-google-recaptcha';
import { Props } from '.';
import {
  Button,
  FormField,
  FormWrapper,
  Input,
  Label,
  Textarea,
} from './styled';

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
    <FormField>
      <Label htmlFor="name">Name:</Label>
      <Input
        autoComplete="nickname"
        data-testid="input-name"
        id="name"
        name="name"
        required
        type="text"
      />
    </FormField>
    <FormField>
      <Label htmlFor="email">Email address:</Label>
      <Input
        autoComplete="email"
        data-testid="input-email"
        id="email"
        name="email"
        required
        type="email"
      />
    </FormField>
    <FormField>
      <Label htmlFor="message">Message:</Label>
      <Textarea
        data-testid="textarea-message"
        id="message"
        name="message"
        required
      />
    </FormField>
    {recaptcha && (
      <ReCAPTCHA
        className="recaptcha"
        data-testid="recaptcha"
        sitekey={recaptcha}
      />
    )}
    <Button type="submit">Send message</Button>
  </FormWrapper>
);

export default Form;
