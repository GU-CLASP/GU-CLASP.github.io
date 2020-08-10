import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import { Row, Col, Image } from "react-bootstrap"
import { Person } from 'react-bootstrap-icons';

export default function StaffTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Row>
        <Col style={{ height: "fit-content", margin: "auto" }}>
          <Row>
            <Col>
              <h4>{frontmatter.name}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{frontmatter.title}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          {markdownRemark.frontmatter.profileImage ? <Image style={{ maxHeight: "150px", maxWidth: "150px", float: "right" }} src={markdownRemark.frontmatter.profileImage.publicURL} roundedCircle /> : <Person style={{ width: "150px", height: "auto", float: "right" }} />}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Col>
      </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        name
        profileImage {
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`