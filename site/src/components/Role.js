import React from "react"
import { graphql } from "gatsby"

const Role = props => {
  const { name, start_date, end_date } = props.role

  return (
    <li>
      <div className="role-content">
        <span>{name} </span>
        <div className="role-date-range">
          <span>{start_date}</span>
          <span> - </span>
          <span>{end_date ? end_date : "Nå"}</span>
        </div>
      </div>
    </li>
  )
}

export default Role

export const query = graphql`
  fragment RoleFragment on SanityRole {
    id
    name
    sort_date: start_date
    start_date(locale: "nb", formatString: "MMM YYYY")
    end_date(locale: "nb", formatString: "MMM YYYY")
    organization {
      id
      name
    }
  }
`
