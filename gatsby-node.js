'use strict'

const webpack = require('webpack')
// const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  switch (stage) {
    case 'build-javascript':
      break
  }
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
        Component: ['react', 'Component'],
        Fragment: ['react', 'Fragment'],
        Styled: 'styled-components',
        PropTypes: ['prop-types'],
      }),
      new webpack.DefinePlugin({
        __DEV__: true,
      }),
    ],
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// exports.onCreatePage = async ({ page, boundActionCreators }) => {
//     const { createPage, createLayout } = boundActionCreators;

//     return new Promise((resolve, reject) => {
//         let pageTitle = 'Services';
//         if (page.path.match(/^\/contact/)) {
//             pageTitle = 'Contact';
//         }
//         console.log('e', pageTitle)
//         createLayout({
//             component: path.resolve(`./src/layouts/index.jsx`),
//             context: {
//                 pageTitle
//             }
//           })

//       resolve();
//     });
//   };

//   export.createLayout
