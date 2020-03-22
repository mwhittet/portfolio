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
        href="https://www.linkedin.com/in/michaelwhittet"
        aria-label="Visit my LinkedIn profile"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://twitter.com/michaelwhittet"
        aria-label="Visit my Twitter profile"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaTwitter />
      </Link>
      <Link
        href="https://github.com/mwhittet"
        aria-label="Visit my Github profile"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <FaGithub />
      </Link>
    </IconContext.Provider>
  </NavWrapper>
);

export default Social;
