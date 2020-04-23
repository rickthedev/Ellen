import React from "react"

import CardStyles from "./card.module.scss"
import { Link } from "gatsby"

export default function Card({
  slug,
  image,
  availability,
  size,
  price,
  title,
}) {
  return (
    <Link className={CardStyles.link} to={`/${slug}`}>
      <div className={CardStyles.card}>
        <div className={CardStyles.imgContainer}>
          <img src={image} alt={availability} />
        </div>
        <div className={CardStyles.contentContainer}>
          <p>{title}</p>
          <p>{size}</p>
          <p>{availability}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  )
}
