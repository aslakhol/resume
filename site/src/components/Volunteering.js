import React from "react"
import Organization from "./Organization"

const Volunteering = props => {
  const { organizations, roles } = props

  const vervOrgs = organizations
    .map(org => {
      return {
        ...org,
        roles: roles.filter(role => role.organization.id === org.id),
      }
    })
    .filter(org => org.roles.length > 0)

  return (
    <div className="volunteering">
      {vervOrgs.map(org => (
        <Organization organization={org} key={org.id} />
      ))}
    </div>
  )
}

export default Volunteering
