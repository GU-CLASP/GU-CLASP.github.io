import React from "react"
import LayoutSidebar from "../components/layout/layout_sidebar"
import { graphql, Link } from "gatsby"
import { Row, Col, Image } from "react-bootstrap"
import { Person } from 'react-bootstrap-icons';

export default function People(props) {
  var sidebarData = []
  if (props.data.directors.totalCount > 0) {
    sidebarData.push({
      "title": "Director",
      "link": "#director"
    })
  }
  if (props.data.associate_directors.totalCount > 0) {
    sidebarData.push({
      "title": "Associate Director",
      "link": "#associate-directors"
    })
  }
  if (props.data.administrators.totalCount > 0) {
    sidebarData.push({
      "title": "Administrator",
      "link": "#administrator"
    })
  }
  if (props.data.researchers.totalCount > 0) {
    sidebarData.push({
      "title": "Researchers",
      "link": "#researchers"
    })
  }
  if (props.data.students.totalCount > 0) {
    sidebarData.push({
      "title": "Doctoral Students",
      "link": "#doctoral-students"
    })
  }
  if (props.data.past_members.totalCount > 0) {
    sidebarData.push({
      "title": "Past Members",
      "link": "#past-members"
    })
  }
  return (
    <LayoutSidebar sidebarData={sidebarData}>
      <div>
        {props.data.directors.totalCount > 0 &&
          <Row>
            <Col>
              <Row>
                <Col className="people-col-margin" id="director">
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
          <Row >
            <Col>
              <Row>
                <Col className="people-col-margin" id="associate-directors">
                  <hr />
                  <h4 className="position-margin">Associate Director and Researcher</h4>
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
                <Col className="people-col-margin" id="administrator">
                  <hr />
                  <h4 className="position-margin">Administrator</h4>
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
                <Col className="people-col-margin" id="researchers">
                  <hr />
                  <h4 className="position-margin">Researchers</h4>
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
                <Col className="people-col-margin" id="doctoral-students">
                  <hr />
                  <h4 className="position-margin">Doctoral Students</h4>
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
                <Col className="people-col-margin" id="past-members">
                  <hr />
                  <h4 className="position-margin">Past Members</h4>
                  <hr />
                </Col>
              </Row>
              {props.data.past_members.people.map((person, index) => {
                return getPerson(person)
              })}
            </Col>
          </Row>
        }
      </div>
    </LayoutSidebar>
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
          <Col md={{ span: 3, offset: 1 }} style={{ paddingTop: "15px", paddingBottom: "15px" }}>
            {person.person.frontmatter.profileImage ? <Image style={{ maxHeight: "100%", width: "100%" }} src={person.person.frontmatter.profileImage.publicURL} roundedCircle /> : <Person style={{ width: "100%", height: "auto" }} />}
          </Col>
          <Col style={{ height: "fit-content", margin: "auto" }}>
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
    directors: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 0}, hideInSearchResults: {ne: true}}}) {
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
    associate_directors: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 1}, hideInSearchResults: {ne: true}}}) {
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
    administrators: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 2}, hideInSearchResults: {ne: true}}}) {
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
    researchers: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 3}, hideInSearchResults: {ne: true}}}) {
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
    students: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 4}, hideInSearchResults: {ne: true}}}) {
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
    past_members: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/people//"}}, frontmatter: {role: {eq: 5}, hideInSearchResults: {ne: true}}}) {
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