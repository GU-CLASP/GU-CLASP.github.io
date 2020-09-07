import React from "react"
import { graphql } from "gatsby"
import LayoutSidebarCourses from "../components/layout/layout_courses"
import { Row, Col } from "react-bootstrap"

export default function courseTemplate({
    data, // this prop will be injected by the GraphQL query below.
    pageContext
}) {
    var { slug } = pageContext
    var page_title
    var page_date
    var page_html
    var sidebarData = []
    const totalCount = data.phd_course.totalCount
    if (totalCount > 0) {
        for (var i = 0; i < totalCount; i++) {
            var title = data.phd_course.phd_courses[i].phd_course_entry.frontmatter.title
            var link = data.phd_course.phd_courses[i].phd_course_entry.fields.slug
            sidebarData.push({
                "title": title,
                "link": link,
            })

            if (link == slug) {
                page_title = title
                page_html = data.phd_course.phd_courses[i].phd_course_entry.html
                page_date = data.phd_course.phd_courses[i].phd_course_entry.frontmatter.date
            }
        }
        return (
            <LayoutSidebarCourses slug={slug} sidebarData={sidebarData} mainPage={false}>
                <Row style={{ marginTop: "40px", }}>
                    <Col>
                        <h1>{page_title}</h1>
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
            </LayoutSidebarCourses>
        )
    }
}

export const query = graphql`
{
  phd_course: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/phd-courses//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
    phd_courses: edges {
      phd_course_entry: node {
        html
        fields {
          slug
        }
        frontmatter {
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