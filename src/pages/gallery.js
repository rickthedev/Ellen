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
              title
            }
            html
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        return <Card key={index} title={edge.node.frontmatter.title}></Card>
      })}
    </Layout>
  )
}
