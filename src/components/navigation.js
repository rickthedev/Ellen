import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  )
}
