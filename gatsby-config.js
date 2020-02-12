module.exports = {
  siteMetadata: {
    title: `Michael Whittet`,
    description: `Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex.`,
    author: `@michaelwhittet`,
    siteUrl: `https://www.michaelwhittet.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Whittet Portfolio`,
        short_name: `MW Portfolio`,
        start_url: `https://www.michaelwhittet.co.uk/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Marmelad'],
        },
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
