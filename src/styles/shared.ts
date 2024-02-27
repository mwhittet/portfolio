import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { breakpoints, colors } from '.';

export const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  text-align: center;

  ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Intro = styled(motion.h1)`
  font-size: clamp(1.7rem, 2.5vw, 2rem);
  line-height: 1.5;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 1.4rem;
  opacity: 1;
  padding-top: 10px;
  transition: 0.3s ease-in-out;

  ${breakpoints.md} {
    opacity: 0;
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
  padding: 0;
`;

export const Skill = styled.li`
  background: linear-gradient(180deg, ${colors.springWood}, ${colors.bone});
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

export const StyledImg = styled(GatsbyImage)`
  display: block;
  margin: 0 auto 30px;
`;
