import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

export default function Layout(props) {
  return (
    <div>
      <Navigation></Navigation>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
