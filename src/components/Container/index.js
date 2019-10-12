import React from "react"

import "./container.scss"
import SEO from "./seo"

function Container({ title, children }) {
  return (
    <React.Fragment>
      <SEO title={title} />
      {children}
    </React.Fragment>
  )
}

export default Container
