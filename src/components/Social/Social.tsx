import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, NavWrapper } from './styled';

const Social = (): React.ReactElement => (
  <NavWrapper data-testid="social">
    <IconContext.Provider value={{ size: '2rem' }}>
      <Link
        aria-label="Visit my Github profile"
        data-testid="social-github"
        href="https://github.com/mwhittet/"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        aria-label="Visit my LinkedIn profile"
        data-testid="social-linkedin"
        href="https://www.linkedin.com/in/mike-w-b8756168/"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
    </IconContext.Provider>
  </NavWrapper>
);

export default Social;
