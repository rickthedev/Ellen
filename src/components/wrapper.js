import React from "react"

import WrapperStyles from "./wrapper.module.scss"

export default function Wrapper(props) {
  return <div className={WrapperStyles.wrapper}>{props.children}</div>
}
