import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

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
    </section>
  )
}

export default Greeting
