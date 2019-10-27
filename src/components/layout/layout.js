import React from "react"
import { useStaticQuery, Link, graphql  } from "gatsby"
import layoutStyles from "./layout.module.css"

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
  </div>
)
}