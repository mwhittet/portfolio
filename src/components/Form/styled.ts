import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const FormWrapper = styled.form`
  margin: 25px auto 0;
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }

  .hidden {
    display: none;
  }
`;

export const InputTextarea = css`
  background-clip: padding-box;
  border-radius: 0.25rem;
  border: 1px solid ${colors.mercury};
  display: block;
  font-size: 1rem;
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

export const Label = styled.label`
  display: inline-block;
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
  background-color: ${colors.internationalOrange};
  border-radius: 0.25rem;
  border: 1px solid transparent;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1rem;
  height: 2.5rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition: width 0.5s ease;
  user-select: none;
  vertical-align: middle;
  width: 50%;

  &:hover {
    width: 100%;
  }
`;
