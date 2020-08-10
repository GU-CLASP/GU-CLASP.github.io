import React from "react"
import { Row, Col } from 'react-bootstrap';

export default function FooterComponent({ props }) {
  return (
    <footer id="footer" style={{ width: "100%" }}>
      <Row>
        <Col className="col-12 col-md-4">
          <div class="footer-header-type-style">Contact Information</div>
          <p><b>Office Hours: </b>Monday-Friday (9.00am - 5.00pm)</p>
          <p><b>Phone: </b>Phone +46 31-786 0000</p>
          <p><b>E-mail: </b><a href="mailto:susanna.myyry@gu.se">susanna.myyry@gu.se</a></p>
        </Col>
        <Col className="col-12 col-md-4">
          <div class="footer-header-type-style">Quick Links</div>
          <p><a href="/news">News</a></p>
          <p><a href="https://clasp.gu.se/recruitment" target="_blank">Recruitment</a></p>
          <p><a href="https://clasp.gu.se" target="_blank">CLASP GU page</a></p>
          <p><a href="https://www.gu.se" target="_blank">University of Gothenburg</a></p>
        </Col>
        <Col className="col-12 col-md-4">
          <div class="footer-header-type-style">Address</div>
          <p>University of Gothenburg<br />
                        Department of Philosophy, Linguistics and Theory of Science <br />
                        CLASP - Centre for Linguistic Theory and Studies in Probability<br />
                        P.o. Box 200<br />
                        se-405 30 GOTHENBURG<br />
                        SWEDEN</p>
          <a href="https://goo.gl/maps/kga7QHae7wfKfKNfA" target="_blank">Show Map</a>
        </Col>
      </Row>
    </footer>
  )
}