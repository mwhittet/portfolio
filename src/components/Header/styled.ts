import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from '../../styles';

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${colors.codGray};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  color: ${colors.mercury};
  display: flex;
  justify-content: space-between;
  padding: 5px 50px;

  @media (max-width: 977px) {
    padding: 5px 2.5%;
  }
`;

export const Title = styled(Link)``;

export const Navigation = styled.nav``;

export const LinkWrapper = styled.span`
  margin-right: 20px;

  a {
    font-size: 1.25rem;
    position: relative;
    transition: all 0.2s ease-in-out;

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
      position: absolute;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.5s;
      width: 0;
    }

    @media (max-width: 977px) {
      font-size: 1rem;
    }
  }

  &:hover {
    cursor: pointer;

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
