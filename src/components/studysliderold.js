import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Country from "./country/Country";
import axios from 'axios';


const studysliderold = () => {
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
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };


  const [study_sliders, setData] = useState([]);
		
	  useEffect(() => {
	  axios.get("https://megamindonline.in/admin/webmanager/controller.php?command=GET_HOME_DATA_STUDY_DESTINATIONS")
	  .then((response) => {
		 setData(response.data.split(";").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	 });
	}, []);


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
          { study_sliders.map((sd) => 
			  (
				<React.Fragment>
				 <div className="card-boxer">
					<NavLink to={sd.split(",")[2]} exact target="_blank">
					  <img
						className="img-fluid"
						alt="100%x280"
						src={sd.split(",")[1]}
						title=""
					  />
					  <h5 className="Box-Title">{sd.split(",")[0]}</h5>
					</NavLink>
				  </div>
				</React.Fragment>
			  ))}
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

export default studysliderold;
