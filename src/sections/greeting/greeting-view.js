import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJava,
  faAndroid,
  faPython,
  faAngular,
  faReact,
  faNodeJs,
  faAws,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons"

import "./greeting-styles.scss"

function Greeting() {
  const {
    file: {
      childImageSharp: {
        fixed: { src },
      },
    },
  } = useStaticQuery(graphql`
    query GetSymbol {
      file(relativePath: { eq: "symbol.png" }) {
        childImageSharp {
          fixed(width: 54, height: 105) {
            src
          }
        }
      }
    }
  `)
  return (
    <section className="section greeting hero is-fullheight is-black">
      <div className="hero-head columns greeting-head">
        <div className="column greeting-head-logo">
          <Link to="/test">
            <img src={src} alt="home link" />
          </Link>
        </div>
        <div className="column greeting-head-link">
          <Link className="button is-outlined is-rounded" to="/message">
            Message
          </Link>
        </div>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered greeting-body">
          <h1 className="title">Green Phoenix</h1>
          <h2 className="subtitle">Your Digital Rebirth</h2>
          <img
            src="http://placehold.it/200"
            alt="An green outline of a phoenix"
          />
        </div>
      </div>
      <div className="hero-footer">
        <div className="container greeting-footer">
          <span className="icon">
            <FontAwesomeIcon icon={faJava} size="3x" />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faAndroid} size="3x" />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faPython} size="3x" />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faAngular} size="3x" />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faReact} size="3x" />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faAws} size="3x" />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Greeting
