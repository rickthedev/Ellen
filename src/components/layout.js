import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import Div100vh from "react-div-100vh"

import "../sass/main.scss"
import LayoutStyles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <Div100vh style={{ minHeight: "100rvh" }} className={LayoutStyles.page}>
      <div className={LayoutStyles.container}>
        <Navigation></Navigation>
        {children}
      </div>
      <Footer></Footer>
    </Div100vh>
  )
}
