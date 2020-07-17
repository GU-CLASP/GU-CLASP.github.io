/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-copy-linked-files`
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `MarkdownRemark`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
