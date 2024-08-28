import React from "react";
import Gallery from "./Gallery";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Alluniversity() {

  return (
    <>
          <Container className="py-5 service-bg" fluid>
        <Row className="" style={{ width: "80%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-2 fw-bold text-white">All University</h2>
          </Col>

          <Col sm={12} md={7} className="py-5"></Col>
        </Row>
      </Container>
      <Gallery/>
    </>

  );

}
export default Alluniversity;