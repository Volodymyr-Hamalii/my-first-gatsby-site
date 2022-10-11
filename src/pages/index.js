import * as React from "react"
import { Link } from "gatsby"
import Layoyt from "../components/layout"

const IndexPage = () => {
  return (
    <main>
      <Layoyt pageTitle="Home page">Welcome to my page!</Layoyt>
    </main>
  )
}

export const Head = () => <title>Home page</title>

export default IndexPage
