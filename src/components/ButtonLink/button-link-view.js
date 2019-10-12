import React from "react"
import { Link } from "gatsby"

import "./button-link-styles.scss"

function ButtonLink({ to, label }) {
  return (
    <Link className="button is-outlined is-rounded button-link" to={to}>
      {label}
    </Link>
  )
}

export default ButtonLink
