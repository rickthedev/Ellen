import React from "react"

export default function Card({ image, availability, size, price }) {
  return (
    <div>
      <img src={image} alt={availability} />
      <p>{availability}</p>
      <p>{size}</p>
      <p>{price}</p>
    </div>
  )
}
