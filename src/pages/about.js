import React from 'react';
import { Link } from 'gatsby';
import { PageTitle } from '../styles/shared';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const About = () => (
  <Layout>
    <Seo title="About" />
    <PageTitle>About</PageTitle>
    <p>
      I really love what I do and consider it a creative passion. It's helped me
      build a great set of professional and personal skills such as having a
      very good eye for detail (pixel perfect), can balance creative designs
      while maintaining good user usability, managing my projects
      accurately/efficiently and I'm also very easy to get along with.
    </p>
    <p>
      I have had the chance to work with many different types of companies and
      teams such as start-ups, agencies and larger enterprises. This has allowed
      me to gain a deep familiarity with the full project life cycle involving
      design, wireframes, POC's and MVP's to delivering international/localised
      websites and applications.
    </p>
    <h2>
      <span>"</span>The very substance of the ambitious is merely the shadow of
      a dream.<span>"</span> - <span>William Shakespear</span>
    </h2>
    <p>
      My experience so far has enabled me to lead front end teams by
      collaborating and managing both the business and development requirements
      whilst ensuring smooth user journeys and interfaces. I also enjoy
      mentoring and developing more junior developers through code reviews, tech
      meetings, attending events, sharing ideas and knowledge sharing.
    </p>
    <p>
      I'm currently working at{' '}
      <a
        href="https://www.which.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Which?
      </a>{' '}
      leading front end development within my squad whilst also helping in other
      projects and BAU tasks. I've also worked with other great companies in the
      past, which you can find <Link to="/portfolio">examples of here</Link>.
    </p>
  </Layout>
);

export default About;
