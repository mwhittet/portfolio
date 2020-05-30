import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, NavWrapper } from './styled';

const Social = (): React.ReactElement => (
  <NavWrapper data-testid="social">
    <IconContext.Provider value={{ size: '2rem' }}>
      <Link
        aria-label="Visit my LinkedIn profile"
        data-testid="social-linkedin"
        href="https://www.linkedin.com/in/michaelwhittet"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
      <Link
        aria-label="Visit my Twitter profile"
        data-testid="social-twitter"
        href="https://twitter.com/michaelwhittet"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaTwitter />
      </Link>
      <Link
        aria-label="Visit my Github profile"
        data-testid="social-github"
        href="https://github.com/mwhittet"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaGithub />
      </Link>
    </IconContext.Provider>
  </NavWrapper>
);

export default Social;
