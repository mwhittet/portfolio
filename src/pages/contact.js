import React from 'react';
import { PageTitle } from '../styles/shared';

import Form from '../components/Form';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY;

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <PageTitle>Contact</PageTitle>
    <figure>
      <blockquote>Creativity is contagious. Pass it on.</blockquote>
      <figcaption> — Albert Einstein</figcaption>
    </figure>
    <p>
      If you wish to contact me about a freelance project or just fancy a chat,
      please feel free to fill out the contact form below or reach out to me via{' '}
      <a
        href="https://www.linkedin.com/in/mike-w-b8756168/"
        rel="noopener noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
      .
    </p>
    <Form recaptcha={RECAPTCHA_KEY} />
  </Layout>
);

export default Contact;
