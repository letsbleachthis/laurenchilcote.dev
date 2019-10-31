const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Lauren Chilcote`,
    description: 'Product Design & Front-End Development Portfolio',
    author: 'Lauren Chilcote',
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
  ]
};