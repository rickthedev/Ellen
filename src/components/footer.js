import React from "react"
import Wrapper from './wrapper'

import FooterStyles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <Wrapper>
        <p>Website made by Rick Koopman, © 2020</p>
      </Wrapper>
    </footer>
  )
}
