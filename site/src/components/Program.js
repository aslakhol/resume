import React from "react"
import { graphql } from "gatsby"
import Location from "./Location"

const Program = props => {
  const { name, start_date, end_date } = props.program
  const institution = props.program.institution
  const { cities, countries } = institution

  return (
    <div className="program">
      <span className="program-range">
        <span>{start_date}</span> - <span>{end_date ? end_date : "Nå"}</span>{" "}
        <span>{name}</span>
        <span>{institution.name}</span>
        <Location cities={cities} countries={countries} />
      </span>
    </div>
  )
}

export default Program

export const query = graphql`
  fragment ProgramFragment on SanityProgram {
    name
    start_date
    end_date
    institution {
      name
      cities
      countries
    }
  }
`
