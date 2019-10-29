import React from "react"
import { useStaticQuery, Link, graphql  } from "gatsby"
import layoutStyles from "./layout.module.css"
import portrait from "../../images/lauren-chilcote.jpeg"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
  <div className={layoutStyles.layoutContainer}>
    <header className={layoutStyles.pageTitle}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 className={layoutStyles.siteTitle}>{data.site.siteMetadata.title}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Design &amp; Dev</ListLink>
        <ListLink to="/">Articles</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
    <footer className={layoutStyles.footer}>
      <div className={layoutStyles.copyContainer}>
        <p>Lauren Chilcote</p>
        <p>Curious by nature and keen on collaboration, I believe there is a multitude of success to be found at the intersection between business goals and user problems when individuals band together to work as a team. I’m currently working with the fine folks at Buffer to design and build software that helps innovative companies grow their brands online.</p>
        <p>When not in front of my computer, you can find me advocating for the existence of the cake flight, powerlifting with The Armory barbell club, or staring at/petting/fawning over someone’s dog.</p>
      </div>
      <img src={portrait} alt="A portrait of Lauren Chilcote"/>
    </footer>
  </div>
)
}

