import React from "react"
import Organization from "./Organization"
import { dateCompare } from "../../utils"

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
    .sort((a, b) => dateCompare(a.roles[0], b.roles[0]))

  // skal jeg sortere på start date eller end date ? Elle help pls

  return (
    <>
      {orgsWithRoles.map(org => (
        <Organization organization={org} key={org.id} />
      ))}
    </>
  )
}

export default Organizations
