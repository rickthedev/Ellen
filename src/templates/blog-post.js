import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"

import BlogPostStyles from "./blog-post.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        size
        availability
        price
        image
        description
      }
    }
  }
`

export default function BlogPost({ data }) {
  const {
    title,
    image,
    size,
    availability,
    price,
    description,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Wrapper>
        <div className={BlogPostStyles.post}>
          <h1>{title}</h1>
          <img src={image} alt="" />
          <p>{size}</p>
          <p>{availability}</p>
          <p>{price}</p>
          <div className={BlogPostStyles.description}>
            <p>{description}</p>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}
