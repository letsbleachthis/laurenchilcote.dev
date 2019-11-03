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
    <header className={layoutStyles.mainNav}>
      <div className={layoutStyles.mainNavWrapper}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 className={layoutStyles.siteTitle}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul className={layoutStyles.mainNavLinks}>
          <ListLink to="/">Work</ListLink>
          <ListLink to="/">Writing</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </div>
    </header>
    {children}
    <footer className={layoutStyles.footer}>
    <div className={layoutStyles.footerWrapper}>
      <div className={layoutStyles.copyContainer}>
            <h4>Lauren Chilcote</h4>
            <p>Digital Product Designer, powerlifter, and doggo enthusiast. Currently working with the fine folks at Buffer to help innovative companies grow their brands online.</p>
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
              <li><Link to="/about/">Find out more <i className="fa fa-long-arrow-right"></i></Link></li>
            </ul>
          </div>
          <div className={layoutStyles.portraitContainer}>
            <img src={portrait} alt="A portrait of Lauren Chilcote" className={layoutStyles.portrait}/>
          </div>
        </div>
        <div className={layoutStyles.copyrightContainer}>
          <p>Copyright 2019</p>
        </div>
    </footer>
  </div>
)
}

