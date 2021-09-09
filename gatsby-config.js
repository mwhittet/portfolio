require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Michael Whittet`,
    description: `Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex`,
    siteUrl: `https://www.michaelwhittet.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Marmelad',
              fontDisplay: 'optional',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Whittet's Portfolio`,
        short_name: `MW's Portfolio`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.michaelwhittet.co.uk/',
        sitemap: 'https://www.michaelwhittet.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: '/static' }],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
