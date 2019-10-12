import React from "react"

import GreetingSection from "../sections/greeting"
import Container from "../components/Container"

function IndexPage() {
  return (
    <Container title={"Home"}>
      <GreetingSection />
    </Container>
  )
}

export default IndexPage
