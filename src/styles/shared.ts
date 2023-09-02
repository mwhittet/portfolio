import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { breakpoints, colors } from '.';

const defaultImgStyling = css`
  display: block;
  margin: 0 auto 30px;
`;

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
  padding-top: 10px;
  transition: 0.3s ease-in-out;

  ${breakpoints.md} {
    opacity: 0;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 30px;
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
  margin: 0 0 30px;
  padding: 0;
`;

export const Skill = styled.li`
  background-image: linear-gradient(
    180deg,
    ${colors.springWood} 0%,
    ${colors.bone} 100%
  );
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
  ${defaultImgStyling}
`;

export const StyledImg = styled(GatsbyImage)`
  ${defaultImgStyling}
  margin: 0 auto 30px;
`;
