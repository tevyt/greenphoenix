import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function LargeLogo() {
  const {
    file: {
      childImageSharp: {
        fixed: { src },
      },
    },
  } = useStaticQuery(graphql`
    query LargeLogo {
      file(relativePath: { eq: "LogoLarge.png" }) {
        childImageSharp {
          fixed(width: 500) {
            src
          }
        }
      }
    }
  `)
  return <img src={src} alt="Green Phoenix Logo" />
}

export default LargeLogo
