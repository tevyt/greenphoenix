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
        <h1 className="message-page-greeting">
          Thanks for reaching out. You can leave a message with the form below.
        </h1>
        <form className="message-page-form">
          <div className="message-page-form-contact">
            <div>
              <label className="label">Name</label>
              <input className="input is-large" required />
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input is-large" required type="email" />
            </div>
          </div>
          <div className="message-page-form-message">
            <label className="label">Message</label>
            <textarea className="textarea" rows="10" required></textarea>
          </div>
          <button className="message-page-form-submit button is-rounded is-large">
            Submit
          </button>
        </form>
      </div>
    </Container>
  )
}

export default Message
