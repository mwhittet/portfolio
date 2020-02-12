import styled from 'styled-components';
import { colors } from '../../styles';

export const FooterWrapper = styled.footer`
  background-color: ${colors.codGray};
  box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.4);
  color: ${colors.mercury};
  font-size: 13px;
  padding: 20px 0;
  text-align: center;

  @media (max-width: 959px) {
    padding: 5% 2.5%;
  }

  p {
    margin-bottom: 0;
  }
`;
