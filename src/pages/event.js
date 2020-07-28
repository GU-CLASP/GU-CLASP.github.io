import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import queryString from 'query-string'
import NotFound from "./404"
import { Helmet } from "react-helmet"
import { Row, Col } from "react-bootstrap"

export default function Event(props) {
    var search = props.location.search ? queryString.parse(props.location.search) : {}
    var content
    if (Object.keys(search).length === 0) {
        content = (
            <div>
                <Helmet>
                    <style type="text/css">{`
                        .google-calender-iframe{
                            border: 0;
                            width: 100%;
                            height: 600px;
                            border: none;
                            overflow: hidden;
                        }
                    `}</style>
                </Helmet>
                <div class="d-none d-md-block">
                    <iframe class="google-calender-iframe" src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FStockholm&amp;src=ZGR2azI4bnI5azBmc21wZGNyOTh0YzdrYXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23795548&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=1"></iframe>
                </div>
                <div class="d-block d-md-none">
                    <iframe class="google-calender-iframe" src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FStockholm&amp;src=ZGR2azI4bnI5azBmc21wZGNyOTh0YzdrYXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23795548&amp;mode=AGENDA&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1"></iframe>
                </div>
            </div>
        )
    }
    else {
        switch (search.type) {
            case "calendar":
                content = (
                    <div>
                        <Helmet>
                            <style type="text/css">{`
                                .google-calender-iframe{
                                    border: 0;
                                    width: 100%;
                                    height: 600px;
                                    border: none;
                                    overflow: hidden;
                                }
                            `}</style>
                        </Helmet>
                        <div class="d-none d-md-block">
                            <iframe class="google-calender-iframe" src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FStockholm&amp;src=ZGR2azI4bnI5azBmc21wZGNyOTh0YzdrYXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23795548&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=1"></iframe>
                        </div>
                        <div class="d-block d-md-none">
                            <iframe class="google-calender-iframe" src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FStockholm&amp;src=ZGR2azI4bnI5azBmc21wZGNyOTh0YzdrYXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23795548&amp;mode=AGENDA&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1"></iframe>
                        </div>
                    </div>
                )
                break;
            case "seminars":
                var seminars = props.data.seminars.seminars
                var isEmpty = props.data.seminars.totalCount > 0 ? false : true
                content = (
                    <div>
                        {isEmpty ?
                            <Row>
                                No seminars at the time
                            </Row>
                            :
                            <div>
                                {seminars.map((seminar, index) => {
                                    seminar = seminar.seminar
                                    return getSeminar(seminar)
                                })}
                            </div>
                        }
                    </div>
                )
                break;
            case "conference":
                var conferences = props.data.conferences.conferences
                var isEmpty = props.data.conferences.totalCount > 0 ? false : true
                content = (
                    <div>
                        {isEmpty ?
                            <Row>
                                No conferences at the time
                            </Row>
                            :
                            <div>
                                {conferences.map((conference, index) => {
                                    conference = conference.conference
                                    return getConference(conference)
                                })}
                            </div>
                        }
                    </div>
                )
                break;
            case "workshops":
                var workshops = props.data.workshops.workshops
                var isEmpty = props.data.workshops.totalCount > 0 ? false : true
                content = (
                    <div>
                        {isEmpty ?
                            <Row>
                                No workshops at the time
                            </Row>
                            :
                            <div>
                                {workshops.map((workshop, index) => {
                                    workshop = workshop.workshop
                                    return getWorkshop(workshop)
                                })}
                            </div>
                        }
                    </div>
                )
                break;
            default:
                return NotFound()
                break;
        }
    }
    return (
        <Layout>
            {content}
        </Layout>
    )
}

function getSeminar(seminar) {
    return (
        <Row className="event-row">
            <Col>
                <Row>
                    <Col>
                        <h4>
                            <Link to={seminar.fields.slug}>
                                {seminar.frontmatter.title}
                            </Link>
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Presented by: {seminar.frontmatter.lecturer}</p>
                    </Col>
                    <Col>
	                {seminar.frontmatter.slides && <p><a href={seminar.frontmatter.slides.publicURL}>Slides</a></p>}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <p>Duration: {seminar.frontmatter.duration}</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <p>On: {seminar.frontmatter.date}</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <p>Location: {seminar.frontmatter.venue}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            {seminar.excerpt}
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

function getConference(conference) {
    return (
        <Row className="event-row">
            <Col>
                <Row>
                    <Col>
                        <h4>
                            <Link to={conference.fields.slug}>
                                {conference.frontmatter.title}
                            </Link>
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <p>Duration: {conference.frontmatter.duration}</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <p>On: {conference.frontmatter.date}</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <p>Location: {conference.frontmatter.venue}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            {conference.excerpt}
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

function getWorkshop(workshop) {
    return (
        <Row className="event-row">
            <Col>
                <Row>
                    <Col>
                        <h4>
                            <Link to={workshop.fields.slug}>
                                {workshop.frontmatter.title}
                            </Link>
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Cordinated by: {workshop.frontmatter.cordinators}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <p>Duration: {workshop.frontmatter.duration}</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <p>On: {workshop.frontmatter.date}</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <p>Location: {workshop.frontmatter.venue}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            {workshop.excerpt}
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export const query = graphql`
{
  seminars: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/events/seminars//"}}}, sort: {order: DESC, fields: frontmatter___date}) {
    seminars: edges {
      seminar: node {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD MMM, YYYY")
          time: date(formatString: "HH:mm")
          lecturer
          venue
          duration
	  slides {
	      publicURL
    	  }
        }
        excerpt
      }
    }
    totalCount
  }
  conferences: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/events/conferences//"}}}, sort: {order: DESC, fields: frontmatter___date}) {
    conferences: edges {
      conference: node {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD MMM, YYYY")
          venue
          duration
        }
        excerpt
      }
    }
    totalCount
  }
  workshops: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/events/workshops//"}}}, sort: {order: DESC, fields: frontmatter___date}) {
    workshops: edges {
      workshop: node {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD MMM, YYYY")
          cordinators
          venue
          duration
        }
        excerpt
      }
    }
    totalCount
  }
}
`
