import React from "react"
import { graphql } from "gatsby"
import Meta from "../components/Meta/Meta"
import Education from "../components/Education/Education"
import Volunteering from "../components/Organizations/Volunteering"
import Work from "../components/Organizations/Work"
import Skills from "../components/Skills/Skills"
import { dateCompare } from "../utils"

const Resume = ({ data }) => {
  const {
    metas,
    programs,
    organizations,
    vervRoles,
    paidRoles,
    projects,
  } = data

  return (
    <div className="resume">
      <Meta me={metas.nodes[0]} />
      <Education programs={programs.nodes} />
      <Volunteering
        organizations={organizations.nodes}
        roles={vervRoles.nodes.sort((a, b) => dateCompare(a, b))}
      />
      <Work
        organizations={organizations.nodes}
        roles={paidRoles.nodes.sort((a, b) => dateCompare(a, b))}
      />
      <Skills projects={projects.nodes} />
    </div>
  )
}

export default Resume

export const query = graphql`
  {
    metas: allSanityMeta {
      nodes {
        ...MetaFragment
      }
    }
    programs: allSanityProgram {
      nodes {
        ...ProgramFragment
      }
    }
    organizations: allSanityOrganization {
      nodes {
        id
        name
        cities
        countries
      }
    }
    vervRoles: allSanityRole(
      filter: { paid: { eq: false }, display: { eq: true } }
      sort: { fields: start_date, order: DESC }
    ) {
      nodes {
        ...RoleFragment
      }
    }
    paidRoles: allSanityRole(
      filter: { paid: { eq: true }, display: { eq: true } }
      sort: { fields: start_date, order: DESC }
    ) {
      nodes {
        ...RoleFragment
      }
    }
    projects: allSanityProject {
      nodes {
        learned_technologies
      }
    }
  }
`
