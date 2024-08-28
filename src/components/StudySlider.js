import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import StudyImage from "../images/studysliders/tob.png";
import StudyImage2 from "../images/studysliders/town.png";
import StudyImage4 from "../images/studysliders/img.jpg";
import StudyImage5 from "../images/studysliders/irlend.jpg";
import StudyImage8 from "../images/studysliders/usa.jpeg";
import StudyImage6 from "../images/studysliders/uk.jpeg";
import StudyImage7 from "../images/studysliders/germany.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Country from "./country/Country";

const StudySlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section class="studyslidt" style={{ background: "#f9fafc" }}>
      <Container fluid>
        <Row className="pt-5" style={{ width: "80%", margin: "auto" }}>
          <Col sm={12} md={12} className="text-center">
            <h2 className="display-6 fw-medium m-0 pb-5">
              {"Explore our top study destinations "}
            </h2>
          </Col>

          <Col sm={12} md={12} className="text-right">
            <Carousel
              responsive={responsive}
              additionalTransfrom={80}
              arrows
              autoPlay
              autoPlaySpeed={4000}
              centerMode={false}
              className=""
              containerClass="container-with-dots innertslide"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={100}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className="card-boxer">
                <NavLink to="/country?code=CANADA" exact target="_blank">
                  <img
                    className="img-fluid"
                    alt="100%x280"
                    src={StudyImage}
                    title="Study in Canada"
                  />
                  <h5 className="Box-Title">Study in Canada</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="/country?code=GERMANY" exact target="_blank">
                  <img
                    className="img-fluid border-radius"
                    alt="100%x280"
                    src={StudyImage7}
                    title="Study in Germany"
                  />
                  <h5 className="Box-Title">Study in Germany</h5>
                </NavLink>
                <Outlet />
              </div>

              <div className="card-boxer">
                <NavLink to="/country?code=Australia" exact target="_blank">
                  <img
                    className="img-fluid"
                    alt="100%x280"
                    src={StudyImage2}
                    title="Study in Australia"
                  />
                  <h5 className="Box-Title">Study in Australia</h5>
                </NavLink>
                <Outlet />
              </div>

              <div className="card-boxer">
                <NavLink to="/country?code=UK" exact target="_blank">
                  <img
                    className="img-fluid border-radius"
                    alt="100%x280"
                    src={StudyImage6}
                    title="Study in U.K."
                  />
                  <h5 className="Box-Title">Study in U.K.</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="country?code=New Zealand" exact target="_blank">
                  <img
                    className="img-fluid border-radius"
                    alt="100%x280"
                    src={StudyImage4}
                    title="Study in New Zealand"
                  />
                  <h5 className="Box-Title">Study in Switzerland</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="/country?code=IRELAND" exact target="_blank">
                  <img
                    className="img-fluid border-radius"
                    alt="100%x280"
                    src={StudyImage5}
                    title="Study in Ireland"
                  />
                  <h5 className="Box-Title">Study in Ireland</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="/country?code=USA" exact target="_blank">
                  <img
                    className="img-fluid border-radius"
                    alt="100%x280"
                    src={StudyImage8}
                    title="Study in Ireland"
                  />
                  <h5 className="Box-Title">Study in USA</h5>
                </NavLink>
              </div>
            </Carousel>

          </Col>
        </Row>
      </Container>

      <Routes>
        <Route exact path="/country" element={<Country />} />
      </Routes>
    </section>
  );
};

export default StudySlider;
