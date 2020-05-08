import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout";
import { connect } from 'react-redux'
import "katex/dist/katex.min.css"
import {
  onSidebarContentSelected,
  onSetSidebarContentEntry,
  onSetAnchorHide,
  onSetSidebarHide,
} from '../actions/layout'
import { getSidebarSelectedKey, getSidebarEntry } from "../store/selectors";

function Template({
  pageContext,
  data, // this prop will be injected by the GraphQL query below.
  onSidebarContentSelected,
  selectedKey,
  onSetSidebarContentEntry,
  sidebarEntry,
  onSetAnchorHide,
  onSetSidebarHide
}) {
  const { category } = pageContext
  const { allMarkdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter} = allMarkdownRemark.edges[0].node
  const {html, id} = allMarkdownRemark

  const hideAnchor = (frontmatter.hideAnchor === null) ? false : frontmatter.hideAnchor
  const hideSidebar = (frontmatter.sidebar === null) ? true : false

  onSetAnchorHide(hideAnchor)
  onSetSidebarHide(hideSidebar)

  if (selectedKey !== id) onSidebarContentSelected(id)
  if (sidebarEntry !== frontmatter.sidebar) onSetSidebarContentEntry(frontmatter.sidebar)

  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } in category "${category}"`

  return (
      <Layout onPostPage={true}>
      <div>
        <h3>{categoryHeader}</h3>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const title  = node.frontmatter.title
            const date = node.frontmatter.date
            const summary = node.excerpt
            return (
              <li key={slug}>
                <h2><Link to={slug}>{title}</Link></h2>
                <p> {date} </p>
                <p> {summary} </p>
              </li>
            )
          })}
        </ul>
      </div>
      </Layout>
  )
}

Template.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

const mapStateToProps = (state) => {
  return {
    selectedKey: getSidebarSelectedKey(state),
    sidebarEntry: getSidebarEntry(state)
  }
}

const mapDispatchToProps = {
  onSidebarContentSelected,
  onSetSidebarContentEntry,
  onSetAnchorHide,
  onSetSidebarHide
}

export default connect(mapStateToProps, mapDispatchToProps) (Template)

export const pageQuery = graphql`
query ($category: String) {
  allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {categories: {in: [$category]}}}) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          sidebar
          hideAnchor
          showTitle
        }
        fields {
          slug
        }
        excerpt
        id
      }
    }
  }
}
`
