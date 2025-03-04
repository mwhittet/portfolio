import { Form, Layout, Seo } from '../components';

const Contact = () => (
  <Layout pageTitle="Contact">
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

    <Form />

    <figure className="no-margin">
      <blockquote>Creativity is contagious. Pass it on.</blockquote>
      <figcaption> — Albert Einstein</figcaption>
    </figure>
  </Layout>
);

export default Contact;

export const Head = () => <Seo title="Michael Whittet | Contact" />;
