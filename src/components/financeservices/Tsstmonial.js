import React from "react";
import "react-tabs/style/react-tabs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carousel from "react-multi-carousel";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { useEffect, useState } from "react";
import axios from 'axios';
// import $ from 'jquery';


const Tsstmonial = () => {

	 const [student_testimonials, setData1] = useState([]);

		
	  useEffect(() => {
	  axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_HOME_DATA_STUDENT_TESTIMONIALS")
	  .then((response) => {
		 setData1(response.data.split(";").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	  });

	
	 }, []);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <>
      <Container fluid className="">
        <Row className="">
            <Col sm={12} md={12} className="text-center float-left mobile-left">
            
                <Carousel
                  responsive={responsive}
                  autoPlay
                  autoPlaySpeed={4000}
                  additionalTransfrom={80}
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
				
					  { student_testimonials.map((st) => 
					  (
					    <React.Fragment>
						  <div className="card cover2">
							{/* <h4>aman </h4> */}
							<Popup
							  trigger={
								<img
								  src={st.split(",")[1]}
								  alt="img name"
								  className="w-100"
								/>
							  }
							  modal
							  nested
							>
							  {(close) => (
								<div className="modal">
								  <div className="text-right pb-2">
									<button
									  onClick={() => close()}
									  className="btn btn-dark"
									>
									  x
									</button>
								  </div>
								  <div className="content">
									<iframe
									  width="640"
									  height="360"
									  src={st.split(",")[2]}
									  title="YouTube video player"
									  frameborder="0"
									  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									  allowfullscreen
									></iframe>
								  </div>
								</div>
							  )}
							</Popup>
						  </div>
						</React.Fragment>
					  ))}
				
                </Carousel>

            </Col>
    
        </Row>
      </Container>
    </>
  );
};

export default Tsstmonial;