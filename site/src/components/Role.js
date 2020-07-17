import React from "react"

const Role = props => {
  const { long_name, start_date, end_date } = props.role

  return (
    <li>
      <span>{long_name} </span>
      <span>{start_date} - </span>
      {end_date ? end_date : "Nå"}
    </li>
  )
}

export default Role
