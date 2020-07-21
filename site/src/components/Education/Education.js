import React from "react"
import Program from "./Program"
import "./education.css"

const Education = props => {
  const { programs } = props

  const sortedPrograms = programs.sort(
    (a, b) => -1 * a.sort_date.localeCompare(b.sort_date)
  )

  return (
    <div className="education">
      <h2>Utdanning</h2>
      <div className="programs">
        {sortedPrograms.map(program => (
          <Program key={program.id} program={program} />
        ))}
      </div>
    </div>
  )
}

export default Education
