import React from "react"
import { Link } from "gatsby"

import "./message-link-styles.scss"

function MessageLink() {
  return (
    <Link className="button is-outlined is-rounded message-link" to="/message">
      Message
    </Link>
  )
}

export default MessageLink
