import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import { Row, Col, Image } from "react-bootstrap"

export default function News(props) {
    return (
        <Layout>
            {props.data.news.totalCount > 0 &&
                <Row>
                    <Col>
                        {props.data.news.news.map((entry, index) => {
                            const news_entry = entry.news_entry
                            return getNewsEntry(news_entry)
                            // return getPerson(person, index != 0)
                        })}
                    </Col>
                </Row>
            }
        </Layout>
    )
}

function getNewsEntry(entry) {
    return (
        <Row className="event-row">
            {entry.frontmatter.bannerImage &&
                <Col xs={12} md={3}>
                    <Image style={{ maxHeight: "100%", maxWidth: "100%" }} src={entry.frontmatter.bannerImage.publicURL} />
                </Col>
            }
            <Col>
                <Row>
                    <Col>
                        <h4>
                            <Link to={entry.fields.slug}>
                                {entry.frontmatter.title}
                            </Link>
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Posted on: {entry.frontmatter.date}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            {entry.excerpt}
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export const query = graphql`
{
  news: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/news//"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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