import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../components/card"

export default function GalleryPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
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
    <Layout>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        return (
          <Card
            key={index}
            availability={edge.node.frontmatter.availability}
            size={edge.node.frontmatter.size}
            price={edge.node.frontmatter.price}
            image={edge.node.frontmatter.image}
          ></Card>
        )
      })}
    </Layout>
  )
}
