import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const AnimalComponent = props => {
  const { name, description, relation } = props.animal
  const { fluid } = props.animal.image.asset
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{relation}</p>
      <Img alt={name} fluid={fluid} />
    </div>
  )
}

export default AnimalComponent

export const query = graphql`
  fragment AnimalFragment on SanityAnimal {
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
`
