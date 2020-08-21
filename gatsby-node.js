const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const markdownTemplate = require.resolve(`./src/templates/markdownTemplate.js`)
    const newsTemplate = require.resolve(`./src/templates/newsTemplate.js`)
    const staffTemplate = require.resolve(`./src/templates/staffTemplate.js`)
    const seminarTemplate = require.resolve(`./src/templates/seminarTemplate.js`)
    const workshopTemplate = require.resolve(`./src/templates/workshopTemplate.js`)
    const conferenceTemplate = require.resolve(`./src/templates/conferenceTemplate.js`)
    const recruitmentsTemplate = require.resolve(`./src/templates/recruitmentsTemplate.js`)
    const courseTemplate = require.resolve(`./src/templates/courseTemplate.js`)

    const result = await graphql(`
      {
        allMarkdownRemark {
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

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const pageType = getMarkdownType(node.fields.slug)
        switch (pageType) {
            case "people":
                createPage({
                    path: node.fields.slug,
                    component: staffTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
                break
            case "workshop":
                createPage({
                    path: node.fields.slug,
                    component: workshopTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
                break
            case "conference":
                createPage({
                    path: node.fields.slug,
                    component: conferenceTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
                break
            case "seminar":
                createPage({
                    path: node.fields.slug,
                    component: seminarTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
                break
            case "news":
                createPage({
                    path: node.fields.slug,
                    component: newsTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
                break
            case "recruitment":
                createPage({
                    path: node.fields.slug,
                    component: recruitmentsTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
                break
            case "phd-courses":
                createPage({
                    path: node.fields.slug,
                    component: courseTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
                break
            default:
                createPage({
                    path: node.fields.slug,
                    component: markdownTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
                break
        }
    })
}

function getMarkdownType(slug) {
    if (slug.startsWith("/events/seminars/")) {
        return "seminar"
    }
    else if (slug.startsWith("/events/conferences/")) {
        return "conference"
    }
    else if (slug.startsWith("/events/workshops/")) {
        return "workshop"
    }
    else if (slug.startsWith("/people/")) {
        return "people"
    }
    else if (slug.startsWith("/news/")) {
        return "news"
    }
    else if (slug.startsWith("/recruitments/")) {
        return "recruitment"
    }
    else if(slug.startsWith("/phd-courses/")){
        return "phd-courses"
    }
    else {
        return ""
    }
}