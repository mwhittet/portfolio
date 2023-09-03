import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Success = () => (
  <Layout pageTitle='Message received!'>
    <p>
      Thank you for taking the time to contact me and I will be in touch
      shortly!
    </p>
  </Layout>
);

export default Success;

export const Head = () => <Seo title="Michael Whittet | Success" />;
