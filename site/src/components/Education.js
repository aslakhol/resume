import React from "react"
import Program from "./Program"

const Education = props => {
  const { programs } = props

  return (
    <div className="education">
      <h2>Utdanning</h2>
      {programs.map(program => (
        <Program key={program.id} program={program} />
      ))}
    </div>
  )
}

export default Education
