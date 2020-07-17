import React from "react"
import Role from "./Role"

const Organization = props => {
  const { name, city, country, roles } = props.organization

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
            <Role role={role} key={index + role.long_name} />
          ))}
        </ul>
      </span>
    </div>
  )
}

export default Organization
