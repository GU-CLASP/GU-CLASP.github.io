import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import HeaderComponent from "../header/header"
import FooterComponent from "../footer/footer"
import { Helmet } from "react-helmet"

export default function LayoutSidebar(props) {
  return (
    <Container fluid>
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
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
        <script type="text/javascript" src="/js/base.js"></script>
      </Helmet>
      <Row>
        <HeaderComponent></HeaderComponent>
      </Row>
      <Row>
        <Container>
          <Row style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Col xs={6} md={4}>
              <div class="row-fluid">
                <nav class="span3 bs-docs-sidebar">
                  <ul class="nav nav-list bs-docs-sidenav bs-docs-sidenav-hide make-me-sticky">
                    {props.sidebarData.map((item, index) => {
                      return <li class="nav-item"><a class="nav-link sidebarItem" href={item.link}> {item.title} </a></li>
                    })}
                  </ul>
                </nav>
              </div>
            </Col>
            <Col xs={12} md={8}>
              {props.children}
            </Col>
            {props.showTOC &&
              <Col lg={2}>
                {props.headerText}
                <nav id="toc" data-toggle="toc" class="sticky-top"></nav>
              </Col>
            }
          </Row>
        </Container>
      </Row>
      <Row>
        <FooterComponent></FooterComponent>
      </Row>
    </Container>
  )
}