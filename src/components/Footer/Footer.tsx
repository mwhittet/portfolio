import { FooterWrapper } from './styled';
import { Social } from '../../components';

const Footer = (): React.ReactElement => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper data-testid="footer">
      <Social />
      <p>
        Proudly built with Gatsby using GraphQL, TypeScript & styled-components,
        hosted via Netlify
      </p>
      <p>Copyright &copy; {year}, Michael Whittet</p>
    </FooterWrapper>
  );
};

export default Footer;
