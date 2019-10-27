const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Lauren Chilcote`,
  },
  plugins: [
    {
        resolve: "gatsby-source-contentful",
        options: {
            spaceId,
            accessToken,
            downloadLocal: true,
        }
    },
    {
        resolve: `gatsby-plugin-typography`,
        options: {
            pathToConfigModule: `src/utils/typography`,
        },
    }
  ]
};