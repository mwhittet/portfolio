import styled from 'styled-components';
import { Props } from '.';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: ${({ alternative }: Props): string =>
    alternative ? 'left' : 'center'};
  padding: ${({ alternative }: Props): string =>
alternative ? '15px 0' : '0 0 20px'};
`;

export const Link = styled.a`
  display: block;
  height: 32px;
  margin: 0 10px;
  width: 32px;

  &:first-child {
    margin-left: ${({ alternative }: Props): string =>
      alternative ? '0' : '10px'};
  }
`;
