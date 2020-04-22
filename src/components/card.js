import React from "react"

export default function Card({ title }) {
  return (
    <div>
      <img src={image} alt={availability} />
      <p>{availability}</p>
      <p>{size}</p>
      <p>{price}</p>
    </div>
  )
}
