import React from "react"
import Role from "./Role"
import Location from "./Location"

const Organization = props => {
  const { name, cities, countries, roles } = props.organization

  return (
    <div className="org">
      <div className="org-title-line">
        <span className="org-name">{name} </span>
        <Location cities={cities} countries={countries} />
      </div>
      <ul className="roles">
        {roles.map((role, index) => (
          <Role role={role} key={index + role.long_name} />
        ))}
      </ul>
    </div>
  )
}

export default Organization
