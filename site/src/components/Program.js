import React from "react"
import { graphql } from "gatsby"

const Program = props => {
  const { name, start_date, end_date } = props.program
  const institution = props.program.institution.name

  return (
    <div className="program">
      <span className="program-range">
        <span>{start_date}</span> - <span>{end_date ? end_date : "Nå"}</span>{" "}
        <span>{name}</span>
        <span>{institution}</span>
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
    }
  }
`
