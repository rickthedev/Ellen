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
      }
      html
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
          <div
            className={BlogPostStyles.description}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </div>
      </Wrapper>
    </Layout>
  )
}
