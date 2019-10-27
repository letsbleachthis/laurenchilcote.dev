import React from "react"
import { Link } from "gatsby"
import "../utils/App.css"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"

export default () => (
<Layout>
    <Header headerText="Hi! I’m Lauren, a Product Designer &amp; Front-End Developer."/>
    <p>I craft thoughtful solutions to user problems and work cross-functionally to drive products from ideation through implementation.</p>
    {/* <img src="https://source.unsplash.com/random/400x200" alt=""/> */}
    <Link to="/about">The nitty gritty &#10230;</Link>
</Layout>
)