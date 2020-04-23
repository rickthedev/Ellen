import React from "react"
import Layout from "../components/layout"
import CardGrid from "../components/card-grid"
import Wrapper from "../components/wrapper"

export default function GalleryPage() {
  return (
    <Layout>
      <Wrapper>
        <h1>Gallery</h1>
        <CardGrid type="schilderij"></CardGrid>
      </Wrapper>
    </Layout>
  )
}
