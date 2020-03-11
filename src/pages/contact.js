import React from 'react';
import { PageTitle } from '../styles/shared';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Form from '../components/Form';
import Social from '../components/Social';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <PageTitle>Contact</PageTitle>
    <p>
      If you wish to contact me about a freelance project or just fancy a chat,
      feel free to fill out the contact form below or reach out via one of the
      social hubs:
    </p>

    <Form />

    <Social alternative />

    <h2>
      <span>"</span>Creativity is contagious. Pass it on.<span>"</span> -{' '}
      <span>Albert Einstein</span>
    </h2>
  </Layout>
);

export default Contact;
