/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.png"
import iconTwitter from "../../static/images/icon-twitter.svg"
//import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"


const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"Zakir Sajib"}>
                                        <img alt={"Logo"} src={logo}/>
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    <p>Stay Home | Stay Safe</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Links</h4>
                                    <ul>
                                        <li><Link to="/about" title={"About me"}>About</Link></li>
                                        <li><Link to="/contact" title={"Contact me"}>Contact</Link></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Related</h4>
                                    <ul>
                                        <li><a
                                                href="https://zsresume.netlify.app/"
                                                title={"Resume of Zakir Sajib"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            Resume
                                            </a>
                                        </li>
                                        <li><a
                                                href="https://nirvana.netlify.app/"
                                                title={"Blog Articles related to Web development"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            Blog
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a
                                        href="https://github.com/zakirsajib"
                                        title={"GitHub"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    ><img
                                        alt={"GitHub"}
                                        src={iconGitHub}
                                    />
                                    </a>
                                    <a
                                        href="https://twitter.com/ZakirSajib"
                                        title={"Twitter"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    ><img
                                        alt={"Twitter"}
                                        src={iconTwitter}
                                    />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>License MIT</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
