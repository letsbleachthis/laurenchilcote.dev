import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"

export default ({ data }) => (
  <Layout>
    <Header headerText={"About " + data.site.siteMetadata.title}/>
    <p>Pumps &amp; Pups</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `