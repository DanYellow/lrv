'use strict'

const webpack = require('webpack')

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
