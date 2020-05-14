import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const peoplePage = (data) => {
    const { group } = data.data.allMarkdownRemark
    // const positions = []
    // for (const [index, edges] of group.entries()){

    // }
    return ( 
        <Layout>
        <div>
          <div>
            <h1>People</h1>
                {group.map(( value, index ) => {
                    const {edges}  = value
                    var position 
                    var link
                    const people = edges.map((edge, index) => {
                        const {title} = edge.node.frontmatter
                        const {name} = edge.node.frontmatter
                        position = edge.node.frontmatter.Position
                        link = edge.node.fields.slug
                        return (
                            <li>
                                
                                <Link to={link}>
                                    <h4> {name}, { title} </h4>  
                                </Link>
                            </li>
                        )
                    })
                    return (
                        <div>
                        <h4> {position} </h4>
                        <ul> {people} </ul>

                        </div>
                    )
                })} 
              <p>{data.data.allMarkdownRemark.totalCount}</p>
          </div>
        </div>
        </Layout>
      )

} 

peoplePage.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        group: PropTypes.arrayOf(
            PropTypes.shape({
                edges: PropTypes.arrayOf(
                    PropTypes.shape({
                        node: PropTypes.shape({
                            frontmatter: PropTypes.shape({
                                title: PropTypes.string.isRequired,
                                position: PropTypes.string.isRequired,
                                name: PropTypes.string.isRequired,
                                link: PropTypes.string.isRequired,
                            }),
                            id: PropTypes.string.isRequired,
                        }),
                    }).isRequired
                ),
            }).isRequired
        ),
      }),
    }),
  }


export default peoplePage

export const pageQuery = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {isPersonalPage: {eq: true}}}) {
    group(field: frontmatter___Position) {
      edges {
        node {
          id
          frontmatter {
            title
            name
            Position
          }
          fields {
            slug
          }
        }
      }
    }
  }
}
`
