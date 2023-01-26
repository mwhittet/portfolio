import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const FooterWrapper = styled.footer`
  background-color: ${colors.codGray};
  box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.4);
  color: ${colors.mercury};
  font-size: 0.813rem;
  padding: 15px;
  text-align: center;

  ${breakpoints.md} {
    padding: 15px 0;
  }

  p {
    margin-bottom: 0;
  }
`;
