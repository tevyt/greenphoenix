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
    largeLogo: {
      childImageSharp: {
        fixed: { src: largeLogoSrc },
      },
    },
    smallLogo: {
      childImageSharp: {
        fixed: { src: smallLogoSrc },
      },
    },
  } = useStaticQuery(graphql`
    {
      largeLogo: file(relativePath: { eq: "LogoLarge.png" }) {
        childImageSharp {
          fixed(width: 500) {
            src
          }
        }
      }
      smallLogo: file(relativePath: { eq: "symbol.png" }) {
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
      <div className="hero-head columns greeting-head is-mobile">
        <div className="column greeting-head-logo">
          <Link to="/">
            <img src={smallLogoSrc} alt="home link" />
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
          <img src={largeLogoSrc} alt="An green outline of a phoenix" />
        </div>
      </div>
      <div className="hero-footer">
        <div className="container greeting-footer">
          <ToolLogos />
        </div>
      </div>
    </section>
  )
}

function ToolLogos() {
  const tabletMaxWidth = 1024
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
  const iconSize = windowWidth <= tabletMaxWidth ? "2x" : "3x"
  const icons = [
    faJava,
    faGitAlt,
    faAndroid,
    faPython,
    faAngular,
    faReact,
    faNodeJs,
    faAws,
  ]
  return (
    <React.Fragment>
      {icons.map((icon, index) => (
        <span className="icon" key={index}>
          <FontAwesomeIcon icon={icon} size={iconSize} />
        </span>
      ))}
    </React.Fragment>
  )
}

export default Greeting
