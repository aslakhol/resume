import React from "react"
import { graphql } from "gatsby"
import Meta from "../components/meta"
import Program from "../components/Program"
import Volunteering from "../components/Volunteering"

const Resume = ({ data }) => {
  const me = data.allSanityMeta.nodes[0]
  const programs = data.allSanityProgram.nodes
  const organizations = data.allSanityOrganization.nodes
  const roles = data.allSanityRole.nodes

  return (
    <div className="resume">
      <Meta me={me} />
      <h2>Utdanning</h2>
      {programs.map(program => (
        <Program key={program.id} program={program} />
      ))}

      <h2>Verv</h2>
      <Volunteering organizations={organizations} roles={roles} />
      <h2>Arbeidserfaring</h2>

      <h2>Tekniske ferdigheter</h2>
    </div>
  )
}

export default Resume

export const query = graphql`
  {
    allSanityMeta {
      nodes {
        ...MetaFragment
      }
    }
    allSanityProgram {
      nodes {
        id
        ...ProgramFragment
      }
    }
    allSanityOrganization {
      nodes {
        id
        name
        city
        country
      }
    }
    allSanityRole(
      filter: { paid: { eq: false } }
      sort: { fields: start_date }
    ) {
      nodes {
        long_name
        start_date
        end_date
        organization {
          id
          name
        }
      }
    }
  }
`
