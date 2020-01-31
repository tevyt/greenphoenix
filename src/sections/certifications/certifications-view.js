import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./certifications-styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Certifications() {
  const {
    allContentfulCertification: { edges: certificaitions },
  } = useStaticQuery(graphql`
    {
      allContentfulCertification(
        limit: 6
        sort: { fields: [createdAt], order: DESC }
      ) {
        edges {
          node {
            name
            link
            icon {
              fluid(maxWidth: 500) {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="section certifications">
      <h3>Certifications</h3>
      <div className="certifications-list">
        {certificaitions.map(
          ({
            node: {
              name,
              link,
              icon: {
                fluid: { src },
              },
            },
          }) => (
            <a href={link} key={name} className="certifications-list-item">
              <img src={src} alt={name} />
              <h4>{name}</h4>
            </a>
          )
        )}
      </div>
      <div className="certifications-more">
        <a
          className="button rounded certifications-more-link"
          href="https://www.linkedin.com/in/travisalexandersmith/"
        >
          <i className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </i>
          <span>See more on Linkedin.</span>
        </a>
      </div>
    </div>
  )
}

export default Certifications
