import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding: 0 0 15px;
`;

export const Link = styled.a`
  display: block;
  height: 32px;
  margin: 0 10px;
  width: 32px;

  &:first-child {
    margin-left: 10px;
  }
`;
