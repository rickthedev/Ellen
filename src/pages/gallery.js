import React from "react"
import Layout from "../components/layout"
import CardGrid from "../components/card-grid"
import Wrapper from "../components/wrapper"

// import GalleryStyles from "./gallery.module.scss"

export default function GalleryPage() {
  return (
    // <div className={GalleryStyles.gallery}>
    <Layout>
      <Wrapper>
        <h1>Gallerij</h1>
        <CardGrid></CardGrid>
      </Wrapper>
    </Layout>
    // </div>
  )
}
