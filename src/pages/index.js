import React from "react"

import Container from "../components/Container"
import GreetingSection from "../sections/greeting"
import IntroductionSection from "../sections/introduction"

function IndexPage() {
  return (
    <Container title={"Home"}>
      <GreetingSection />
      <IntroductionSection />
    </Container>
  )
}

export default IndexPage
