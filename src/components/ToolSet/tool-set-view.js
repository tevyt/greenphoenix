import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./tool-set-styles.scss"

function ToolSet({ description, icon, name, tools }) {
  return (
    <div className="tool-set">
      <FontAwesomeIcon icon={icon} size="4x" className="tool-set-icon" />
      <div className="tool-set-name">{name}</div>
      <p className="tool-set-description">{description}</p>
      <div className="tool-set-tools">
        <span>Favourite Tools:</span>
        <ul className="tool-set-tools-list">
          {tools.map((toolName, index) => (
            <li key={index} className="tool-set-tools-list-item">
              {toolName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToolSet
