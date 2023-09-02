import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { breakpoints, colors } from '.';

export const Container = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr;
  text-align: center;

  ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Intro = styled(motion.h1)`
  font-size: 1.2rem;
  line-height: 1.3;
  text-align: center;

  ${breakpoints.md} {
    font-size: 2rem;
  }
`;

export const Title = styled.div`
  font-size: 1.4rem;
  opacity: 1;
  padding: 10px 0;
  transition: 0.3s ease-in-out;

  ${breakpoints.md} {
    opacity: 0;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 25px;
  text-decoration: underline;
  text-decoration-color: ${colors.internationalOrange};
  text-underline-offset: 10px;

  ${breakpoints.md} {
    font-size: 2rem;
  }
`;

export const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;

  .gatsby-image-wrapper {
    transform: none;
    transition: 0.3s ease-in-out;

    ${breakpoints.md} {
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
  margin: 0 0 20px;
  padding: 0;
`;

export const Skill = styled.li`
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  cursor: default;
  display: inline;
  font-size: 1.125rem;
  margin: 0 10px 10px 0;
  padding: 7px;

  &:hover {
    box-shadow: 4px 4px 8px rgba(255, 84, 0, 1);
  }
`;

export const OfficeImg = styled(GatsbyImage)`
  display: block;
  margin: 20px auto 40px;
`;

export const StyledImg = styled(GatsbyImage)`
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px;

  ${breakpoints.md} {
    margin: 0 auto 50px;
  }
`;
