const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.title,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve(`src/templates/blog-post.js`)

  const query = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  query.data.allMarkdownRemark.edges.map(edge => {
    createPage({
      path: `/${edge.node.fields.slug}`,
      component: template,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
