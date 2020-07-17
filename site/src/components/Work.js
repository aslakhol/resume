import React from "react"
import Organizations from "./Organizations"

const Work = props => {
  const { organizations, roles } = props

  return (
    <div className="work">
      <h2>Arbeidserfaring</h2>
      <Organizations organizations={organizations} roles={roles} />
    </div>
  )
}

export default Work
