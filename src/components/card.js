import React from "react"

import CardStyles from "./card.module.scss"

export default function Card({ image, availability, size, price }) {
  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.imgContainer}>
        <img src={image} alt={availability} />
      </div>
      <div className={CardStyles.contentContainer}>
        <p>{availability}</p>
        <p>{size}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}
