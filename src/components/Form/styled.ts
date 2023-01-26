import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const FormWrapper = styled.form`
  ${breakpoints.md} {
    margin: 0 auto;
    width: 50%;
  }

  .hidden {
    display: none;
  }

  .recaptcha {
    display: flex;
    justify-content: center;
  }
`;

export const InputTextarea = css`
  background-clip: padding-box;
  border-radius: 0.25rem;
  border: 2px solid ${colors.dustyGray};
  color: ${colors.emperor};
  display: block;
  font-family: 'Marmelad', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  height: 2.5rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: ${colors.emperor};
  display: inline-block;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  ${InputTextarea}
`;

export const Textarea = styled.textarea`
  ${InputTextarea}
  height: 10rem;
`;

export const Button = styled.button`
  background-color: ${colors.codGray};
  border-radius: 0.25rem;
  border: 1px solid transparent;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1.125rem;
  height: 2.5rem;
  line-height: 1.5;
  margin: 20px 0 35px;
  padding: 0.375rem 0.75rem;
  transition: background-color 0.5s ease-out;
  user-select: none;
  vertical-align: middle;
  width: 100%;

  ${breakpoints.md} {
    margin: 20px 0 70px;
  }

  &:hover {
    background-color: ${colors.internationalOrange};
  }
`;
