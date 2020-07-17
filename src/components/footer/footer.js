import React from "react"
import {Container, Row, Col } from 'react-bootstrap';

export default function FooterComponent({ props }) {
    return (
            <footer id="footer" style={{width:"100%"}}>
                    <Row>
                        <Col className="col-12 col-md-4">
                            <div class="footer-header-type-style">Contact Information</div>
                            <p><b>Office Hours: </b>Monday-Friday (9.00am - 5.00pm)</p>
                            <p><b>Phone: </b>Phone +46 31-786 0000</p>
                            <p><b>Other website: </b>clasp.gu.se</p>
                            <a href="mailto:your.email@uni.edu">Email</a>
                        </Col>  
                        <Col className="col-12 col-md-4">
                            <a href="https://gu.se/"><img style = {{ width: "150px"}}
                            src="/img/1200px-Goteborgs_universitet_seal.svg.png" alt="Logo"/></a>
                        </Col>
                        <Col className="col-12 col-md-4">
                            {/* <h3>Address</h3> */}
                            <div class="footer-header-type-style">Address</div>
                            <p>University of Gothenburg, Sweden<br/>
                                Box 100, S-405 30 Gothenburg<br/>
                            </p>
                            <a href="https://goo.gl/maps/kga7QHae7wfKfKNfA">Show Map</a>
                        </Col>
                    </Row>
            </footer>
    )
}