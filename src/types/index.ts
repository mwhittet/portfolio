export interface FluidObject {
  aspectRatio: number;
  base64?: string;
  media?: string;
  sizes: string;
  src: string;
  srcSet: string;
  srcSetWebp?: string;
  srcWebp?: string;
  tracedSVG?: string;
}

export interface LinkBox {
  name: string;
  url: string;
  image: {
    childImageSharp: {
      fluid: FluidObject | Array<FluidObject> | undefined;
    };
  };
}

export interface ContentItem {
  image: {
    childImageSharp: {
      fluid: FluidObject | Array<FluidObject> | undefined;
    };
  };
  name: string;
}
