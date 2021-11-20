import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 5% 2.5%;
  position: relative;
  width: 95%;

  ${breakpoints.md} {
    margin: 50px auto;
    padding: 0;
    width: 960px;
  }

  ${breakpoints.lg} {
    width: 1200px;
  }

  &.home {
    flex-direction: initial;
  }

  p {
    color: ${colors.emperor};
    font-size: 1.125rem;
    margin-bottom: 20px;

    a {
      color: ${colors.emperor};
      font-weight: bold;
      text-decoration: underline;
      text-decoration-color: ${colors.internationalOrange};

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
