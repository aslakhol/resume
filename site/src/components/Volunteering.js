import React from "react"
import Organizations from "./Organizations"

const Volunteering = props => {
  const { organizations, roles } = props

  return (
    <div className="volunteering">
      <h2>Verv</h2>
      <Organizations organizations={organizations} roles={roles} />
    </div>
  )
}

export default Volunteering
