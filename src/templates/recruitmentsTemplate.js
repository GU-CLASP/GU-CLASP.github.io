import React from "react"
import { graphql } from "gatsby"
import LayoutSidebarNonSticky from "../components/layout/layout_sidebar_without_sticky"
import { Row, Col } from "react-bootstrap"

export default function RecruitmentsTemplate({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {
  var { slug } = pageContext
  var page_title
  var page_date
  var page_html
  var sidebarData = { "active": [], "past": [] }
  const totalCount = data.recruitments.totalCount
  if (totalCount > 0) {
    for (var i = 0; i < totalCount; i++) {
      var title = data.recruitments.recruitments[i].recruitments_entry.frontmatter.title
      var link = data.recruitments.recruitments[i].recruitments_entry.fields.slug
      var status = data.recruitments.recruitments[i].recruitments_entry.frontmatter.expired

      if (status) {
        sidebarData.past.push({
          "title": title,
          "link": link,
        })
      }
      else {
        sidebarData.active.push({
          "title": title,
          "link": link,
        })
      }

      if (link == slug) {
        page_title = title
        page_html = data.recruitments.recruitments[i].recruitments_entry.html
        page_date = data.recruitments.recruitments[i].recruitments_entry.frontmatter.date
      }

    }
    return (
      <LayoutSidebarNonSticky slug={slug} sidebarData={sidebarData}>
        <Row style={{ marginTop: "40px", }}>
          <Col>
            <h1>{page_title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            Posted on: {page_date}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: page_html }}
            />
          </Col>
        </Row>
      </LayoutSidebarNonSticky>
    )
  }
}
export const pageQuery = graphql`
{
  recruitments: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/recruitments//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
    recruitments: edges {
      recruitments_entry: node {
        html
        fields {
          slug
        }
        frontmatter {
          expired
          title
          date(formatString: "MMMM DD, YYYY")
        }
        excerpt
      }
    }
    totalCount
  }
}
`