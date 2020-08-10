import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import { Row, Col, Image } from "react-bootstrap"

export default function NewsTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      {frontmatter.bannerImage &&
        <Row className="news-banner-image">
          <Col className="text-center">
            <Image style={{ maxHeight: "50vh", maxWidth: "100%" }} src={frontmatter.bannerImage.publicURL} />
          </Col>
        </Row>
      }
      <Row>
        <Col>
          <h1>{frontmatter.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          Posted on: {frontmatter.date}
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
        date(formatString: "MMMM DD, YYYY")
        bannerImage {
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`