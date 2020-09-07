import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import HeaderComponent from "../header/header"
import FooterComponent from "../footer/footer"
import { Helmet } from "react-helmet"

export default function LayoutSidebarNonSticky(props) {
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
        <script type="text/javascript" defer="defer" src="/js/recruitments.js"></script>
      </Helmet>
      <Row>
        <HeaderComponent></HeaderComponent>
      </Row>
      <Row id="recruitments-page">
        <Container>
          {props.mainPage ?
            <div class="row" style={{ paddingTop: 20, paddingBottom: 20 }}>
              <Col class="col-12 col-md-4">
                <nav class="bs-docs-sidebar">
                  <ul id="recruitment-nav" class="nav nav-list bs-docs-sidenav">
                    {props.sidebarData.active.length > 0 &&
                      <li class="nav-item"><a class="nav-link sidebarItem">Active</a></li>
                    }
                    {props.sidebarData.active.map((item, index) => {
                      if (props.slug == item.link) {
                        return <li class="nav-item"><a class="nav-link sidebarItem active" style={{ paddingLeft: 35, fontSize: 14 }} href={item.link}> {item.title} </a></li>
                      }
                      else {
                        return <li class="nav-item"><a class="nav-link sidebarItem" style={{ paddingLeft: 35, fontSize: 14 }} href={item.link}> {item.title} </a></li>
                      }
                    })}
                    {props.sidebarData.past.length > 0 &&
                      <li class="nav-item"><a class="nav-link sidebarItem" >Past</a></li>
                    }
                    {props.sidebarData.past.map((item, index) => {
                      if (props.slug == item.link) {
                        return <li class="nav-item"><a class="nav-link sidebarItem active" style={{ paddingLeft: 35, fontSize: 14 }} href={item.link}> {item.title} </a></li>
                      }
                      else {
                        return <li class="nav-item"><a class="nav-link sidebarItem" style={{ paddingLeft: 35, fontSize: 14 }} href={item.link}> {item.title} </a></li>

                      }
                    })}
                  </ul>
                </nav>
              </Col>
              <div id="recruitments-content" class="col-md-8 d-none d-md-block">
                {props.children}
              </div>
            </div>
            :
              <div class="row" style={{ paddingTop: 20, paddingBottom: 20 }}>
              <Col class="col-md-4 d-none d-md-block">
                <nav class="bs-docs-sidebar">
                  <ul id="recruitment-nav" class="nav nav-list bs-docs-sidenav">
                    {props.sidebarData.active.length > 0 &&
                      <li class="nav-item"><a class="nav-link sidebarItem">Active</a></li>
                    }
                    {props.sidebarData.active.map((item, index) => {
                      if (props.slug == item.link) {
                        return <li class="nav-item"><a class="nav-link sidebarItem active" style={{ paddingLeft: 35, fontSize: 14 }} href={item.link}> {item.title} </a></li>
                      }
                      else {
                        return <li class="nav-item"><a class="nav-link sidebarItem" style={{ paddingLeft: 35, fontSize: 14 }} href={item.link}> {item.title} </a></li>
                      }
                    })}
                    {props.sidebarData.past.length > 0 &&
                      <li class="nav-item"><a class="nav-link sidebarItem" >Past</a></li>
                    }
                    {props.sidebarData.past.map((item, index) => {
                      if (props.slug == item.link) {
                        return <li class="nav-item"><a class="nav-link sidebarItem active" style={{ paddingLeft: 35, fontSize: 14 }} href={item.link}> {item.title} </a></li>
                      }
                      else {
                        return <li class="nav-item"><a class="nav-link sidebarItem" style={{ paddingLeft: 35, fontSize: 14 }} href={item.link}> {item.title} </a></li>

                      }
                    })}
                  </ul>
                </nav>
              </Col>
              <div id="recruitments-content" class="col-12 col-md-8">
                {props.children}
              </div>

            </div>
          }
        </Container>
      </Row>
      <Row>
        <FooterComponent></FooterComponent>
      </Row>
    </Container>
  )
}