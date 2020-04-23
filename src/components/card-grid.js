import React from "react"
import Card from "./card"

import CardGridStyles from "./card-grid.module.scss"

export default function CardGrid({ data }) {
  return (
    <div className={CardGridStyles.grid}>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        return (
          <Card
            key={index}
            slug={edge.node.fields.slug}
            availability={edge.node.frontmatter.availability}
            title={edge.node.frontmatter.title}
            size={edge.node.frontmatter.size}
            price={edge.node.frontmatter.price}
            image={edge.node.frontmatter.image}
          ></Card>
        )
      })}
    </div>
  )
}
