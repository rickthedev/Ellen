import React from "react"

import HeaderStyles from "./header.module.scss"

export default function Header() {
  return (
    <div className={HeaderStyles.header}>
      <img src="/img/Logo.png" alt=""/>
    </div>
  )
}
