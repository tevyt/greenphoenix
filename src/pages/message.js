import React from "react"
import HomeLink from "../components/HomeLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUndo } from "@fortawesome/free-solid-svg-icons"

import "./message.scss"
import Container from "../components/Container"

function Message() {
  return (
    <Container title="Leave a message">
      <div className="message-page">
        <div className="message-page-header">
          <HomeLink />
          <div className="tooltip is-tooltip-bottom" data-tooltip="reset">
            <FontAwesomeIcon
              icon={faUndo}
              className="tooltip"
              data-tooltip="Test"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Message
