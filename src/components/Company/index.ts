import Company from './Company';
import { FluidObject } from '../../types';

export interface Props {
  companyInfo: {
    id: number;
    title: string;
    href: string;
    image: {
      childImageSharp: {
        fluid: FluidObject | Array<FluidObject> | undefined;
      };
    };
  };
}

export default Company;
