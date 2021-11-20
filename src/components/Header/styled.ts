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
  background-color: ${colors.codGray};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  color: ${colors.mercury};
  display: flex;
  justify-content: space-between;
  padding: 10px 5% 10px 3%;

  ${breakpoints.md} {
    padding: 10px 50px;
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

export const Navigation = styled.nav``;

export const LinkWrapper = styled.span`
  margin-right: 20px;

  a {
    font-size: 1.15rem;
    position: relative;
    transition: all 0.5s ease-in-out;

    ${breakpoints.md} {
      font-size: 1.25rem;
    }

    &.active {
      color: ${colors.internationalOrange};

      &:before,
      &:after {
        opacity: 1;
        width: 100%;
      }
    }

    &:before,
    &:after {
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
      &:before,
      &:after {
        opacity: 1;
        width: 100%;
      }
    }
  }

  &:last-child {
    margin: 0;
  }
`;
