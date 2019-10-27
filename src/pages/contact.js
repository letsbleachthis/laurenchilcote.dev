import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"

export default () => (
  <Layout>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send me a message!</p>
  </Layout>
)

