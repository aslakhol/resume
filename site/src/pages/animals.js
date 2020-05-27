import React from "react"
import { graphql } from "gatsby"

import Animal from "../components/animal-component"

const Dyrene = ({ data }) => {
  const animals = data.allSanityAnimal.edges

  return (
    <>
      <h1>There are {animals.length} animals here</h1>
      {data.allSanityAnimal.edges.map(({ node }) => (
        <div key={node.id}>
          <Animal animal={node} />
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  {
    allSanityAnimal {
      edges {
        node {
          id
          ...AnimalFragment
        }
      }
    }
  }
`

export default Dyrene
