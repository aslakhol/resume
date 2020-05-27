const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityAnimal {
        edges {
          node {
            slug {
              current
            }
            id
          }
        }
      }
    }
  `)

  result.data.allSanityAnimal.edges.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve("./src/templates/animal-template.js"),
      context: {
        id: node.id,
      },
    })
  })
}
