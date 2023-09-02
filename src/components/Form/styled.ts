import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const FormWrapper = styled.form`
  margin-bottom: 35px;

  ${breakpoints.sm} {
    margin: 0 auto 40px;
    width: 480px;
  }

  .hidden {
    display: none;
  }

  .recaptcha {
    display: flex;
    justify-content: center;
    transform: scale(0.85);

    ${breakpoints.sm} {
      transform: scale(1);
    }
  }
`;

export const InputTextarea = css`
  background-clip: padding-box;
  border-radius: 0.25rem;
  border: 1px solid ${colors.dustyGray};
  display: block;
  font-family: 'Marmelad', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  height: 2.5rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    border-color: ${colors.malibu};
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  ${InputTextarea}
`;

export const Textarea = styled.textarea`
  ${InputTextarea}
  height: 6rem;
`;

export const Button = styled.button`
  background-color: ${colors.mineShaft};
  border-radius: 0.25rem;
  border: 1px solid transparent;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1.125rem;
  height: 2.5rem;
  line-height: 1.5;
  margin: 20px 0 0;
  padding: 0.375rem 0.75rem;
  transition: background-color 0.5s ease-out;
  user-select: none;
  width: 100%;

  ${breakpoints.sm} {
    display: block;
    margin: 20px auto 0;
    width: 300px;
  }

  &:hover {
    background-color: ${colors.internationalOrange};
  }
`;
