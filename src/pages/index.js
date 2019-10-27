import React from "react"

import Container from "../components/Container"
import GreetingSection from "../sections/greeting"
import IntroductionSection from "../sections/introduction"
import FooterSection from "../sections/footer"
import SamplesSection from "../sections/samples"

function IndexPage() {
  /**
   * There is an element within the IntroductionSection that is meant to extend beyond the end of the section.
   * to accomplish this it is assigned an absolute position, however this caused it to overlap with the following sections.
   * this spacer creates an invisible element to prevent overlapping. Within the IntroductionSection the spacer's height will
   * be adjusted when the window width changes.
   */
  const [spacerHeight, setSpacerHeight] = React.useState(0)

  return (
    <Container title={"Home"}>
      <GreetingSection />
      <IntroductionSection setSpacerHeight={setSpacerHeight} />
      <div style={{ backgroundColor: "transparent", height: spacerHeight }} />
      <SamplesSection />
      <FooterSection />
    </Container>
  )
}

export default IndexPage
