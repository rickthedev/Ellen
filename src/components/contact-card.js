import React from "react"

import ContactCardStyles from "./contact-card.module.scss"

export default function ContactCard() {
  return (
    <div className={ContactCardStyles.contactCard}>
      <div className={ContactCardStyles.contactInfo}></div>
      <div className={ContactCardStyles.contactMessage}></div>
    </div>
  )
}
