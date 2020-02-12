import Project from './Project';
import { FluidObject } from '../../types';

export interface Props {
  project: {
    name: string;
    url: string;
    image: {
      childImageSharp: {
        fluid: FluidObject | Array<FluidObject> | undefined;
      };
    };
  };
}

export default Project;
