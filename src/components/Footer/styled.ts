import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const FooterWrapper = styled.footer`
  color: ${colors.mineShaft};
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
