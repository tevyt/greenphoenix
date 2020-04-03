import React from "react"

import "./greeting-styles.scss"
import HomeLink from "../../components/HomeLink"
import ButtonLink from "../../components/ButtonLink"
import LargeLogo from "../../components/LargeLogo/large-logo-view"
import ToolBanner from "../../components/ToolBanner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "../../constants"

function Greeting() {
  return (
    <section className="section greeting hero is-fullheight is-black">
      <div className="hero-head greeting-head">
        <HomeLink />
        <div className="greeting-head-contact">
          <a href={GITHUB_PROFILE_URL} className="social-link">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href={LINKEDIN_PROFILE_URL}
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <ButtonLink to="/message" label="Message" />
        </div>
      </div>
      <div className="greeting-social">
        <a href={GITHUB_PROFILE_URL} className="social-link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href={LINKEDIN_PROFILE_URL}
          className="social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered greeting-body">
          <h1 className="title">Travis Smith</h1>
          <h2 className="subtitle">Digital Rebirth</h2>
          <LargeLogo />
        </div>
      </div>
      <div className="hero-footer">
        <ToolBanner />
      </div>
    </section>
  )
}

export default Greeting
