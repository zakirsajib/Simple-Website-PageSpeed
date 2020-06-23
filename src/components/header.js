import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.png"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"Zakir Sajib"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>
                <div>
                    <label for="show-menu" className="show-menu">Menu</label>
                    <input type="checkbox" id="show-menu" role="button"/>
                    <div className={"get-started"} id="menu">
                        <Link to="/about" className={"about"} title={"About me"}>About</Link>
                        <Link to="/contact" className={"contact"} title={"Contact me"}>Contact</Link>
                        <a
                            href="https://zsresume.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
