import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./item.css";

function Items({ data }) {
  return (
    <Container className="partner_partner" fluid>
      <Row className="" style={{ width: "100%", margin: "auto" }}>
        {data.map((value) => {
          const { id, image, title, subdescription, description, imagin } =
            value;
          return (
            <Col sm={12} md={4} className=" my-3" key={id}>
              <div className="card_body__sf7JO bg-light text-center textcet py-3">
                <Row className="">
                  <Col sm={6} md={4} className="d-mega">
                    <div>
                      <img src={image} alt="" className="img-fluid" />
                    </div>
                  </Col>
                  <Col sm={6} md={8}>
                    <div>
                      <h3 className="card_card-title___2VQ1 ">{title}</h3>
                      <p className="card_details__thp1e">{subdescription}</p>

                      <div class="d-flex justify-content-between align-items-center">
                        <p class="card_details__thp1e p-0 m-0">
                          {description}
                        </p>
                        <Link to="">
                        <img
                          class="card_mobile-card"
                          alt=""
                          src={imagin}
                        />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Items;
