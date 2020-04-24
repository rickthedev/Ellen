import React from "react"

import ContactCardStyles from "./contact-card.module.scss"

export default function ContactCard() {
  return (
    <div className={ContactCardStyles.contactCard}>
      <div className={ContactCardStyles.contactMessage}>
        <h3>Get in touch</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          alias reprehenderit, facilis debitis voluptatem sapiente! Excepturi,
          voluptate repellat assumenda tenetur eos labore rem ipsam suscipit
          eius perferendis temporibus iure debitis.
        </p>
      </div>
      <div className={ContactCardStyles.contactInfo}>
        <div className={ContactCardStyles.contactContainer}>
          <div>
            <img src="/img/icons8-important-mail-50.png" alt="mail" />
            <p>example@email.com</p>
          </div>
          <div>
            <img src="/img/icons8-ringing-phone-50.png" alt="phone" />
            <p>06 12 34 56 78</p>
          </div>
          <div>
            <img src="/img/icons8-twitter-squared-50.png" alt="twitter" />
            <p>@tweethandle</p>
          </div>
        </div>
      </div>
    </div>
  )
}
