import React from "react"

import CardStyles from "./card.module.scss"
import { Link } from "gatsby"

export default function Card({ slug, image, availability, size, price }) {
  return (
    <Link to={`/${slug}`}>
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
    </Link>
  )
}
