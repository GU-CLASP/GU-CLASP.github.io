import React from "react"
import Layout from "../components/layout/layout"
import { Row, Col, Container } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"


export default function Project(props) {
    return (
        <Layout>
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
            <div class="row-fluid">
                <div class="span12 content">
                    <div class="row-fluid">
                        <div class="span8">
                            <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1224.654331775908!2d11.985311746306564!3d57.695387630877555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67996ab509b62cc0!2sHumanisten%20-%20Humanistiska%20fakulteten!5e0!3m2!1ssv!2sse!4v1596878472178!5m2!1ssv!2sse"></iframe>
                        </div>
                        <div class="span4">
                            <div class="box_cont">
                                <h4>Contact</h4>
                                <br></br>
                                <h5>Shalom Lappin, Director</h5>
                                Phone: 46 (0)31 786 5019
                                <p>E-mail: <a href="mailto:shalom.lappin@gu.se">shalom.lappin@gu.se</a></p>
                                <br></br>
                                
                                <h5>Stergios Chatzikyriakidis, Associate Director and Researcher</h5>
                                <p>E-mail: <a href="mailto: stergios.chatzikyriakidis@gu.se"> stergios.chatzikyriakidis@gu.se</a></p>
                                <br></br>
                               
                                <h5>Susanna Myyry, Administrato</h5>
                                E-mail: <a href="mailto: susanna.myyry@gu.se">susanna.myyry@gu.se</a>
                                <hr></hr>
                                <h4>Visiting address</h4>
                                <p>University of Gothenburg, Sweden<br></br>
                                Renströmsgatan 6<br></br>
                                </p>
                                <hr></hr>
                                <h4>Phone</h4>
                                <p>+46 31-786 0000<br></br></p>
                                
                                <hr></hr>
                                <h4>Other website</h4> 
                                <a href="clasp.gu.se">clasp.gu.se</a>
                                
                                <hr></hr>
                                <h4>Office Hours:</h4>
                                <p>Monday-Friday (9.00am - 5.00pm)</p>
                                <hr></hr>
                                <p><a href="http://scholar.google.com">Google Scholar</a></p>
                                <p><a href="http://www.researchgate.net">ResearchGate</a></p>
                                <br></br>
                                <p>
                                <a href="https://www.linkedin.com/company/claspgu/" class="sb linkedin">LinkedIn</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}