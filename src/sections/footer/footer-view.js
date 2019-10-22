import React from "react"
import { Link } from "gatsby"

import "./footer-styles.scss"
import ButtonLink from "../../components/ButtonLink"

function Footer() {
  return (
    <div className="site-footer">
      <div className="site-footer-container">
        <div className="site-footer-greeting">Want to chat?</div>
        <div className="site-footer-message">
          You can leave a message here. Let's work together sometime.
        </div>
        <div className="site-footer-link">
          <ButtonLink to="/message" label="Leave a message" />
        </div>
      </div>
    </div>
  )
}

export default Footer
