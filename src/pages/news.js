import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

export default function News(props) {
  return (
    <Layout>
      {props.data.news.totalCount > 0 &&
        <div id="media">
          {props.data.news.news.map((entry, index) => {
            if (index % 2 == 0) {
              return getNewsRow(props.data.news.news, index)
            }
          })}
        </div>
      }
    </Layout>
  )
}

function getNewsRow(items, startEntryIndex) {
  return (
    <Row className="post_row">
      <Col className="col-12 col-md-6">
        {getNewsEntry(items[startEntryIndex].news_entry)}
      </Col>
      {items[startEntryIndex + 1] !== undefined &&
        <Col className="col-12 col-md-6">
          {getNewsEntry(items[startEntryIndex + 1].news_entry)}
        </Col>
      }
    </Row>
  )
}

function getNewsEntry(entry) {
  return (
    <div class="span6 post">
      {entry.frontmatter.bannerImage &&
        <div>
          <div class="text">
            <h5>
              <Link to={entry.fields.slug}>
                {entry.frontmatter.title}
              </Link>
              <br></br>
              <span class="date">Posted on: {entry.frontmatter.date}</span>
            </h5>
          </div>
          <div class="img">
            <img src={entry.frontmatter.bannerImage.publicURL} />
          </div>
          <div class="text">
            {entry.excerpt}
          </div>
        </div>
      }
    </div>
  )
}

export const query = graphql`
  {
    news: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/news//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
      news: edges {
        news_entry: node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            bannerImage {
              publicURL
            }
          }
          excerpt
        }
      }
      totalCount
    }
  }
`