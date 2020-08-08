import React from "react"
import { graphql } from "gatsby"

const Portfolio = ({ data }) => {
  const { projects } = data.allSanityProject

  return (
    <div className="portfolio">
      {projects.map(project => (
        <Project project={project} />
      ))}
    </div>
  )
}

export default Portfolio

const Project = props => {
  const {
    name,
    role,
    long_description,
    repository,
    link,
    organization,
    short_description,
    id,
  } = props.project

  return (
    <div className="project">
      <div className="project-title">{name}</div>
      <div className="ingress">{short_description}</div>
    </div>
  )
}

export const query = graphql`
  {
    allSanityProject {
      projects: nodes {
        name
        role
        long_description
        repository
        link
        organization {
          name
          website
          parent_organization {
            name
          }
        }
        short_description
        id
      }
    }
  }
`
