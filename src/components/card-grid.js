import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"

import CardGridStyles from "./card-grid.module.scss"

export default function CardGrid() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              availability
              size
              price
              image
            }
          }
        }
      }
    }
  `)
  return (
    <div className={CardGridStyles.grid}>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        return (
          <Card
            key={index}
            slug={edge.node.fields.slug}
            availability={edge.node.frontmatter.availability}
            size={edge.node.frontmatter.size}
            price={edge.node.frontmatter.price}
            image={edge.node.frontmatter.image}
          ></Card>
        )
      })}
    </div>
  )
}
