import React, { useRef } from "react"

import "./introduction-styles.scss"
import ToolSet from "../../components/ToolSet"
import { faJava, faReact, faAws } from "@fortawesome/free-brands-svg-icons"

import { clientSide, devOps, serverSide } from "./skills.json"
import useWindowWidth from "../../hooks/useWindowWidth"

function Introduction({ setSpacerHeight }) {
  const windowWidth = useWindowWidth()
  const introductionSkills = useRef()
  React.useEffect(() => {
    setSpacerHeight(introductionSkills.current.clientHeight)
  }, [windowWidth, setSpacerHeight])

  return (
    <section className="introduction section">
      <div className="introduction-container">
        <div className="introduction-container-name">
          I'm Travis, a Software Developer.
        </div>
        <p className="introduction-container-summary">
          Over the past 3 years I have had the opportunity to work in a rapidly
          changing environment. During this time, I have cultivated skills that
          are essential for any organization seeking digital transformation.
        </p>
      </div>
      <div className="introduction-skills" ref={introductionSkills}>
        <ToolSet
          description={serverSide.description}
          icon={faJava}
          tools={serverSide.tools}
          name={serverSide.name}
        />
        <ToolSet
          description={clientSide.description}
          name={clientSide.name}
          tools={clientSide.tools}
          icon={faReact}
        />
        <ToolSet
          description={devOps.description}
          tools={devOps.tools}
          icon={faAws}
          name={devOps.name}
        />
      </div>
    </section>
  )
}

export default Introduction
