require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    description: `Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex`,
    siteUrl: `https://www.michaelwhittet.co.uk`,
    title: `Michael Whittet`,
  },
  plugins: [
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
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#000000`,
        description: `Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        name: `Michael Whittet's Portfolio`,
        short_name: `MW's Portfolio`,
        start_url: `/`,
        theme_color: `#000000`,
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
        policy: [{ userAgent: '*', allow: '/', disallow: '/static' }],
        sitemap: 'https://www.michaelwhittet.co.uk/sitemap.xml',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
