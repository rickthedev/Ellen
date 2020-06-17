import React from "react"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import About from "../components/about"

export default function IndexPage(props) {
  return (
    <Layout isOnIndex={true}>
      <Header></Header>
      <Wrapper>
        {/* <h1>Over Mij</h1> */}
        <About></About>
      </Wrapper>
    </Layout>
  )
}
