import { ContentItem } from '../../types';

export const portfolioItemDefaultProps = {
  image: {
    layout: 'fixed',
    images: {
      fallback: {
        src: '/static/0551d06f3e50c98c39147875342b95c4/aaff5/me.png',
        srcSet: '/static/0551d06f3e50c98c39147875342b95c4/aaff5/me.png 209w',
        sizes: '100vw',
      },
      sources: [
        {
          srcSet: '/static/0551d06f3e50c98c39147875342b95c4/8356d/me.webp 209w',
          type: 'image/webp',
          sizes: '100vw',
        },
      ],
    },
    width: 1,
    height: 1.076555023923445,
  },
  name: 'Michael Whittet',
  url: 'https://www.michaelwhittet.co.uk',
};

export const contentDefaultProps: ContentItem = {
  image: {
    layout: 'fixed',
    images: {
      fallback: {
        src: '/static/0551d06f3e50c98c39147875342b95c4/aaff5/me.png',
        srcSet: '/static/0551d06f3e50c98c39147875342b95c4/aaff5/me.png 209w',
        sizes: '100vw',
      },
      sources: [
        {
          srcSet: '/static/0551d06f3e50c98c39147875342b95c4/8356d/me.webp 209w',
          type: 'image/webp',
          sizes: '100vw',
        },
      ],
    },
    width: 1,
    height: 1.076555023923445,
  },
  name: 'Michael Whittet',
};
