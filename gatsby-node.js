const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allPortfolioJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (results.error) {
    console.log('Something went wrong!');
    return;
  }

  results.data.allPortfolioJson.edges.forEach(edge => {
    const portfolio = edge.node;

    createPage({
      path: `/portfolio/${portfolio.slug}`,
      component: require.resolve('./src/templates/portfolio-graphql.js'),
      context: {
        slug: portfolio.slug,
      },
    });
  });
};
