'use strict'

const webpack = require('webpack')
const path = require('path')

exports.modifyWebpackConfig = ({ config }) => {
    config.plugin("webpack-provide", webpack.ProvidePlugin, [{
        React: 'react',
        Component: ['react', 'Component'],
        Fragment: ['react', 'Fragment'],
    }]);

    config.plugin("webpack-define", webpack.DefinePlugin, [{
        __DEV__: true
    }]);

    return config;
}

//   return config.merge({
//     plugins: [
//       new webpack.ProvidePlugin({
        // React: 'react',
        // Component: ['react', 'Component'],
        // Fragment: ['react', 'Fragment'],
//       }),
//     ],
//   })

// exports.modifyBabelrc = ({ config }) => {
//   return config.merge({
//     plugins: [
//       'babel-plugin-styled-components',
//       [
//         'module-resolver',
//         {
//           root: ['./src'],
//         },
//       ],
//     ],
//   })
// }

// exports.createPages = ({ graphql, boundActionCreators }) => {
//     const { createLayout, createPage } = boundActionCreators
//     return new Promise((resolve, reject) => {
//       const MainLayout = path.resolve(`./src/layouts/index.jsx`)
  
//     })
//   }
  


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage, createLayout } = boundActionCreators;
  
    return new Promise((resolve, reject) => {
        let pageTitle = 'Services';
        if (page.path.match(/^\/contact/)) {
            pageTitle = 'Contact';
        }
        console.log('e', pageTitle)
        createLayout({
            component: path.resolve(`./src/layouts/index.jsx`),
            context: {
                pageTitle
            }
          })
  
      resolve();
    });
  };

//   export.createLayout