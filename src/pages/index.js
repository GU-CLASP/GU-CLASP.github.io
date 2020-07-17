import React from "react"
import Layout from "../components/layout/layout"
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";

export default function Home(props) {
    return (
        <Layout>
            <MDBContainer
                className="p-0"
            >
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1 p-0"
                >
                    <MDBCarouselInner>

                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="/img/1576352_claspinvigning-970x300.jpg"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Welcome to CLASP</h3>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="img-fluid d-block w-100"
                                    src="/img/unnamed.jpg"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Probability and Meaning Conference</h3>
                                <a href="https://sites.google.com/view/pam2020/home">PaM2020</a>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="/img/unnamed -2.jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">13th International Conference on Computational Semantics</h3>
                                <a href="https://sites.google.com/view/iwcs2019/home">IWCS2019</a>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
            <Row>
                <Col
                    className="main-page-col-margin"
                >
                    <p>CLASP is concerned both with understanding the cognitive foundations of language and developing efficient language technology. We work at the interface of computational linguistics/natural language processing, theoretical linguistics, and cognitive science.
The centre is funded by a 10 year grant from the Swedish Research Council (2015-2025). The funding from the Swedish Research Council and GU grant allows recruitment of prof. Shalom Lappin, a senior lecturer, a researcher/project coordinator, 12 PhD and 9 postdoctoral research positions. The funding also provides means for workshops, conferences and visits of guest researchers to Gothenburg. CLASP will bring together researchers in theoretical linguistics, computational linguistics, logic, AI, cognitive psychology, and robotics.</p>
                </Col>
            </Row>
            {props.data.latest_news.totalCount > 0 &&
                <div>
                    <Row>
                        <Col
                            className="main-page-col-margin"
                        >
                            <h1 className="text-center">Recent News</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        {props.data.latest_news.news.map((entry, index) => {
                            const news_entry = entry.news_entry
                            return (
                                <Col
                                    className="feature-item col-12 col-md-4">
                                    <p className="p-0 ml-0">{news_entry.frontmatter.date}</p>
                                    <a href={news_entry.fields.slug}>{news_entry.frontmatter.title}</a>
                                    <hr />
                                    <img className="rounded mx-auto d-block" src={news_entry.frontmatter.bannerImage.publicURL}></img>
                                    <hr />
                                    <p>{news_entry.excerpt}</p>
                                </Col>
                            )
                            // return getPerson(person, index != 0)
                        })}
                    </Row>
                </div>
            }

            <hr /><Row>
                <Col
                    className="main-page-col-margin"
                >
                    <h1 className="text-center">
                        Directors and Administrator
        </h1>
                    <hr />
                </Col>
            </Row>
            <Row>

                {props.data.directors.totalCount > 0 &&
                    <Col
                        className="feature-item col-12 col-md-4 ">
                        <p className="p-0 ml-0">Director of CLASP</p>
                        <a href={props.data.directors.people[0].person.fields.slug}>
                            {props.data.directors.people[0].person.frontmatter.name}
                        </a>
                        <hr />
                        {props.data.directors.people[0].person.frontmatter.profileImage ? <Image className="rounded mx-auto d-block" src={props.data.directors.people[0].person.frontmatter.profileImage.publicURL} roundedCircle /> : <Person style={{ width: "100%", height: "auto" }} />}
                        <hr />
                        <p>
                            {props.data.directors.people[0].person.excerpt}
                        </p>
                    </Col>
                }
                {props.data.associate_directors.totalCount > 0 &&
                    <Col
                        className="feature-item col-12 col-md-4"
                    >
                        <p className="p-0 ml-0">Associate Director</p>
                        <a href={props.data.associate_directors.people[0].person.fields.slug}>
                            {props.data.associate_directors.people[0].person.frontmatter.name}
                        </a>
                        <hr />
                        {props.data.associate_directors.people[0].person.frontmatter.profileImage ? <Image className="rounded mx-auto d-block" src={props.data.associate_directors.people[0].person.frontmatter.profileImage.publicURL} roundedCircle /> : <Person style={{ width: "100%", height: "auto" }} />}
                        <hr />
                        <p>
                            {props.data.associate_directors.people[0].person.excerpt}
                        </p>
                    </Col>
                }
                {props.data.administrators.totalCount > 0 &&
                    <Col
                        className="feature-item col-12 col-md-4"
                    >
                        <p className="p-0 ml-0">Administrator</p>
                        <a href={props.data.administrators.people[0].person.fields.slug}>
                            {props.data.administrators.people[0].person.frontmatter.name}
                        </a>
                        <hr />
                        {props.data.administrators.people[0].person.frontmatter.profileImage ? <Image className="rounded mx-auto d-block" src={props.data.administrators.people[0].person.frontmatter.profileImage.publicURL} roundedCircle /> : <Person style={{ width: "100%", height: "auto" }} />}
                        <hr />
                        <p>
                            {props.data.administrators.people[0].person.excerpt}
                        </p>
                        <hr />
                    </Col>
                }
            </Row>
            <hr />
            <Row>
                <Col sm={2}>
                    <p> Founded By</p>
                    <img src="img/1278654_vr_logo.png"></img>
                </Col>
                <Col sm={10}>
                    <p>The centre is funded by a 10 year grant from the Swedish Research Council (2015-2025). The funding from the Swedish Research Council and GU grant allows recruitment of prof. Shalom Lappin, a senior lecturer, a researcher/project coordinator, 12 PhD and 9 postdoctoral research positions. The funding also provides means for workshops, conferences and visits of guest researchers to Gothenburg. CLASP will bring together researchers in theoretical linguistics, computational linguistics, logic, AI, cognitive psychology, and robotics.</p>
                </Col>
            </Row>
        </Layout>
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
  latest_news: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/news//"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
    news: edges {
      news_entry: node {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          bannerImage {
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