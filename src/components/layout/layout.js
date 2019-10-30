import React from "react"
import { useStaticQuery, Link, graphql  } from "gatsby"

import layoutStyles from "./layout.module.css"
import "../../utils/App.css"
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
        <p><strong>Lauren Chilcote</strong></p>
        <p>Curious by nature and keen on collaboration, I believe there is a multitude of success to be found at the intersection between business goals and user problems when individuals band together to work as a team.</p>
        <p className='finePrint'>Currently working with the fine folks at Buffer to help innovative companies grow their brands online.</p>
        {/* <p>When not in front of my computer, you can find me advocating for the existence of the cake flight, powerlifting with The Armory barbell club, or staring at/petting/fawning over someone’s dog.</p> */}
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
          <li><Link to="/about/">More about me <i className="fa fa-long-arrow-right"></i></Link></li>
        </ul>
      </div>
      <img src={portrait} alt="A portrait of Lauren Chilcote" className={layoutStyles.portrait}/>
    </footer>
  </div>
)
}

