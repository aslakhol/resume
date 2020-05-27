import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const AnimalTemplate = props => {
  const { name, description, relation } = props.data.sanityAnimal
  const { fluid } = props.data.sanityAnimal.image.asset
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{relation}</p>
      <Img alt={name} fluid={fluid} />'
    </div>
  )
}

export default AnimalTemplate

export const query = graphql`
  query($id: String!) {
    sanityAnimal(id: { eq: $id }) {
      description
      name
      relation
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
