import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../assets/css/styles.css";
import Carousel from "react-multi-carousel";

import "./about.css";
import AboutImage from "../../images/aboutus/ds.png";
import MissionImage from "../../images/aboutus/mission.png";
import VisionImage from "../../images/aboutus/vision.png";
import ValueImage from "../../images/aboutus/value.png";
import DirectImage from "../../images/aboutus/awords/directeras.jpg";
import CounstImage from "../../images/aboutus/1.png";
import CounstImage1 from "../../images/aboutus/2.png";
import CounstImage2 from "../../images/aboutus/3.png";
import CounstImage3 from "../../images/aboutus/4.png";
import CounstImage4 from "../../images/aboutus/5.png";
import CounstImage5 from "../../images/aboutus/6.png";
import ClientView from "../ClientView";
import AwordImages1 from "../../images/aboutus/awords/awords(1).jpeg";
import AwordImages2 from "../../images/aboutus/awords/awords(2).jpeg";
import AwordImages3 from "../../images/aboutus/awords/awords(3).jpeg";
import AwordImages4 from "../../images/aboutus/awords/awords(4).jpeg";
import AwordImages5 from "../../images/aboutus/awords/awords(5).jpeg";
import AwordImages6 from "../../images/aboutus/awords/awords(6).jpeg";
import AwordImages7 from "../../images/aboutus/awords/awords(7).jpeg";
import AwordImages8 from "../../images/aboutus/awords/awords(8).jpeg";
import AwordImages9 from "../../images/aboutus/awords/awords(9).jpeg";
import AwordImages10 from "../../images/aboutus/awords/awords(10).jpeg";
import AwordImages11 from "../../images/aboutus/awords/awords(11).jpeg";
import AwordImages12 from "../../images/aboutus/awords/awords(12).jpeg";
import AwordImages13 from "../../images/aboutus/awords/awords(13).jpeg";
import AwordImages14 from "../../images/aboutus/awords/awords(14).jpeg";
import AwordImages15 from "../../images/aboutus/awords/awords(15).jpeg";
import AwordImages16 from "../../images/aboutus/awords/awords(16).jpeg";
import AwordImages17 from "../../images/aboutus/awords/awords(17).jpeg";
import AwordImages18 from "../../images/aboutus/awords/awords(18).jpeg";
import AwordImages19 from "../../images/aboutus/awords/awords(19).jpeg";
import AwordImages21 from "../../images/aboutus/awords/awords(21).jpeg";
import AwordImages22 from "../../images/aboutus/awords/awords(22).jpeg";
import AwordImages23 from "../../images/aboutus/awords/awords(23).jpeg";
import AwordImages24 from "../../images/aboutus/awords/awords(24).jpeg";

import AboutHome from "../../images/aboutus/imageabout.png";
import AboutHomeIcon1 from "../../images/aboutus/ouricon.png";
import AboutHomeIcon2 from "../../images/aboutus/emailicon.png";
import AboutHomeIcon3 from "../../images/aboutus/awordicon.png";
import Counter from "./Counrter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

var aboutpara = [
  {
    paragraph:
      "“Megamind started its journey in 2016 with a vision to normalise overseas education by making it affordable and accessible. This vision, once shared by 4 individuals when Megamind opened its Jaipur HQ, is now the driving force for our extensive team. ",
    paragraph2:
      "We are a team of passionate and dedicated experts who have helped students from all walks of life realise their dream of studying abroad. We empathise with the struggles of a student who wants to study overseas and ensure that our services are available to everyone.",
  },
];

var [{ paragraph, paragraph2 }] = aboutpara;

var directermessage =[
  {
    message1:"We have been the leading Education consultants since 2003 started. Megamind is a Study Overseas Education Consultancy firm, providing services such as Career Counselling, Application guidelines, University selection, LOR/SOP, IELTS test preparation to students who are planning their higher studies abroad. It has presence in Delhi and Chandigarh, Delhi being the Head Office.",
    message2: "Megamind has experienced specialists for each Country as a study destination, IELTS preparation, application process and has end to end services for study abroad aspirants.",
    message3:"It has placed more than 10000 students globally, serving 150+ Universities and has a Visa success rate of 95%. The company believes in delivering complete satisfaction to its students through its alumni network, a strong VISA process, and its 100% success rate of placing the students abroad."
  }
]
var [{ message1, message2,message3 }] = directermessage;

var About = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
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


      <Tabs>
        <Container className="py-5 aboutbg" fluid>
          <Row className="" style={{ width: "90%", margin: "auto" }}>
            <Col sm={12} md={4}>
              <img
                src={AboutHome}
                alt="Emi Calculater"
                width={"100%"}
                className="m-auto d-block"
              />
            </Col>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={7}>
              <div className="py-4">
                <h3
                  className="display-5 m-0 mega-m"
                  style={{ lineHeight: "40px" }}
                >
                  {" MOEC: Soar Beyond"}
                </h3>
                <h3 className="display-5 mega-m">Your Dreams</h3>

                <p className="para">
                  Megamind is a team of experts dedicated to supporting the
                  Study Abroad dream of students. We are more than overseas
                  education consultants. Keeping true to our mission to make
                  abroad education accessible to all, Megamind has helped its
                  students reach 10+ countries for study abroad programs.
                </p>
                <p className="para">
                  We have built a stellar student network that grows and
                  succeeds as a community. Our excellent branch network and
                  association with leading global institutions help us to
                  deliver the best yet affordable education services.
                </p>
              </div>

              <TabList className="d-flex p-0">
                <Tab className="d-block py-4 px-5 mr-2" style={{background:"#39b449"}}>
                  <img
                    src={AboutHomeIcon1}
                    alt="Emi Calculater"
                    width={"95%"}
                    className=""
                  />
    
                </Tab>
                <Tab className="d-block py-4 px-5 mr-2" style={{background:"#39b449"}}>
                  <img
                    src={AboutHomeIcon2}
                    alt="Emi Calculater"
                    width={"95%"}
                    className=""
                  />
    
                </Tab>
                <Tab className="d-block py-4 px-4" style={{background:"#39b449"}}>
                  <img
                    src={AboutHomeIcon3}
                    alt="Emi Calculater"
                    width={"95%"}
                    className=""
                  />
    
                </Tab>
              </TabList>
            </Col>
          </Row>
        </Container>
        <Container className="pb-5" fluid>
          <TabPanel>
            <Row className="" style={{ width: "90%", margin: "auto" }}>
              <Col sm={12} md={6}>
                <div className="py-4">
                  <h3 className="display-5 m-0" style={{ lineHeight: "48px" }}>
                    {" The Story Behind "}
                  </h3>
                  <h3 className="display-5 mega-m">
                    <span className="megamind">M</span>egamind
                  </h3>
                </div>
                <p className="para">{paragraph}</p>
                <p className="para">{paragraph2}</p>
              </Col>
              <Col sm={12} md={6}>
                <img
                  src={AboutImage}
                  alt="Emi Calculater"
                  width={"80%"}
                  className="m-auto d-block"
                />
              </Col>
            </Row>
          </TabPanel>

          <TabPanel>
            <Row className="" style={{ width: "90%", margin: "auto" }}>
              <Col sm={12} md={6}>
                <div className="py-4">
                  <h3 className="display-5 m-0" style={{ lineHeight: "48px" }}>
                    {" Mr. Ganesh Kejriwal "}
                  </h3>
                  <p className="m-0">CEO/Director  <span className="megamind">M</span><span className="mega-m">egamind</span></p>

                </div>
                <p className="para">{message1}</p>
                <p className="para">{message2}</p>
                <p className="para">{message3}</p>
              </Col>
              <Col sm={12} md={6}>
                <img
                  src={DirectImage}
                  alt="Emi Calculater"
                  width={"80%"}
                  className="m-auto d-block"
                />
              </Col>
            </Row>
          </TabPanel>

{/* SLIDER START HERE */}

          <TabPanel>
            <Row className="slider-aboutus" style={{ width: "90%", margin: "auto" }}>

<Carousel
responsive={responsive}
autoPlay
autoPlaySpeed={2000}
additionalTransfrom={100}
dotListClass=""
draggable
focusOnSelect={false}
infinite
itemClass="padding-lef"
keyBoardControl
minimumTouchDrag={100}
pauseOnHover
renderArrowsWhenDisabled={false}
renderButtonGroupOutside={false}
renderDotsOutside={false}
rewind={false}
rewindWithAnimation={true}
rtl={false}
shouldResetAutoplay
showDots={false}
sliderClass=""
column={2}
slidesToSlide={1}
swipeable={true}
 >
  <div>
  <img
    src={AwordImages1}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
  <div>
  <img
    src={AwordImages2}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
  <div>
  <img
    src={AwordImages3}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
  <div>
  <img
    src={AwordImages4}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
  <div>
  <img
    src={AwordImages14}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
  <div>
  <img
    src={AwordImages5}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
  <div>
  <img
    src={AwordImages10}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
  <div>
  <img
    src={AwordImages6}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>


  <div>
  <img
    src={AwordImages7}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages8}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages9}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>


  <div>
  <img
    src={AwordImages11}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages12}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages13}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  
  <div>
  <img
    src={AwordImages17}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  
  <div>
  <img
    src={AwordImages4}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  
  <div>
  <img
    src={AwordImages15}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages16}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages18}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages19}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages21}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
  <div>
  <img
    src={AwordImages22}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages23}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>

  <div>
  <img
    src={AwordImages24}
    alt="First Image"
    width={"100%"}
    className="mb-2"
  />
  </div>
</Carousel>
            </Row>
          </TabPanel>
        </Container>
      </Tabs>
      <Container className="py-5 about-bg" fluid>
        <Row className="pb-5" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={12} className="text-center">
            <h3 className="display-5 mega-m">
              {"  What Sets "} <span className="megamind"> M</span>egamind
              Apart?
            </h3>
            <div class="border-about2 text-center"></div>
          </Col>

          <Col sm={12} md={4}>
            <div class="aboutbox pb-4">
              <div class="info pb-4">
                <h3 class="text-left py-4 fw-bold">Vission</h3>
                <p className="para">
                  Our foundations lie in a profound vision; we strive to
                  students through international exposure and quality education.
                </p>
              </div>
              <div class="aboutbox-icon">
                <img src={VisionImage} alt="Emi Calculater" width={"30px"} />
              </div>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div class="aboutbox">
              <div class="info">
                <h3 class="text-left py-4 fw-bold">Mission</h3>
                <p className="para">
                  Our mission is to make quality education a right and not a
                  luxury. We provide personalised guidance, making foreign
                  education accessible and affordable.
                </p>
              </div>
              <div class="aboutbox-icon">
                <img src={MissionImage} alt="Emi Calculater" width={"30px"} />
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="d-flex">
            <div class="aboutbox">
              <div class="info">
                <h3 class="text-left py-4 fw-bold">Value</h3>
                <p className="para">
                  The strong foundation of Megamind is built to last, with the
                  shared values of commitment, integrity, honesty, compassion,
                  and cooperation.
                </p>
              </div>
              <div class="aboutbox-icon">
                <img src={ValueImage} alt="Emi Calculater" width={"40px"} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5" fluid>
        <Row
          className="align-items-center"
          style={{ width: "90%", margin: "auto" }}
        >
          <Col sm={6} md={6}>
            <Row>
              <Counter />
            </Row>
          </Col>
          <Col sm={6} md={6}>
            <div className="ps-5">
              <h3 className="display-5 mega-m ps-5">{" Our Impact "}</h3>
              <p className="para pt-3 ps-5">
                Today, Megamind is accessible to students everywhere. In
                addition to our head office in Jaipur, we have branches in New
                Delhi, Noida, Agra, Lucknow, Hyderabad, Aurangabad, and Pune.
                Our business associates and sub-agents across the country ensure
                that any student can reach us for help.
              </p>
              <p className="para pt-3 ps-5">
                {
                  " Our international office in Dubai has helped support and guide even more students."
                }
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div class="social-box">
        <Container className="pb-5" fluid>
          <Row className="" style={{ width: "80%", margin: "auto" }}>
            <Col sm={12} md={12} className="text-center pb-4">
              <h3 className="display-5 mega-m">
                {"  Our "} <span className="megamind"> S</span>ervices
              </h3>
              <div class="border-about text-center"></div>
            </Col>
            <div class="col-lg-4 col-xs-12 text-center d-flex">
              <div class="box">
                <img src={CounstImage} alt="Emi Calculater" width={"80px"} />
                <div class="box-title pt-3">
                  <h4>Consultation</h4>
                </div>
                <div class="box-text">
                  <span>
                    We provide a free consultation to students who wish to study
                    abroad. Our expert counsellors will help you pick the right
                    direction and be with you every step of the way.
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-xs-12  text-center d-flex">
              <div class="box">
                <img src={CounstImage1} alt="Emi Calculater" width={"80px"} />
                <div class="box-title pt-3">
                  <h4>Profile Assessment</h4>
                </div>
                <div class="box-text">
                  <span>
                    Our expert team will evaluate your profile thoroughly and
                    pick the best courses and universities that you are eligible
                    for. We will also help you build a profile required for your
                    dream university.
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-xs-12 text-center d-flex">
              <div class="box">
                <img src={CounstImage2} alt="Emi Calculater" width={"80px"} />
                <div class="box-title pt-3">
                  <h4>University Applications</h4>
                </div>
                <div class="box-text">
                  <span>
                    The applications team at Megamind will ensure that your
                    university applications are impeccable & made at the right
                    time.
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-xs-12 text-center d-flex">
              <div class="box">
                <img src={CounstImage3} alt="Emi Calculater" width={"80px"} />
                <div class="box-title pt-3">
                  <h4>IELTS Preparation</h4>
                </div>
                <div class="box-text">
                  <span>
                    We strive to prepare you for the best education the world
                    has to offer. Therefore, our brilliant teachers will coach
                    you to ensure a high band score in IELTS.
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-xs-12 text-center d-flex">
              <div class="box">
                <img src={CounstImage4} alt="Emi Calculater" width={"80px"} />
                <div class="box-title pt-3">
                  <h4>Visa Guidance</h4>
                </div>
                <div class="box-text">
                  <span>
                    We have a team of counsellors with country-specific
                    expertise that will help you receive a student visa after
                    receiving an offer letter from your university abroad.
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-xs-12 text-center d-flex">
              <div class="box">
                <img src={CounstImage5} alt="Emi Calculater" width={"80px"} />
                <div class="box-title pt-3">
                  <h4>Post-Immigration Guidance</h4>
                </div>
                <div class="box-text">
                  <span>
                    Once you travel abroad for your education, you become a part
                    of our vast student network. We will assist you with
                    accommodation, part-time jobs and immigration
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <ClientView />
      </div>
    </>
  );
};

export default About;
