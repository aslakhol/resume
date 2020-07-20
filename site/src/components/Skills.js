import React from "react"
import Skill from "./Skill"

const Skills = props => {
  const { projects } = props

  const skills = new Set(
    projects.map(project => project.learned_technologies).flat()
  )

  return (
    <>
      <h2>Tekniske ferdigheter</h2>
      <div className="skills">
        {[...skills].map((skill, index) => (
          <Skill skill={skill} key={"skill" + index} />
        ))}
      </div>
    </>
  )
}

export default Skills
