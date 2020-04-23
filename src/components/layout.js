import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

import "../sass/main.scss"
import LayoutStyles from "./layout.module.scss"

export default function Layout(props) {
  return (
    <div>
      <Navigation></Navigation>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
