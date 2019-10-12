import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

function HomeLink() {
  const {
    file: {
      childImageSharp: {
        fixed: { src },
      },
    },
  } = useStaticQuery(graphql`
    query SmallLogo {
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
    <Link to="/">
      <img src={src} alt="Home Link" />
    </Link>
  )
}

export default HomeLink
