import React, { useState } from "react"
import { Link } from "gatsby"

import NavigationStyles from "./navigation.module.scss"
import Wrapper from "./wrapper"

export default function Navigation({ isOnIndex }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleMenu = e => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  let style = {}
  if (isOnIndex) {
    style = { border: "none" }
  }

  return (
    <div className={NavigationStyles.navColor}>
      <Wrapper>
        <nav
          style={style}
          className={`${NavigationStyles.navbar} ${
            isExpanded
              ? NavigationStyles.isExpanded
              : NavigationStyles.isNotExpanded
          }`}
        >
          <div className={NavigationStyles.navTop}>
            <Link
              activeClassName={NavigationStyles.linkActive}
              className={NavigationStyles.logo}
              to="/"
            >
              Home
            </Link>
            <div
              role="button"
              tabIndex={0}
              className={NavigationStyles.hamburger}
              onClick={e => toggleMenu(e)}
              onKeyDown={() => "none"}
            >
              <span></span>
            </div>
          </div>
          <ul>
            {/* <li>
              <Link
                className={NavigationStyles.link}
                activeClassName={NavigationStyles.linkActive}
                to="/about"
              >
                About
              </Link>
            </li> */}
            <li>
              <Link
                className={NavigationStyles.link}
                activeClassName={NavigationStyles.linkActive}
                to="/schilderijen"
              >
                Schilderijen
              </Link>
            </li>
            <li>
              <Link
                className={NavigationStyles.link}
                activeClassName={NavigationStyles.linkActive}
                to="/goudsmit"
              >
                Goudsmit
              </Link>
            </li>
            <li>
              <Link
                className={NavigationStyles.link}
                activeClassName={NavigationStyles.linkActive}
                to="/grafisch"
              >
                Grafisch
              </Link>
            </li>
            <li>
              <Link
                className={NavigationStyles.link}
                activeClassName={NavigationStyles.linkActive}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </div>
  )
}
