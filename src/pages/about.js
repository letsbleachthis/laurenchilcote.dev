import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"

export default ({ data }) => (
  <Layout>
    <div className="wrapper">
      {/* <Header headerText={"About " + data.site.siteMetadata.title}/> */}
      <Header headerText={"Hi! I’m Lauren, a Product Designer & Front-End Developer."}/>
      <p>I’m a multi-disciplinary designer/developer who’s most excited when bringing ideas to life. Curious by nature and keen on collaboration, I believe success lies at the intersection between business goals and user problems, when individuals band together to tackle tough problems.</p>

      <p>My path to design and development has been non-traditional, moving through fashion, textile, and print design with intensive stints studying front-end development, UX Design, and JavaScript. I enjoy tackling new disciplines and pushing myself to think in new ways, believing that cross-boundary skill sets make me a better problem solver and more valuable team member.</p>

      <p>When not in front of my computer, you can find me advocating for the existence of the cake flight, powerlifting with The Armory barbell club, or staring at/petting/fawning over someone’s dog.</p>
    </div>
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