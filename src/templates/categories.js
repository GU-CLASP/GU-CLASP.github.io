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

  const hideAnchor =  false
  const hideSidebar = (frontmatter.sidebar === null) ? true : false

  onSetAnchorHide(hideAnchor)
  onSetSidebarHide(hideSidebar)

  onSidebarContentSelected(category.toLowerCase()+"-categories-collection")
  
  if (sidebarEntry !== frontmatter.sidebar) onSetSidebarContentEntry(frontmatter.sidebar)

  const { edges } = data.allMarkdownRemark

  return (
      <Layout onPostPage={true}>
      <div>
      <h1 align="center">{ category }</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const title  = node.frontmatter.title
            const date = node.frontmatter.date
            const summary = node.excerpt
            return (
              <li key={slug}>
                <h2 id={title}>
                  <a href={"#"+title} aria-label="call for papers permalink" class="post-toc-anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
                  <Link to={slug}>{title}</Link>
                </h2>
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
