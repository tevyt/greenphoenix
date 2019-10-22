import React from "react"
import { Link } from "gatsby"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-greeting">Want to chat?</div>
      <div className="footer-message">
        You can leave a message here. Let's work together sometime.
      </div>
      <div className="footer-button">
        <Link to="/message">Leave a Message</Link>
      </div>
    </div>
  )
}

export default Footer
