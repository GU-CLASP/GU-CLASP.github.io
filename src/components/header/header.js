import React from "react"
import { Row, Col, Container } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

var markdownData

export default function HeaderComponent(props) {
  markdownData = useStaticQuery(graphql`
      {
        allMarkdownRemark {
          pages: edges {
            page: node {
              fields {
                slug
              }
              frontmatter {
                MDFileCustomID
              }
            }
          }
        }
      }
    `)
  return (
    <Container>
      <Helmet>
        <script type="text/javascript" src="/js/jquery-3.5.1.min.js"></script>
        <link rel="stylesheet" type="text/css" media="all" href="/css/bootstrap.min.css" />
        <script type="text/javascript" src="/js/bootstrap.min.js"></script>
        {props.showTOC &&
          <link rel="stylesheet" href="https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css" />
        }
        {props.showTOC &&
          <script type="text/javascript" src="https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.js"></script>
        }
        <link rel="stylesheet" type="text/css" media="all" href="/css/theme.css" />
        <link rel="stylesheet" type="text/css" media="all" href="/css/style.css" />
        <link rel="stylesheet" type="text/css" media="all" href="/css/menu.css" />
        <script type="text/javascript" src="/js/base.js"></script>
      </Helmet>

      <header class="jumbotron subhead mb-0" id="overview" >
        <Row>
          <Col xs={12} md={3} id="clasp-header-logo" className="align-self-center">
            <img src="/img/clasp.png" href="https://clasp.gu.se" alt="The Centre for Linguistic Theory and Studies in Probability" />
          </Col>
          <Col xs={12} md={6} className="align-self-center">
            <div style={{ fontSize: "1.5rem" }}>The Centre for Linguistic Theory and Studies in Probability</div>
          </Col>
          <Col xs={12} md={3}>
            <img id="gu-header-logo" src="/img/gu-logo.png" href="gu.se" alt="University of Gothenburh" />
          </Col>
        </Row>
      </header>
      <nav class="navbar navbar-light navbar-expand-lg mainmenu border rounded-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav" style={{ width: "100%" }}>
            {menuData.map((item, index) => {
              if (item.hasSubmenu == false) {
                if (item.linkToMDFile) {
                  return <li class="col p-0 text-center"><a href={getMDFileLink(item.MDFileCustomID)}>{item.title}</a></li>
                }
                else {
                  return <li class="col p-0 text-center"><a href={item.href}>{item.title}</a></li>
                }
              }
              else {
                return getSubMenu(item)
              }
            })}
          </ul>
        </div>
      </nav>
    </Container>
  )
}

function getSubMenu(item) {
  return (
    <li class="col p-0 text-center dropdown">
      <a class="dropdown-toggle" aria-expanded="false">{item.title}</a>
      <ul class="dropdown-menu">
        {item.submenu.map((entry, index) => {
          if (entry.hasSubmenu == false) {
            if (entry.linkToMDFile) {
              return <li class="col p-0 text-center"><a href={getMDFileLink(entry.MDFileCustomID)}>{entry.title}</a></li>
            }
            else {
              return <li class="col p-0 text-center"><a href={entry.href}>{entry.title}</a></li>
            }
          }
          else {
            return getSubMenu(entry)
          }
        })}
      </ul>
    </li>
  )
}

function getMDFileLink(mdFileID) {
  if (mdFileID == null) {
    return "#"
  }
  var pages = markdownData.allMarkdownRemark.pages
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i]
    if (page.page.frontmatter.MDFileCustomID == mdFileID) {
      return page.page.fields.slug
    }
  }
  return "#"
}

var menuData = [
  {
    "title": "Home",
    "href": "/",
    "linkToMDFile": false,
    "MDFileCustomID": null,
    "hasSubmenu": false
  },
  {
    "title": "News",
    "href": "null",
    "linkToMDFile": false,
    "MDFileCustomID": null,
    "hasSubmenu": true,
    "submenu": [
      {
        "title": "News",
        "href": "/news",
        "linkToMDFile": false,
        "MDFileCustomID": null,
        "hasSubmenu": false
      },
      {
        "title": "Recruitment",
        "href": "/recruitment",
        "linkToMDFile": false,
        "MDFileCustomID": null,
        "hasSubmenu": false
      },
    ] 
  },
  {
    "title": "Events",
    "href": null,
    "linkToMDFile": false,
    "MDFileCustomID": null,
    "hasSubmenu": true,
    "submenu": [
      {
        "title": "Calendar",
        "href": "/event?type=calendar",
        "linkToMDFile": false,
        "MDFileCustomID": null,
        "hasSubmenu": false
      },
      {
        "title": "Seminars",
        "href": "/event?type=seminars&page=1",
        "linkToMDFile": false,
        "MDFileCustomID": null,
        "hasSubmenu": false
      },
      {
        "title": "Conferences & Workshops",
        "href": "/event?type=conference",
        "linkToMDFile": false,
        "MDFileCustomID": null,
        "hasSubmenu": false
      },
      {
        "title": "PaM 2020",
        "href": "https://sites.google.com/view/pam2020/home",
        "linkToMDFile": false,
        "MDFileCustomID": null,
        "hasSubmenu": false
      },
    ]
  },
  {
    "title": "Projects",
    "href": "/project",
    "linkToMDFile": false,
    "MDFileCustomID": null,
    "hasSubmenu": false
  },
  {
    "title": "Research Groups",
    "href": null,
    "linkToMDFile": false,
    "MDFileCustomID": null,
    "hasSubmenu": true,
    "submenu": [
      {
        "title": "Language and Perception",
        "href": null,
        "linkToMDFile": false,
        "MDFileCustomID": "research-lap",
        "hasSubmenu": true,
        "submenu": [
          {
            "title": "About",
            "href": null,
            "linkToMDFile": true,
            "MDFileCustomID": "research-lap",
            "hasSubmenu": false
          },
          {
            "title": "Reading group",
            "href": null,
            "linkToMDFile": true,
            "MDFileCustomID": "reading-lap",
            "hasSubmenu": false
          },
          {
            "title": "Courses",
            "href": null,
            "linkToMDFile": true,
            "MDFileCustomID": null,
            "hasSubmenu": true,
            "submenu": [
              {
                "title": "Representations of Meaning",
                "href": null,
                "linkToMDFile": true,
                "MDFileCustomID": "course-rom",
                "hasSubmenu": false
              },
              {
                "title": "Language, Action, and Perception",
                "href": null,
                "linkToMDFile": true,
                "MDFileCustomID": "course-apl",
                "hasSubmenu": false
              },
              {
                "title": "Sociolinguistics and Bilingualism for NLP",
                "href": null,
                "linkToMDFile": true,
                "MDFileCustomID": "course-csoc",
                "hasSubmenu": false
              },
              {
                "title": "ML Methods for Vision and Language",
                "href": null,
                "linkToMDFile": true,
                "MDFileCustomID": "course-ml-vl",
                "hasSubmenu": false
              }
            ]
          }
        ]
      },
      {
        "title": "Dialogue",
        "href": null,
        "linkToMDFile": true,
        "MDFileCustomID": "research-dialogue",
        "hasSubmenu": true,
        "submenu": [
          {
            "title": "About",
            "href": null,
            "linkToMDFile": true,
            "MDFileCustomID": "research-dialogue",
            "hasSubmenu": false
          },
          {
            "title": "Reading group",
            "href": null,
            "linkToMDFile": true,
            "MDFileCustomID": "reading-dialogue",
            "hasSubmenu": false
          },
        ]
      },
      {
        "title": "Machine Learning",
        "href": null,
        "linkToMDFile": true,
        "MDFileCustomID": "research-machine-learning",
        "hasSubmenu": false
      },
      {
        "title": "Type Theory",
        "href": null,
        "linkToMDFile": true,
        "MDFileCustomID": "research-type-theory",
        "hasSubmenu": false
      }
    ]
  },
  {
    "title": "People",
    "href": "/people",
    "linkToMDFile": false,
    "MDFileCustomID": null,
    "hasSubmenu": false
  },
  {
    "title": "Contact",
    "href": "/contact",
    "linkToMDFile": false,
    "MDFileCustomID": null,
    "hasSubmenu": false
  }
]