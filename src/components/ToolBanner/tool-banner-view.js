import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJava,
  faAndroid,
  faPython,
  faAngular,
  faReact,
  faNodeJs,
  faAws,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons"

import "./tool-banner-styles.scss"

function ToolBanner() {
  const tabletMaxWidth = 1024
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
  const iconSize = windowWidth <= tabletMaxWidth ? "2x" : "3x"
  const icons = [
    faJava,
    faGitAlt,
    faAndroid,
    faPython,
    faAngular,
    faReact,
    faNodeJs,
    faAws,
  ]
  return (
    <div className="tool-banner">
      {icons.map((icon, index) => (
        <span className="icon" key={index}>
          <FontAwesomeIcon icon={icon} size={iconSize} />
        </span>
      ))}
    </div>
  )
}

export default ToolBanner
