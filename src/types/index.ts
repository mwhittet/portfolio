import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface LinkBox {
  image: IGatsbyImageData;
  name: string;
  url: string;
}

export interface ContentItem {
  image: IGatsbyImageData;
  name: string;
}
