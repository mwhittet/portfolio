import styled, { createGlobalStyle } from 'styled-components';
import Img from 'gatsby-image';
import { colors } from '.';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  text-align: center;
`;

export const Intro = styled.h1`
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 2rem;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  opacity: 1;
  padding: 10px 0;
  transition: 0.3s ease-in-out;

  @media (min-width: 992px) {
    opacity: 0;
  }
`;

export const PageTitle = styled.h1`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: ${colors.internationalOrange};
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin-bottom: 4%;
  overflow: hidden;
  padding: 5% 2.5%;
  position: relative;
  width: 95%;

  @media (min-width: 992px) {
    padding: 0;
    width: 48%;
  }

  .gatsby-image-wrapper {
    transform: none;
    transition: 0.3s ease-in-out;

    @media (min-width: 992px) {
      transform: rotate(15deg) scale(1.4);
    }
  }

  &:hover {
    .gatsby-image-wrapper {
      transform: rotate(0) scale(1);
    }

    ${Title} {
      opacity: 1;
    }
  }
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Skill = styled.li`
  background: #141414;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: default;
  display: inline;
  font-size: 1.1rem;
  margin: 0 10px 10px 0;
  padding: 10px;
  transition: color 1s ease-out, background 1s ease-out;

  &:hover {
    background: none;
    color: #555;
  }
`;

export const StyledImg = styled(Img)`
  border-radius: 50%;
  display: block;
  height: 225px;
  margin: 0 auto 20px;
  width: 209px;

  @media (min-width: 992px) {
    margin: 0 auto 50px;
  }
`;
