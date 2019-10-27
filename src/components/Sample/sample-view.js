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
  return (
    <div className="sample-list-item">
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
      <div className="sample-list-item-thumb">
        <img src={thumbnailUrl} alt={description} />
      </div>
    </div>
  )
}

export default Sample
