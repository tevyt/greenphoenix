import React from "react"

import "./introduction-styles.scss"
import ToolSet from "../../components/ToolSet"
import { faJava, faReact, faAws } from "@fortawesome/free-brands-svg-icons"

function Introduction() {
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
      <div className="introduction-skills">
        <ToolSet
          description="I can do some things, can you do some things?"
          icon={faJava}
          tools={["React", "React", "React"]}
          name="Server-side Development"
        />
        <ToolSet tools={["React", "React", "React"]} icon={faReact} />
        <ToolSet tools={["React", "React", "React"]} icon={faAws} />
      </div>
    </section>
  )
}

export default Introduction
