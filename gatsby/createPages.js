const replacePath = require('./utils')
const path = require("path")
const _ = require("lodash")

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/postTemplate.js`)
  const tagTemplate = path.resolve(`src/templates/tags.js`)
  const categoryTemplate = path.resolve(`src/templates/categories.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              tags
              categories
              date
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `).then(result => {

    if (result.errors) {
      return Promise.reject(result.errors)
    }


    // Extract category data from query
    const categories = result.data.categoriesGroup.group

    // Make category pages
    categories.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category.fieldValue)}/`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
        },
      })
    })


    // Extract tag data from query
    const tags = result.data.tagsGroup.group

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })


    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: replacePath(node.fields.slug),
        component: postTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
