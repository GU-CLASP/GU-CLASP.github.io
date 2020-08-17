import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import queryString from 'query-string'
import NotFound from "./404"
import { Helmet } from "react-helmet"

export default function Event(props) {
  var search = props.location.search ? queryString.parse(props.location.search) : {}
  const postsPerPage = 10
  var content
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
      var numPages = Math.ceil(props.data.seminars.totalCount / postsPerPage)
      var page = search.page
      if (isNaN(page)) {
        page = 1
      }
      var upperBound = (page * postsPerPage) - 1
      var lowerBound = (page - 1) * postsPerPage
      var isEmpty = props.data.seminars.totalCount > 0 ? false : true
      content = (
        <div>
          {isEmpty ?
            <div class="row">
              No seminars at the time
            </div>
            :
            <div>
              {seminars.map((seminar, index) => {
                if (index <= upperBound && index >= lowerBound) {
                  seminar = seminar.seminar
                  return getSeminar(seminar)
                }
              })}
              <ul class="pagination" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                padding: 0,
              }}>
                {page == 1 ?
                  <li class="page-item disabled">
                    <a class="page-link" href={"/event?type=seminars&page=" + (page - 1)} aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  :
                  <li class="page-item">
                    <a class="page-link" href={"/event?type=seminars&page=" + (page - 1)} aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                }

                {Array.apply(0, Array(numPages)).map(function (x, i) {
                  var href = "/event?type=seminars&page=" + (i + 1)
                  if (page == (i + 1)) {
                    return (<li class="page-item active"><a class="page-link" href={href}>{i + 1}</a></li>)
                  }
                  else {
                    return (<li class="page-item"><a class="page-link" href={href}>{i + 1}</a></li>)
                  }
                })}
                {page == numPages ?
                  <li class="page-item disabled">
                    <a class="page-link" href={"/event?type=seminars&page=" + (parseInt(page) + 1)} aria-label="Previous">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                  :
                  <li class="page-item">
                    <a class="page-link" href={"/event?type=seminars&page=" + (parseInt(page) + 1)} aria-label="Previous">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                }
              </ul>
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
            <div class="row">
              No conferences at the time
            </div>
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
            <div class="row">
              No workshops at the time
            </div>
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
  return (
    <Layout>
      {content}
    </Layout>
  )
}

function getSeminar(seminar) {
  return (
    <div class="row event-row ml-0 mr-0">
      <div class="col">
        <div class="row">
          <div class="col">
            <h4>
              <Link to={seminar.fields.slug}>
                {seminar.frontmatter.title}
              </Link>
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>Presented by: {seminar.frontmatter.lecturer}</p>
          </div>
          <div class="col">
            {seminar.frontmatter.slides && <p><a href={seminar.frontmatter.slides.publicURL}>Slides</a></p>}
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <p>Duration: {seminar.frontmatter.duration}</p>
          </div>
          <div class="col-12 col-md-4">
            <p>On: {seminar.frontmatter.date}</p>
          </div>
          <div class="col-12 col-md-4">
            <p>Location: {seminar.frontmatter.venue}</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              {seminar.excerpt}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function getConference(conference) {
  return (
    <div class="row event-row ml-0 mr-0">
      <div class="col">
        <div class="row">
          <div class="col">
            <h4>
              <Link to={conference.fields.slug}>
                {conference.frontmatter.title}
              </Link>
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <p>Duration: {conference.frontmatter.duration}</p>
          </div>
          <div class="col-12 col-md-4">
            <p>On: {conference.frontmatter.date}</p>
          </div>
          <div class="col-12 col-md-4">
            <p>Location: {conference.frontmatter.venue}</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              {conference.excerpt}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function getWorkshop(workshop) {
  return (
    <div class="row event-row">
      <div class="col">
        <div class="row">
          <div class="col">
            <h4>
              <Link to={workshop.fields.slug}>
                {workshop.frontmatter.title}
              </Link>
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>Cordinated by: {workshop.frontmatter.cordinators}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <p>Duration: {workshop.frontmatter.duration}</p>
          </div>
          <div class="col-12 col-md-4">
            <p>On: {workshop.frontmatter.date}</p>
          </div>
          <div class="col-12 col-md-4">
            <p>Location: {workshop.frontmatter.venue}</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              {workshop.excerpt}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    seminars: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/events/seminars//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
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
    conferences: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/events/conferences//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
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
    workshops: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/events/workshops//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
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