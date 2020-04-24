import React from "react"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import ContactCard from "../components/contact-card"

export default function ContactPage() {
  return (
    <Layout>
      <Wrapper>
        <h1>Contact</h1>
        <ContactCard></ContactCard>
      </Wrapper>
    </Layout>
  )
}
