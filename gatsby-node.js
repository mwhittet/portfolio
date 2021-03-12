const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allPortfolioJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.allPortfolioJson.edges.forEach(({ node }) => {
      createPage({
        path: `/portfolio/${node.slug}`,
        component: path.resolve('./src/templates/portfolio-graphql.js'),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
