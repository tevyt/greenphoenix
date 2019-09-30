import React from "react"

import GreetingSection from "../sections/greeting"
import SEO from "../components/seo"

function IndexPage() {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <GreetingSection />
    </React.Fragment>
  )
}

export default IndexPage
