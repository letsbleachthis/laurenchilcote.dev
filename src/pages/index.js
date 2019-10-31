import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"

import storiesHero from "../images/instagram-stories/stories.png"

export default () => (
<Layout>
    <Header headerText="Hi! I’m Lauren, a Product Designer &amp; Front-End Developer."/>
    <p>I craft thoughtful solutions to user problems and work cross-functionally to drive products from ideation through implementation.</p>

    <Link to="/about">The nitty gritty &#10230;</Link>

    <div style={{margin: "3rem auto", display: "flex", flexDirection: "column", alignItems: "center center", textAlign: "center"}}>
        <h2>Plan, preview, and schedule Instagram Stories with Buffer Publish.</h2>
        <p>Product Design, UX Research</p>
        <img src={storiesHero} alt="Plan, preview, and schedule Instagram Stories with Buffer Publish." />
        <button value="More about Instagram Stories">More about Instagram Stories</button>
    </div>
</Layout>
)