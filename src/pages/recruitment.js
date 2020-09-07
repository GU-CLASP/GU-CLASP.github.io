import React from "react"
import LayoutSidebarNonSticky from "../components/layout/layout_sidebar_without_sticky"
import { Row, Col } from "react-bootstrap"


export default function Recruitment(props) {
  var sidebarData = {"active":[],"past":[]}
  const totalCount = props.data.recruitments.totalCount
  if (totalCount > 0) {
    for (var i = 0; i < totalCount; i++) {
      var title = props.data.recruitments.recruitments[i].recruitments_entry.frontmatter.title
      var link = props.data.recruitments.recruitments[i].recruitments_entry.fields.slug
      var status = props.data.recruitments.recruitments[i].recruitments_entry.frontmatter.expired
      if (status){
        sidebarData.past.push({
          "title": title,
          "link": link,
        })
      }
      else{
        sidebarData.active.push({
          "title": title,
          "link": link,
        })
      }
    }

  }
  return (
    <LayoutSidebarNonSticky sidebarData={sidebarData} mainPage={true}>
      {props.data.recruitments.totalCount > 0 &&
        <div>
          <Row>
            <Col style={{marginTop:"40px",}}>
              <h1>Recruitment</h1>
              <p>Check this page regularly for news about recruiting possibilities at CLASP. </p>
            </Col>
          </Row>
        </div>
      }
    </LayoutSidebarNonSticky>
  )
}



export const query = graphql`
{
  recruitments: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/recruitments//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
    recruitments: edges {
      recruitments_entry: node {
        fields {
          slug
        }
        frontmatter {
          title
          expired
          date(formatString: "MMMM DD, YYYY")
        }
        excerpt
      }
    }
    totalCount
  }
}

`