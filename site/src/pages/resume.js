import React from "react"
import { graphql } from "gatsby"
import Meta from "../components/meta"
import Education from "../components/Education"
import Volunteering from "../components/Volunteering"
import Work from "../components/Work"

const Resume = ({ data }) => {
  const me = data.allSanityMeta.nodes[0]
  const programs = data.allSanityProgram.nodes
  const organizations = data.allSanityOrganization.nodes
  const vervRoles = data.allVervRole.nodes
  const paidRoles = data.allPaidRole.nodes

  return (
    <div className="resume">
      <Meta me={me} />
      <Education programs={programs} />
      <Volunteering organizations={organizations} roles={vervRoles} />
      <Work organizations={organizations} roles={paidRoles} />
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
    allVervRole: allSanityRole(
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
    allPaidRole: allSanityRole(
      filter: { paid: { eq: true } }
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
