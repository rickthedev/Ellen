import React from "react"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import About from "../components/about"
import CardGrid from "../components/card-grid"
import { useStaticQuery, graphql } from "gatsby"

export default function IndexPage(props) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___title, order: ASC }
        filter: { frontmatter: { spotlight: { eq: "Yes" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              availability
              title
              size
              price
              image
              type
            }
          }
        }
      }
    }
  `)

  return (
    <Layout isOnIndex={true}>
      <Header></Header>
      <Wrapper>
        {/* <h1>Over Mij</h1> */}
        <About></About>
        <h1>Spotlight</h1>
        <CardGrid data={data}></CardGrid>
      </Wrapper>
    </Layout>
  )
}
