import React from "react"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Header from "../components/header"

export default function IndexPage(props) {
  return (
    <Layout isOnIndex={true}>
      <Header></Header>
      <Wrapper>
        <h1>About</h1>
      </Wrapper>
    </Layout>
  )
}
