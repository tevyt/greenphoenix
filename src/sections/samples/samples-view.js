import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sample from "../../components/Sample"

import "./samples-styles.scss"

function Samples() {
  const {
    allContentfulSample: { edges: samples },
  } = useStaticQuery(graphql`
    {
      allContentfulSample(
        limit: 6
        sort: { fields: [createdAt], order: DESC }
      ) {
        edges {
          node {
            name
            description
            sourceCodeUrl
            liveDemoUrl
            thumbnail {
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
    <div className="section samples">
      <h3>Samples</h3>
      <div className="samples-list">
        {samples.map(
          ({
            node: {
              name,
              description,
              sourceCodeUrl,
              liveDemoUrl,
              thumbnail: {
                fluid: { src },
              },
            },
          }) => (
            <Sample
              key={name}
              name={name}
              description={description}
              sourceCodeUrl={sourceCodeUrl}
              liveDemoUrl={liveDemoUrl}
              thumbnailUrl={src}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Samples
