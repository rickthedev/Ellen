import React from "react"
import { Link } from "gatsby"

import NavigationStyles from "./navigation.module.scss"

export default function Navigation() {
  return (
    <nav className={NavigationStyles.navbar}>
      <ul>
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
            to="/gallery"
          >
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  )
}
