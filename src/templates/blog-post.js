import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        size
        availability
        image
      }
    }
  }
`

export default function BlogPost({ data }) {
  const { title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Wrapper>
        <h1>{title}</h1>
      </Wrapper>
    </Layout>
  )
}
