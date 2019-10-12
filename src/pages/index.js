import React from "react"

import GreetingSection from "../sections/greeting"
import Container from "../components/container"

function IndexPage() {
  return (
    <Container title={"Home"}>
      <GreetingSection />
    </Container>
  )
}

export default IndexPage
