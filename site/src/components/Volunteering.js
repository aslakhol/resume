import React from "react"
import { graphql } from "gatsby"

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

const Organization = props => {
  const { name, city, country, roles } = props.organization
  console.log(props.organization)

  return (
    <div className="org">
      <span className="org-name">{name} </span>
      <span className="org-location">
        {country.length < 2 ? city.join(", ") : ""}
        {city.length > 0 && country.length === 1 ? ", " : ""}
        {country.join(", ")}
        <br />
        <ul className="roles">
          {roles.map((role, index) => (
            <li key={index + role.long_name}>
              <span>{role.long_name} </span>
              <span>{role.start_date}</span>
              {role.end_date ? " - " + role.end_date : ""}
            </li>
          ))}
        </ul>
      </span>
    </div>
  )
}
