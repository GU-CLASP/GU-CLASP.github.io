import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import LayoutSidebarCourses from "../components/layout/layout_courses"

export default function Course(props) {
  var sidebarData = []
  const totalCount = props.data.phd_course.totalCount
  if (totalCount > 0) {
    for (var i = 0; i < totalCount; i++) {
      var title = props.data.phd_course.phd_courses[i].phd_course_entry.frontmatter.title
      var link = props.data.phd_course.phd_courses[i].phd_course_entry.fields.slug
      sidebarData.push({
        "title": title,
        "link": link,
      })
    }
  }

  return (
    <LayoutSidebarCourses sidebarData={sidebarData} mainPage={true}>
      {props.data.phd_course.totalCount > 0 &&
        <div>
          <Row>
            <Col style={{ marginTop: "30px", }}>
              <h1>PhD courses</h1>
              <p>Here you can find a number of courses that are offered at PhD level at CLASP. Some of the courses are reading courses. See each course for more details on the format.
                <br></br> The  syllabus for the PhD in Computational Linguistics can be found here </p>
            </Col>
          </Row>
        </div>
      }

    </LayoutSidebarCourses>
  )
}



export const query = graphql`
{
  phd_course: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/phd-courses//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
    phd_courses: edges {
      phd_course_entry: node {
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