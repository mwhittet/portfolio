import React from 'react';
import { PageTitle } from '../styles/shared';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Success = () => (
  <Layout>
    <PageTitle>Message recieved!</PageTitle>
    <p>
      Thank you for taking the time to contact me and I will be in touch
      shortly!
    </p>
  </Layout>
);

export default Success;

export const Head = () => <Seo title="Michael Whittet | Success" />;
