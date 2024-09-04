import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-phone-number-input/style.css";
import "./ielts.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import ImageIelt1 from "../../images/ielts/ielty.png";
import ImageIelt2 from "../../images/ielts/ielty2.png";
import ImageIelt3 from "../../images/ielts/ielty3.png";
import ImageIelt4 from "../../images/ielts/ielty4.png";
import PricrIamge from "../../images/ielts/price.png";
import PricrIamge2 from "../../images/ielts/price2.png";
import PricrIamge3 from "../../images/ielts/price3.png";
import MorImager from "../../images/ielts/Object.png";
import MorImager1 from "../../images/ielts/Object-2.png";
import MorImager2 from "../../images/ielts/Object-3.png";
import MorImager3 from "../../images/ielts/Object-4.png";
import MorImager4 from "../../images/ielts/Object-5.png";
import MorImager5 from "../../images/ielts/Object-6.png";
import Imagedu from "../../images/ielts/imagedyu.png";
import Mapaview from "../../images/ielts/mpaview.png";
import IocnImages from "../../images/ielts/icon1.png";
import IocnImages1 from "../../images/ielts/icon2.png";
import IocnImages2 from "../../images/ielts/icon3.png";
import EducationImage1 from "../../images/ielts/education-high1.png";
import EducationImage2 from "../../images/ielts/education-high2.png";
import EducationImage3 from "../../images/ielts/education-high3.png";
import EducationImage4 from "../../images/ielts/education-high4.png";
import ReviewImage from "../../images/ielts/eviews.png";

import newImgage from '../../images/ielts/megamind-1.jpg';
import newImage2 from '../../images/ielts/megamind-2.jpg'
import newImage3 from '../../images/ielts/megamind-3.jpg'

import ClientView from "../ClientView";

function Ielts() {
  const [value, setValue] = useState();
  const targetRef = useRef(null);


  const scrollToComponent = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Container className="iets-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={7} className="py-5 col custom-border4">
            <div className="topts-boxx" id="metsa">
              <h2 className="text-center fw-bold text-white custom-border3 py-2">
                {" Why IELTS First?"}
              </h2>
              <p className="text-center text-white m-0">
                {
                  "IELTS First is the fastest emerging leader in the test preparation with a high success achievement rate."
                }
              </p>
              <p className="text-center text-white m-0">
                {
                  "We have vast experience in providing quality IELTS training & helped thousands of students to successfully achieve their targeted IELTS Score Band."
                }
              </p>
              <div className="d-grid dgrids pt-3">
                <div>
                  <img src={ImageIelt1} alt="imageNew" />
                  <p className="text-center text-white">{"PREPARATION"}</p>
                </div>
                <div>
                  <img src={ImageIelt2} alt="imageNew" />
                  <p className="text-center text-white">{"FOCUS"}</p>
                </div>
                <div>
                  <img src={ImageIelt3} alt="imageNew" />
                  <p className="text-center text-white">{"TIME"}</p>
                </div>
                <div>
                  <img src={ImageIelt4} alt="imageNew" />
                  <p className="text-center text-white">{"SUCCESS"}</p>
                </div>
              </div>
              <h2 className="text-center fw-bold text-white pt-0">
                {" Book your Demo Class now!"}{" "}
              </h2>
              <button
                class="mt-btn w-25 btnww btn btn-light mt-0 mb-4"
                style={{ fontSize: "18px" }}
              >
                Our Services
              </button>
            </div>
          </Col>
          <Col sm={12} md={1} className="py-5 maincol">
            {" "}
          </Col>
          <Col ref={targetRef} sm={12} md={4} className="py-5 col bo-img">
            <div className="ielts-boxx mx-3" id="metsa">
              <h3 className="text-center fw-bold text-white custom-bordder2 py-2">
                {" FREE COUNSELLING"}
              </h3>
              <Form
              
                className="py-3"
                onSubmit="return confirm('Do you want to submit?') "
                method="Get"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputName"
                    placeholder="Full Name :"
                    required
                  />
                </div>

                <div className="form-group">
                  <PhoneInput
                    className="form-control cotrosls"
                    placeholder="Contact No :"
                    value={value}
                    onChange={setValue}
                    defaultCountry="IN"
                    rules={{ required: true }}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email :"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputName"
                    placeholder="Courses :"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputName"
                    placeholder="State :"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputName"
                    placeholder="Select Class Mode :"
                    required
                  />
                </div>

                <input
                  type="submit"
                  className="mt-btn w-50 btn btn-primary"
                  value="GET STARTED"
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mobile-b" fluid>
        <Row className="mobile-b mt-5" style={{ width: "85%", margin: "auto" }}>
          <Col md={12} sm={12} className="mb-5">
            <div className="dispay-irlts">
              <h2 className="display-7 text-center fw-bold m-0 py-2">
                {" Our Courses Packages "}
              </h2>
            </div>
            <div className="dispay-ir">
              <h4 className="text-center fw-bold py-2 m-0">
                {"  IELTS GENREL PACKAGES "}
              </h4>
            </div>
          </Col>
          <div id="generic_price_table">
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="generic_content clearfix">
                      <div className="generic_head_price clearfix">
                        <div className="generic_head_content clearfix">
                          <img src={newImgage} alt="" width={"100%"} />
                        </div>

                        <div className="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( ACADEMIC )
                          </h4>
                          <span className="price custom-border5">
                            <span className="currency">RS 15,000 (18% GST)</span>
                          </span>
                        </div>
                      </div>

                      <div className="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 15 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"5-6 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li> 
                          <li>
                            {
                              "Weekly Mockup & Doubt Session"
                            }
                          </li>
                        </ul>
                      </div>

                      <div className="generic_price_btn clearfix">
                        <Link className="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="generic_content active clearfix">
                      <div className="generic_head_price clearfix">
                        <div className="generic_head_content clearfix">
                          <img src={newImage2} alt="" width={"100%"} />
                        </div>

                        <div className="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXTRENSIVE PROGRAM <br />( ACADEMIC )
                          </h4>
                          <span className="price custom-border5">
                            <span className="currency">RS 10,000 (18% GST)</span>
                          </span>
                        </div>
                      </div>

                      <div className="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                               "Weekly Mockup & Doubt Session"
                            }
                          </li>
                        </ul>
                      </div>

                      <div className="generic_price_btn clearfix">
                        <Link className="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="generic_content clearfix">
                      <div className="generic_head_price clearfix">
                        <div className="generic_head_content clearfix">
                          <img src={newImage3} alt="" width={"100%"} />
                        </div>

                        <div className="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            ULTIMATE PROGRAM <br />( ACADEMIC )
                          </h4>
                          <span className="price custom-border5">
                            <span className="currency">RS 15,000 (18% GST) </span>
                          </span>
                        </div>
                      </div>

                      <div className="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Weekly Mockup & Doubt Session"
                            }
                          </li>
                        </ul>
                      </div>

                      <div className="generic_price_btn clearfix">
                        <Link className="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Row>
      </Container>

      {/* <Container className="mobile-b" fluid>
        <Row className="mobile-b" style={{ width: "85%", margin: "auto" }}>
          <Col md={12} sm={12} className="mb-5 pb-5">
            <div className="dispay-New">
              <h2 className="display-7 text-center fw-bold m-0 py-2">
                {" IELTS Academic Packages"}
              </h2>
            </div>
          </Col>
          <div id="generic_price_table">
            <section>
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="generic_content active clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge2} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge3} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Row>
      </Container> */}

      <Container className="mobile-b" fluid>
        <Row className="mobile-b" style={{ width: "80%", margin: "auto" }}>
          <Col md={12} sm={12} className="mb-5">
            <div className="dispay-New">
              <h2 className="display-7 text-center fw-bold m-0 py-2">
                {"Our Course Highlights"}
              </h2>
            </div>
          </Col>
          <Col md={2} sm={4}>
            <div className="dis-ielts">
              <img src={MorImager} alt="" width={"100%"} />
              <p className="text-center"> Mock Test </p>
            </div>
          </Col>
          <Col md={2} sm={4}>
            <div className="dis-ielts">
              <img src={MorImager1} alt="" width={"100%"} />
              <p className="text-center"> Planning </p>
            </div>
          </Col>
          <Col md={2} sm={4}>
            <div className="dis-ielts">
              <img src={MorImager2} alt="" width={"100%"} />
              <p className="text-center"> Practice </p>
            </div>
          </Col>
          <Col md={2} sm={4}>
            <div className="dis-ielts">
              <img src={MorImager3} alt="" width={"100%"} />
              <p className="text-center"> Analysis </p>
            </div>
          </Col>
          <Col md={2} sm={4}>
            <div className="dis-ielts">
              <img src={MorImager4} alt="" width={"100%"} />
              <p className="text-center"> Assessment </p>
            </div>
          </Col>
          <Col md={2} sm={4}>
            <div className="dis-ielts">
              <img src={MorImager5} alt="" width={"100%"} />
              <p className="text-center"> Doubt Sessions </p>
            </div>
          </Col>
          <Col sm={12} md={12} className=" text-center pt-4 pb-2">
            <Button onClick={scrollToComponent} variant="primary"> Enroll Now </Button>
          </Col>
        </Row>
      </Container>

      <Container className="bg-backgrund" fluid>
        <Row
          className="d-flex align-items-center"
          style={{ width: "80%", margin: "auto" }}
        >
          <Col md={4} sm={12} className="">
            <img src={Imagedu} alt="" width={"100%"} />
          </Col>
          <Col md={8} sm={12} className="">
            <h2
              className="display-7 text-left px-5 fw-bold py-2"
              style={{ color: "#0076c8" }}
            >
              {"Our Mentors"}
            </h2>
            <p className="px-5 para">
              The IELTS First teaching faculty is comprised of experienced
              professionals who have a deep understanding of the test and the
              skills required to excel on it.
            </p>
            <p className="px-5 para">
              These instructors are passionate about helping students achieve
              their goals and are dedicated to providing personalized support
              and guidance throughout the learning process. In addition to their
              expertise, the faculty at IELTS First are committed to using the
              latest teaching techniques and technologies to ensure that
              students are receiving the most effective instruction possible.
              From interactive online classes to personalized coaching and
              feedback.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="bgback" fluid>
        <Row
          className="d-flex align-items-center"
          style={{ width: "80%", margin: "auto" }}
        >
          <Col md={12} sm={12} className="mb-5 pt-5">
            <div className="dispay-New">
              <h2 className="display-7 text-center fw-bold m-0 py-2">
                {"IELTS Test Format"}
              </h2>
            </div>
          </Col>

          <Col md={12} sm={12} className="mb-5">
            <ul className="ulister">
              <li>
                The IELTS test surveys your capacity in Listening, Reading,
                Writing, and Speaking in just three hours.
              </li>
              <li>
                There are two kinds of IELTS: Academic and General Training. Out
                of these two kinds Listening and Speaking are the same for both
                tests, however, the topic of the Reading and writing segments
                contrasts relying upon which test you take.
              </li>
              <li>
                The Listening, Reading, and writing areas of all IELTS tests are
                finished around the same time, without any breaks in the middle
                of them.
              </li>
              <li>
                The speaking section, however, can be completed up to a week
                before or after the completion of other tests. Your test center
                will exhort.
              </li>
              <li>The absolute test time is 2 hours and 45 minutes.</li>
            </ul>
          </Col>
          <Col md={12} sm={12} className="mb-5 text-center">
            <img src={Mapaview} alt="" width={"80%"} />
          </Col>
        </Row>
      </Container>

      <Container className="pb-5 bgback" fluid>
        <Row
          className="d-flex align-items-center"
          style={{ width: "80%", margin: "auto" }}
        >
          <Col md={12} sm={12} className="mb-5 pt-5">
            <div className="dispay-New">
              <h2 className="display-7 text-center fw-bold m-0 py-2">
                {"An Institution You Can Trust"}
              </h2>
            </div>
            <p className="text-center pt-4 w-50 m-auto">
              "Don't just take the IELTS, dominate it with the help of our
              experienced coaches."
            </p>
          </Col>
          <Col md={4} sm={12} className="mb-5">
            <div className="listyour">
              <img
                src={IocnImages}
                alt=""
                className="m-auto d-block"
                width={"30%"}
              />
              <h4 className="text-center" style={{ color: "#0076c8" }}>
                Pre-Training Assessment
              </h4>
              <p className="text-center para">
                At the onset of this course, Comprehensive evaluation will be
                conducted to diagnose and assess your current level of
                proficiency in the English language as well as your readiness to
                take on the IELTS exam.
              </p>
            </div>
          </Col>
          <Col md={4} sm={12} className="mb-5">
            <div className="listyour">
              <img
                src={IocnImages1}
                alt=""
                className="m-auto d-block"
                width={"30%"}
              />
              <h4 className="text-center" style={{ color: "#0076c8" }}>
                Pre-Training Assessment
              </h4>
              <p className="text-center para">
                At the onset of this course, Comprehensive evaluation will be
                conducted to diagnose and assess your current level of
                proficiency in the English language as well as your readiness to
                take on the IELTS exam.
              </p>
            </div>
          </Col>
          <Col md={4} sm={12} className="mb-5">
            <div className="listyour">
              <img
                src={IocnImages2}
                alt=""
                className="m-auto d-block"
                width={"30%"}
              />
              <h4 className="text-center" style={{ color: "#0076c8" }}>
                Pre-Training Assessment
              </h4>
              <p className="text-center para">
                At the onset of this course, Comprehensive evaluation will be
                conducted to diagnose and assess your current level of
                proficiency in the English language as well as your readiness to
                take on the IELTS exam.
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} className=" text-center pt-4">
            <Button onClick={scrollToComponent} variant="primary"> Book a Free Demo </Button>
          </Col>
        </Row>
      </Container>

      <Container className="pb-5" fluid>
        <Row
          className="d-flex align-items-center"
          style={{ width: "80%", margin: "auto" }}
        >
          <Col md={12} sm={12} className="mb-5 pt-5">
            <div className="dispay-New">
              <h2 className="display-7 text-center fw-bold m-0 py-2">
                {"Our Classroom Sessions"}
              </h2>
            </div>
            <p className="text-center pt-4">
              Our Classroom has a very unique approach so that any student can
              be learning either via a live lesson, pre programmed lesson,
              independently or being supervised in the classroom.
            </p>
          </Col>
          <Col sm={12} md={3}>
            <img
              src={EducationImage1}
              alt=""
              className="m-auto d-block"
              width={"100%"}
            />
          </Col>
          <Col sm={12} md={3}>
            <img
              src={EducationImage2}
              alt=""
              className="m-auto d-block"
              width={"100%"}
            />
          </Col>
          <Col sm={12} md={3}>
            <img
              src={EducationImage3}
              alt=""
              className="m-auto d-block"
              width={"100%"}
            />
          </Col>
          <Col sm={12} md={3}>
            <img
              src={EducationImage4}
              alt=""
              className="m-auto d-block"
              width={"100%"}
            />
          </Col>
          <Col sm={12} md={12} className=" text-center pt-4">
            <Button variant="primary"> Start with Demo </Button>
          </Col>
        </Row>
      </Container>

      <Container className="mobile-tb bg-backgrund" fluid>
        <Row className="mobile-b" style={{ width: "85%", margin: "auto" }}>
          <Col md={8} sm={12} className="mb-5 pb-5 d-block m-auto">
            <div className="dispay-New">
              <h2 className="display-7 text-center fw-bold m-0 py-2">
                {"Success Stories"}
              </h2>
            </div>
          </Col>
          <div id="generic_price_table">
            <section>
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={ReviewImage} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix p-0">
                          <h5 className="fw-bold color-price pb-2">
                            {" IELTS FIRST REVIEW BY "}
                            <br />( TANUJ )
                          </h5>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"8th Jan 2023"}</li>
                          <li>{"IELTS Academic"}</li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="generic_content active clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={ReviewImage} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix p-0">
                          <h5 className="fw-bold color-price pb-2">
                          {" IELTS FIRST REVIEW BY "}<br />( AMANDEEP KAUR)
                          </h5>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"8th Jan 2023"}</li>
                          <li>{"IELTS Academic"}</li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={ReviewImage} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix p-0">
                          <h5 className="fw-bold color-price pb-2">
                          {" IELTS FIRST REVIEW BY "} <br />( GAUTAM ARORA )
                          </h5>

                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"8th Jan 2023"}</li>
                          <li>{"IELTS Academic"}</li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Row>
      </Container>
      <ClientView/>

    </>
  );
}

export default Ielts;
