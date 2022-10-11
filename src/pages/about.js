import * as React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Layoyt from "../components/layout"

const AboutPage = () => {
  return (
    <main>
      <Layoyt pageTitle="About page">About page</Layoyt>
    </main>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
