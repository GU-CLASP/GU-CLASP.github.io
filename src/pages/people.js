import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import { Row, Col, Image } from "react-bootstrap"
import { Person } from 'react-bootstrap-icons';

export default function People(props) {
    return (
        <Layout>
            {props.data.directors.totalCount > 0 &&
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <hr />
                                <h4>Director</h4>
                                <hr />
                            </Col>
                        </Row>
                        {props.data.directors.people.map((person, index) => {
                            return getPerson(person, index != 0)
                        })}
                    </Col>
                </Row>
            }
            {props.data.associate_directors.totalCount > 0 &&
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <hr />
                                <h4>Associate Director and Researcher</h4>
                                <hr />
                            </Col>
                        </Row>
                        {props.data.associate_directors.people.map((person, index) => {
                            return getPerson(person, index != 0)
                        })}
                    </Col>
                </Row>
            }
            {props.data.administrators.totalCount > 0 &&
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <hr />
                                <h4>Administrator</h4>
                                <hr />
                            </Col>
                        </Row>
                        {props.data.administrators.people.map((person, index) => {
                            return getPerson(person, index != 0)
                        })}
                    </Col>
                </Row>
            }
            {props.data.researchers.totalCount > 0 &&
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <hr />
                                <h4>Researchers</h4>
                                <hr />
                            </Col>
                        </Row>
                        {props.data.researchers.people.map((person, index) => {
                            return getPerson(person, index != 0)
                        })}
                    </Col>
                </Row>
            }
            {props.data.students.totalCount > 0 &&
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <hr />
                                <h4>Doctoral Students</h4>
                                <hr />
                            </Col>
                        </Row>
                        {props.data.students.people.map((person, index) => {
                            return getPerson(person, index != 0)
                        })}
                    </Col>
                </Row>
            }
            {props.data.past_members.totalCount > 0 &&
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <hr />
                                <h4>Past Members</h4>
                                <hr />
                            </Col>
                        </Row>
                        {props.data.past_members.people.map((person, index) => {
                            return getPerson(person)
                        })}
                    </Col>
                </Row>
            }
        </Layout>
    )
}

function getPerson(person, showSepratorLine) {
    return (
        <Row>
            <Col>
                {showSepratorLine &&
                    <Row>
                        <Col md={{ offset: 2 }}>
                            <hr />
                        </Col>
                    </Row>
                }
                <Row>
                    <Col md={{ span: 2, offset: 2 }}>
                        {person.person.frontmatter.profileImage ? <Image style={{ maxHeight: "100%", maxWidth: "100%" }} src={person.person.frontmatter.profileImage.publicURL} roundedCircle /> : <Person style={{ width: "100%", height: "auto" }} />}
                    </Col>
                    <Col style={{height: "fit-content", margin: "auto"}}>
                        <Row>
                            <Col>
                                <h5>
                                    <Link to={person.person.fields.slug}>
                                        {person.person.frontmatter.name}
                                    </Link>
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {person.person.frontmatter.title}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {person.person.excerpt}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export const query = graphql`
{
  directors: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 0}}}) {
    people: edges {
      person: node {
        fields {
          slug
        }
        frontmatter {
          title
          name
          profileImage {
            publicURL
          }
        }
        excerpt
      }
    }
    totalCount
  }
  associate_directors: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 1}}}) {
    people: edges {
      person: node {
        fields {
          slug
        }
        frontmatter {
          title
          name
          profileImage {
            publicURL
          }
        }
        excerpt
      }
    }
    totalCount
  }
  administrators: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 2}}}) {
    people: edges {
      person: node {
        fields {
          slug
        }
        frontmatter {
          title
          name
          profileImage {
            publicURL
          }
        }
        excerpt
      }
    }
    totalCount
  }
  researchers: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 3}}}) {
    people: edges {
      person: node {
        fields {
          slug
        }
        frontmatter {
          title
          name
          profileImage {
            publicURL
          }
        }
        excerpt
      }
    }
    totalCount
  }
  students: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 4}}}) {
    people: edges {
      person: node {
        fields {
          slug
        }
        frontmatter {
          title
          name
          profileImage {
            publicURL
          }
        }
        excerpt
      }
    }
    totalCount
  }
  past_members: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 5}}}) {
    people: edges {
      person: node {
        fields {
          slug
        }
        frontmatter {
          title
          name
          profileImage {
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