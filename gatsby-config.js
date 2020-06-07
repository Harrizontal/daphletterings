var dotenv = require("dotenv");
dotenv.config();

const { spaceId, accessToken, snipcart } = process.env;

module.exports = {
  siteMetadata: {
    title: `daphletterings`,
    description: `Handlettered | Modern Calligraphy | Watercoloring`,
    author: `@dapletterings`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `daphnletterings`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/harrizontal.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId:`ui2tup12rgw3`,
        accessToken:`pPdZVIWpmQV1RUwaMsDcohNgWpri_HNumvVbHXqejFE`,
        downloadLocal: true,
      }
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: snipcart,
        autopop: true,
      },
    },
  ],
}
