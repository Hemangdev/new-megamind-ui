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
                Get ready to ace your IELTS exam with our expert test preparation services. Our personalized coaching and practice materials are designed to help you reach your full potential and gain confidence in your test-taking abilities.

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
                Choosing the right university is crucial. We’ll assist you in selecting institutions that align with your academic and personal goals. Our team will guide you through every step of the application process, ensuring you present a standout application that showcases your strengths.

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
                Managing tuition fees and planning your finances can be daunting. We offer tailored support to help you understand fee structures, explore financial aid options, and create a solid financial plan to cover your educational expenses without stress.

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
                Navigating visa requirements can be complex. Our experienced visa consultants handle all aspects of the application process, ensuring your paperwork is complete and accurate. We provide expert advice to help you secure the necessary visa for your studies abroad.

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
                Finding the perfect place to live is essential for a successful study experience. We help you locate and secure accommodation that suits your preferences and budget, whether it’s university housing or private rental options.

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
                Once your visa is approved, we’re here to support you as you transition to your new location. From orientation services to connecting you with local resources, we ensure you’re well-prepared and settled for a smooth start to your academic journey.
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
