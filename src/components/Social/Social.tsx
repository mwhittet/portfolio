import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, NavWrapper } from './styled';
import { Props } from '.';

const Social = ({ alternative }: Props): React.ReactElement => (
  <NavWrapper alternative={alternative}>
    <IconContext.Provider value={{ size: '2rem' }}>
      <Link
        alternative={alternative}
        aria-label="Visit my LinkedIn profile"
        href="https://www.linkedin.com/in/michaelwhittet"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
      <Link
        aria-label="Visit my Twitter profile"
        href="https://twitter.com/michaelwhittet"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaTwitter />
      </Link>
      <Link
        aria-label="Visit my Github profile"
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
