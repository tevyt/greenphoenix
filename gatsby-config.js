module.exports = {
  siteMetadata: {
    title: `Green Phoenix | Your Digital Rebirth`,
    description: `Fullstack Software Developer experienced in digital transformation using agile techniques and cloud native tools.`,
    author: `@tevyt`,
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
        background_color: `#18624a`,
        theme_color: `#18624a`,
        display: `minimal-ui`,
        icon: `src/images/symbol.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Jura"],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_PORTFOLIO_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_PORTFOLIO_CONTENTFUL_ACCESS_TOKEN,
        host: process.env.GATSBY_PORTFOLIO_CONTENTFUL_HOST
      },
    },
  ],
}
