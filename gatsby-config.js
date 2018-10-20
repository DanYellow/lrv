module.exports = {
  siteMetadata: {
    title: 'La Rose Veloutée',
  },
  pathPrefix: 'lrv2',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'lrv-source-gallery',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'LRVProducts',
        // This is field under which it's accessible
        fieldName: 'lrvproducts',
        // Url to query from
        url: 'http://127.0.0.1:8000/api/graphql',
        refetchInterval: 60,
      },
    },
  ],
};
