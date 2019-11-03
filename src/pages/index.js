import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"

export default () => (
<Layout>
    <div className="section sectionPrimary">
        <div className="wrapper">
            <Header headerText="Hi! I’m Lauren, a Product Designer &amp; Front-End Developer."/>
            <p>I craft thoughtful solutions to user problems and work cross-functionally to drive products from ideation through implementation. <Link to="/about">The nitty gritty &#10230;</Link></p>
        </div>
    </div>
</Layout>
)