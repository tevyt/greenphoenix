import React from "react"

import LargeLogo from "../components/LargeLogo"

import "./404.scss"
import ButtonLink from "../components/ButtonLink"
import Container from "../components/Container"

function NotFoundPage() {
  return (
    <Container title="404 Error">
      <section className="section hero is-black is-fullheight not-found">
        <div className="hero-body">
          <div className="container has-text-centered">
            <LargeLogo />
            <h1>404</h1>
            <h2>Sorry, there doesn't seem to be anything on this page</h2>
            <div className="not-found-home-link">
              <ButtonLink to="/" label="Return to home" />
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default NotFoundPage
