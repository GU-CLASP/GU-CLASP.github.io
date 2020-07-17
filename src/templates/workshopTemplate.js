import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import { Row, Col, Image } from "react-bootstrap"
import { Person } from 'react-bootstrap-icons';

export default function WorkshopTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h4>
                                {frontmatter.title}
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Cordinated by: {frontmatter.cordinators}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>Duration: {frontmatter.duration}</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <p>On: {frontmatter.date}</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <p>Location: {frontmatter.venue}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </Col>
                    </Row>
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
                cordinators
                duration
                date
                venue
            }
            fields {
                slug
            }
        }
    }
`