import React from "react"
import { graphql } from "gatsby"
import Location from "../Location"

const Program = props => {
  const { name, start_date, end_date } = props.program
  const institution = props.program.institution
  const { cities, countries } = institution

  return (
    <div className="program">
      <span className="program-identifier">
        <span className="program-name">{name}</span>,{" "}
        <span className="insituttion-name">{institution.name}</span>
      </span>
      <span className="program-range">
        <span>{start_date}</span> - <span>{end_date ? end_date : "Nå"}</span>
      </span>
      <Location
        cities={cities}
        countries={countries}
        className="program-location"
      />
    </div>
  )
}

export default Program

export const query = graphql`
  fragment ProgramFragment on SanityProgram {
    id
    name
    start_date(formatString: "YYYY")
    end_date(formatString: "YYYY")
    institution {
      name
      cities
      countries
    }
  }
`
