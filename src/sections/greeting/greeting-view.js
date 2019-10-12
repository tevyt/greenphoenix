import React from "react"

import "./greeting-styles.scss"
import HomeLink from "../../components/HomeLink"
import ButtonLink from "../../components/ButtonLink"
import LargeLogo from "../../components/LargeLogo/large-logo-view"
import ToolBanner from "../../components/ToolBanner"

function Greeting() {
  return (
    <section className="section greeting hero is-fullheight is-black">
      <div className="hero-head greeting-head">
        <HomeLink />
        <ButtonLink to="/message" label="Message" />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered greeting-body">
          <h1 className="title">Green Phoenix</h1>
          <h2 className="subtitle">Your Digital Rebirth</h2>
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
