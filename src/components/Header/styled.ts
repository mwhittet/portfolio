import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import { breakpoints, colors } from '../../styles';

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const HeaderWrapper = styled.header`
  align-items: center;
  color: ${colors.mineShaft};
  display: flex;
  justify-content: space-between;
  padding: 15px;

  ${breakpoints.lg} {
    padding: 15px 50px;
  }
`;

export const Title = styled(Link)`
  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    backface-visibility: hidden;
    perspective: 1000px;
    transform: translate3d(0, 0, 0);
  }

  svg {
    display: block;
  }
`;

export const LinkWrapper = styled.span`
  margin-right: 20px;

  a {
    font-size: 1.15rem;
    font-weight: bold;
    position: relative;
    transition: all 0.5s ease-in-out;

    ${breakpoints.md} {
      font-size: 1.4rem;
    }

    &.active {
      &::before,
      &::after {
        opacity: 1;
        width: 100%;
      }
    }

    &::before,
    &::after {
      background-color: ${colors.internationalOrange};
      bottom: -5px;
      content: '';
      height: 2px;
      left: 0;
      margin: 5px 0 0;
      opacity: 0;
      position: absolute;
      transition-duration: 0.5s;
      transition: all 0.5s ease-in-out;
      width: 0;
    }
  }

  &:hover {
    a {
      color: ${colors.mineShaft};

      &::before,
      &::after {
        opacity: 1;
        width: 100%;
      }
    }
  }

  &:last-child {
    margin: 0;
  }
`;
