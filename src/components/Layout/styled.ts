import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 50px auto;
  position: relative;
  width: 960px;

  &.home {
    flex-direction: initial;
  }

  @media (max-width: 977px) {
    margin: 0 auto;
    padding: 5% 2.5%;
    width: 95%;
  }

  p {
    color: ${colors.emperor};
    font-size: 1.1rem;
    margin-bottom: 15px;

    a {
      color: ${colors.internationalOrange};
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
