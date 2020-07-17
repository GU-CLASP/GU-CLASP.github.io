import React from "react"
import { Row, Col, Container } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"

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
            <Row>
                <Col>
                    <header class="jumbotron subhead mb-0" id="overview" >
                        <p class="lead"> University of Gothenburg  </p>
                        <br></br>
                        <div style={{ fontSize: "2rem" }}>The Centre for Linguistic Theory and Studies in Probability</div>
                        {/* <h1>The Centre for Linguistic Theory and Studies in Probability</h1> */}
                    </header>
                </Col>
            </Row>
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
        "href": "/news",
        "linkToMDFile": false,
        "MDFileCustomID": null,
        "hasSubmenu": false
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
                "href": "/event?type=seminars",
                "linkToMDFile": false,
                "MDFileCustomID": null,
                "hasSubmenu": false
            },
            {
                "title": "Conference",
                "href": "/event?type=conference",
                "linkToMDFile": false,
                "MDFileCustomID": null,
                "hasSubmenu": false
            },
            {
                "title": "Workshops",
                "href": "/event?type=workshops",
                "linkToMDFile": false,
                "MDFileCustomID": null,
                "hasSubmenu": false
            }
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
        "title": "Research",
        "href": null,
        "linkToMDFile": false,
        "MDFileCustomID": null,
        "hasSubmenu": true,
        "submenu": [
            {
                "title": "Language and Perception group",
                "href": null,
                "linkToMDFile": false,
                "MDFileCustomID": null,
                "hasSubmenu": true,
                "submenu": [
                    {
                        "title": "About",
                        "href": null,
                        "linkToMDFile": true,
                        "MDFileCustomID": "about-Language-and-Perception-research-group-id",
                        "hasSubmenu": false
                    },
                    {
                        "title": "Reading group",
                        "href": null,
                        "linkToMDFile": true,
                        "MDFileCustomID": "reading-group-Language-and-Perception-research-group-id",
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
                                "title": "RoM",
                                "href": null,
                                "linkToMDFile": true,
                                "MDFileCustomID": "RoM",
                                "hasSubmenu": false
                            },
                            {
                                "title": "APL",
                                "href": null,
                                "linkToMDFile": true,
                                "MDFileCustomID": "APL",
                                "hasSubmenu": false
                            },
                            {
                                "title": "CSoc",
                                "href": null,
                                "linkToMDFile": true,
                                "MDFileCustomID": "CSoc",
                                "hasSubmenu": false
                            },
                            {
                                "title": "ML-V&L",
                                "href": null,
                                "linkToMDFile": true,
                                "MDFileCustomID": "ML-V&L",
                                "hasSubmenu": false
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Dialogue reading group",
                "href": null,
                "linkToMDFile": true,
                "MDFileCustomID": "Dialogue-reading-group-id",
                "hasSubmenu": false
            },
            {
                "title": "Machine Learning Group",
                "href": null,
                "linkToMDFile": true,
                "MDFileCustomID": "Machine-learning-group",
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
    }
]