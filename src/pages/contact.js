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
    <p>
      If you wish to contact me about a freelance project or just fancy a chat,
      feel free to fill out the contact form below or reach out via one of the
      social hubs found in the footer.
    </p>
    <Form recaptcha={RECAPTCHA_KEY} />
    <h2>
      <span>"</span>Creativity is contagious. Pass it on.<span>"</span> -{' '}
      <span>Albert Einstein</span>
    </h2>
  </Layout>
);

export default Contact;
