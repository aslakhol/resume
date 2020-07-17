import React from "react"
import Organization from "./Organization"

const Organizations = props => {
  const { organizations, roles } = props

  const orgsWithRoles = organizations
    .map(org => {
      return {
        ...org,
        roles: roles.filter(role => role.organization.id === org.id),
      }
    })
    .filter(org => org.roles.length > 0)

  return (
    <>
      {orgsWithRoles.map(org => (
        <Organization organization={org} key={org.id} />
      ))}
    </>
  )
}

export default Organizations
