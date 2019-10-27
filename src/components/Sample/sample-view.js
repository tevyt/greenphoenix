import React from "react"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./sample-styles.scss"

function Sample({
  name,
  thumbnailUrl,
  description,
  liveDemoUrl,
  sourceCodeUrl,
}) {
  const [detailsShown, setDetailsShown] = React.useState(false)
  const hideDetails = () => {
    setDetailsShown(false)
  }
  const showDetails = () => {
    setDetailsShown(true)
  }
  const content = () => {
    if (detailsShown) {
      return (
        <div className="sample-list-item-details">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="sample-list-item-details-links">
            <a className="button rounded">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Source Code</span>
            </a>
            <a className="button rounded">
              <span className="icon">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      )
    } else {
      return (
        <div className="sample-list-item-thumb">
          <img src={thumbnailUrl} alt={description} />
        </div>
      )
    }
  }
  return (
    <div
      className="sample-list-item"
      onMouseEnter={showDetails}
      onMouseLeave={hideDetails}
    >
      {content()}
    </div>
  )
}

export default Sample
