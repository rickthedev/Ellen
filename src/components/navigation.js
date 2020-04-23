import React from "react"
import { Link } from "gatsby"

import NavigationStyles from "./navigation.module.scss"
import Wrapper from "./wrapper"

export default function Navigation() {
  return (
    <nav className={NavigationStyles.navbar}>
      <Wrapper>
        <ul>
          <li>
            <Link className={NavigationStyles.logo} to="/">
              LOGO
            </Link>
          </li>
          <li>
            <Link
              className={NavigationStyles.link}
              activeClassName={NavigationStyles.linkActive}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={NavigationStyles.link}
              activeClassName={NavigationStyles.linkActive}
              to="/about"
            >
              About
            </Link>
          </li>
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
      </Wrapper>
    </nav>
  )
}
