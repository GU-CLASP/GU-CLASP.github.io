import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import { Row, Col, Image } from "react-bootstrap"
import { Person } from 'react-bootstrap-icons';

export default function ConferenceTemplate({
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
	                {frontmatter.externalSite && 
	    			<Col>
				<p><a href={frontmatter.externalSite}>External Website</a></p>
				</Col>
			}
	                {frontmatter.proceedings && 
				<Col>
				<p><a href={frontmatter.proceedings}>Proceedings</a></p>
	    	  	</Col>
			}
	            </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>On: {frontmatter.date}</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <p>Duration: {frontmatter.duration}</p>
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
                duration
          	date(formatString: "DD MMM, YYYY")
                venue
		externalSite
		proceedings
            }
            fields {
                slug
            }
        }
    }
`
