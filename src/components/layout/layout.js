import React from "react"
import { useStaticQuery, Link, graphql  } from "gatsby"
import "typeface-poppins"
import "typeface-open-sans"

import "../../../node_modules/normalize.css/normalize.css"
import layoutStyles from "./layout.module.css"
import "./layout.css"
import portrait from "../../images/img_lauren_chilcote_crop.jpeg"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} activeClassName={props.activeClassName}>{props.children}</Link>
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
    <header className={layoutStyles.mainNav}>
      <div className={layoutStyles.mainNavWrapper}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 className={layoutStyles.siteTitle}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul className={layoutStyles.mainNavLinks}>
          <ListLink to="/" activeClassName={layoutStyles.active}>Work</ListLink>
          <ListLink to="/writing" activeClassName={layoutStyles.active}>Writing</ListLink>
          <ListLink to="/about/" activeClassName={layoutStyles.active}>About</ListLink>
        </ul>
      </div>
    </header>
    {children}
    <footer className={layoutStyles.footer}>
    <div className={layoutStyles.footerWrapper}>
      
      <div className={layoutStyles.copyContainer}>
        <div className={layoutStyles.portraitContainer}>
          <img src={portrait} alt="A portrait of Lauren Chilcote" className={layoutStyles.portrait}/>
        </div>
        <div className={layoutStyles.footerBio}>
          <h4>Lauren Chilcote</h4>
          <p>Digital Product Designer, powerlifter, and doggo enthusiast. Currently working with the fine folks at Buffer to help innovative companies grow their brands online.</p>
          <p className={layoutStyles.finePrint}>Site handcrafted by Lauren Chilcote &middot; All Rights Reserved 2020</p>
        </div>     
      </div>
      <div>
        <h4>Follow Me</h4>
        <ul className={layoutStyles.socialLinks}>
          <li className={`${layoutStyles.iconContainer} ${layoutStyles.twitter}`}>
            <a className={layoutStyles.socialIcon} href="https://twitter.com/LaurenChilcote" target="_blank">
              <i className="fa fa-lg fa-twitter"></i>
            </a>
          </li>
          <li className={`${layoutStyles.iconContainer} ${layoutStyles.linkedIn}`}>
            <a className={layoutStyles.socialIcon} href="https://www.linkedin.com/in/laurenchilcote/" target="_blank">
              <i className="fa fa-lg fa-linkedin"></i>
            </a>
          </li>
          <li className={`${layoutStyles.iconContainer} ${layoutStyles.gitHub}`}>
            <a className={layoutStyles.socialIcon} href="https://github.com/letsbleachthis" target="_blank">
              <i className="fa fa-lg fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
          
    </div>
    </footer>
  </div>
)
}

