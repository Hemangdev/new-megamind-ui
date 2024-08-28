import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./service.css";
import { Link } from "react-router-dom";
import GridImage from "../../images/services/chat.png";
import GridImage1 from "../../images/services/google-forms.png";
import GridImage2 from "../../images/services/advice.png";
import GridImage3 from "../../images/services/award.png";
import GridImage4 from "../../images/services/world.png";
import GridImage5 from "../../images/services/plane.png";
import GridImage6 from "../../images/services/plus.png";
import { BsArrowRightCircle } from "react-icons/bs";

function Services() {
  return (
    <>
      <Container className="py-5 service-bg" fluid>
        <Row className="" style={{ width: "80%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-2 fw-bold text-white">Our Services</h2>
          </Col>

          <Col sm={12} md={7} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="py-5" fluid>
        <Row className="" style={{ width: "75%", margin: "auto" }}>
          <Col sm={12} md={12} className="py-4">
            {/* <h2 className="display-6 fw-bold text-center text-black">
              Our Services
            </h2> */}
          </Col>

          <Col sm={12} md={4} className="pt-4">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold py-3">
                Test   <br />
                Preparation
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Our counsellors provide detailed guidance on the process of getting admitted to renowned universities or college.
                </span>
              </div>
              
            </div>
          </Col>
          <Col sm={12} md={4} className="pt-4">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage1} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold  py-3">
                University Shortlist <br />
                & Application 
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Get step-by-step guidance for study abroad programs applications processe, visa rules and choice of college.
                </span>
              </div>
              
            </div>
          </Col>
          <Col sm={12} md={4} className="pt-4">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage2} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold">
                Fee Payment  <br />  
                &  <br /> Finance Planning
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Thinking of studying abroad but don't know what course to select? Find out how to choose the perfect program for you.
                </span>
              </div>
               
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage3} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold">
                Visa <br />  
                Service 
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                Megamind helps Students can acquire scholarships from renowned universities as per their academic performances.
                </span>
              </div>
              
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage4} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold py-3">
                Accommodation
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                Understanding visa requirements: Familiarize yourself with the visa requirements of the country you plan to study in.
                </span>
              </div>
             
            </div>
          </Col>

          <Col sm={12} md={4} className="">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage5} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold py-3">
                Post Visa <br />
                Service
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                Prepare for your study overseas journey with our helpful pre-departure briefings. Trust us to support you all the way.
                </span>
              </div>
              
            </div>
          </Col>

          <Col sm={12} md={4} className=""></Col>
          {/* removed by Nikky developer */}
          {/* <Col sm={12} md={4} className="">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage6} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold py-3">
                  Value Added <br />
                  Services
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                Megamind offers a range of Value Added Services in order to enhance the journey of its students.
                </span>
              </div>
            
            </div>
          </Col> */}

          <Col sm={12} md={4} className=""></Col>
        </Row>
      </Container>
    </>
  );
}
export default Services;
