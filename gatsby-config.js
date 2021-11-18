module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'nyvp',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/Images/nyvp-logo.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nld5aq0leinr`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'Rc8kvA9ZBka2qJQ0rQwEgvMfLfXzrK1rfbn7VOteGKk',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/Images',
      },
      __key: 'images',
    },
  ],
};
