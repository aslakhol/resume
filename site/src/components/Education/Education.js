import React from "react"
import Program from "./Program"
import "./education.css"

const Education = props => {
  const { programs } = props

  return (
    <div className="education">
      <h2>Utdanning</h2>
      <div className="programs">
        {programs.map(program => (
          <Program key={program.id} program={program} />
        ))}
      </div>
    </div>
  )
}

export default Education
