import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

import "../sass/main.scss"
import LayoutStyles from "./layout.module.scss"

export default function Layout(props) {
  return (
    <div className={LayoutStyles.page}>
      <div className={LayoutStyles.container}>
        <Navigation></Navigation>
        <div className={LayoutStyles.content}>{props.children}</div>
      </div>
      <Footer></Footer>
    </div>
  )
}
