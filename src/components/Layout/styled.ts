import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainWrapper = styled(motion.main)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px;
  position: relative;

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
