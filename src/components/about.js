import React from "react"

import AboutStyles from "./about.module.scss"
import { Link } from "gatsby"

export default function About() {
  return (
    <div className={AboutStyles.about}>
      <div className={AboutStyles.container}>
        <div className={AboutStyles.portrait}></div>

        <div className={AboutStyles.info}>
          <h2>Test</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, corrupti.
          </p>
          <Link className={AboutStyles.button} to="/contact">
            Kom in contact!
          </Link>
        </div>
      </div>
    </div>
  )
}
