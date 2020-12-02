module.exports = {
  siteMetadata: {
    title: `Control System Studio`,
    description: `Control System Studio is an Eclipse-based collection of tools to monitor and operate large scale control systems, such as the ones in the accelerator community.`,
    author: ``,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#302a72`,
        theme_color: `#302a72`,
        display: `minimal-ui`,
        icon: `src/images/css_blue@32.png`,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
