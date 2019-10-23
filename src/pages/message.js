import React from "react"
import HomeLink from "../components/HomeLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUndo } from "@fortawesome/free-solid-svg-icons"

import "./message.scss"
import Container from "../components/Container"
import sendEmail from "../services/sendEmail"

function Message() {
  const [name, setName] = React.useState("")
  const [emailAddress, setEmailAddress] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleNameInput = e => setName(e.target.value)
  const handleEmailAddressInput = e => setEmailAddress(e.target.value)
  const handleMessageInput = e => setMessage(e.target.value)

  const resetForm = () => {
    setName("")
    setEmailAddress("")
    setMessage("")
  }

  const [alertType, setAlertType] = React.useState(null)
  const clearAlert = () => setAlertType(null)

  const [sending, setSending] = React.useState(false)

  const handleFormSubmit = async e => {
    e.preventDefault()
    try {
      setSending(true)
      resetForm()
      await sendEmail(name, emailAddress, message)
      setSending(false)
      setAlertType("success")
    } catch (e) {
      console.error(e)
      setSending(false)
      setAlertType("failure")
    }
  }

  return (
    <Container title="Leave a message">
      <div className="message-page">
        <div className="message-page-header">
          <HomeLink />
          <div
            className="tooltip is-tooltip-bottom"
            data-tooltip="reset"
            onClick={resetForm}
          >
            <FontAwesomeIcon
              icon={faUndo}
              className="tooltip"
              data-tooltip="Test"
            />
          </div>
        </div>
        {sending && (
          <progress
            className="progress is-small message-page-progress"
            max="100"
          >
            15%
          </progress>
        )}
        <h1 className="message-page-greeting">
          Thanks for reaching out. You can leave a message with the form below.
        </h1>
        {alertType === "success" && (
          <div className="notification message-page-notification message-page-notification-success">
            <button class="delete" onClick={clearAlert}></button>I got your
            message. I'll get back to you as soon as possible.
          </div>
        )}
        {alertType === "failure" && (
          <div className="notification message-page-notification is-danger">
            <button class="delete" onClick={clearAlert}></button>
            Sorry, your message wasn't sent. If the problem persists you can{" "}
            <a href="mailto:travis.a.smith.ja@gmail.com">email me.</a>
          </div>
        )}
        <form className="message-page-form" onSubmit={handleFormSubmit}>
          <div className="message-page-form-contact">
            <div>
              <label className="label">Name</label>
              <input
                className="input is-large"
                required
                value={name}
                onChange={handleNameInput}
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                className="input is-large"
                required
                type="email"
                value={emailAddress}
                onChange={handleEmailAddressInput}
              />
            </div>
          </div>
          <div className="message-page-form-message">
            <label className="label">Message</label>
            <textarea
              className="textarea"
              rows="10"
              required
              value={message}
              onChange={handleMessageInput}
            ></textarea>
          </div>
          <button
            className="message-page-form-submit button is-rounded is-large button-link"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  )
}

export default Message
