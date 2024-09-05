import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import TeamImage from "../../images/country/team/2.jpg";
import TeamImage1 from "../../images/country/team/3.jpg";
import TeamImage2 from "../../images/country/team/4.jpg";
import TeamImage3 from "../../images/country/team/5.png";
import TeamImage4 from "../../images/country/team/6.png";
import TeamImage5 from "../../images/country/team/7.png";
import TeamImage6 from "../../images/country/team/8.png";
import TeamImage7 from "../../images/country/team/9.png";

import LivingImage from "../../images/country/lo-hi.png";
import Application0 from "../../images/country/icon/applicaton.png";
import Application1 from "../../images/country/icon/applicaton1.png";
import Application2 from "../../images/country/icon/applicaton2.png";
import Application3 from "../../images/country/icon/applicaton3.png";


import CountryA1 from "../../images/country/icon/a1.png";
import CountryA2 from "../../images/country/icon/a2.png";
import CountryA3 from "../../images/country/icon/a3.png";
import CountryA4 from "../../images/country/icon/a4.png";
import CountryA5 from "../../images/country/icon/a5.png";
import CountryA6 from "../../images/country/icon/a6.png";

import PdfDownloade from "../../images/country/Application-Check-List-UG-A4.pdf";

import "./country.css";
import { TiTick } from "react-icons/ti";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

//Axios for get request
import axios from "axios";
import $ from "jquery";

// refreshPage page


function refreshPage(event) {
  //alert("refreshPage called.."+$(event.target).attr("href"));	
  window.location.href = $(event.target).attr("href");
}


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "contents";
    btnText.innerHTML = "View More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View More";
    moreText.style.display = "contents";
  }
}

// Function will execute on click of button
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("../../images/country/Application-Check-List-PG.pdf").then(
    (response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "../../images/country/Application-Check-List-PG.pdf";
        alink.click();
      });
    }
  );
};

class Country extends React.Component {
  //initialize an object's state in a class
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
  componentDidMount() {
    const search = window.location.search;
    const query = new URLSearchParams(search);
    const code = query.get("code");
    console.log("code=" + code);
    //let { code } = this.props.params.code;
    //console.log({code});
    var geturl =
      "https://megamindonline.com/admin/webmanager/controller.php?command=GET_COUNTRY_DATA&country=" +
      code;
    console.log("geturl=" + geturl);
    //get request+
    axios.get(geturl).then((res) => {
      this.setState({ data: res.data });
      //console.log("this.state.data="+this.state.data);
    });
  }

  render() {
    return (
      <>
        {this.state.data.map((result) => {
          console.log(result);
          
          return (
            <Container
              className="padding-top-4 bgbackcountrty pb-10"
              fluid
              style={{
                backgroundImage: "url(" + result.banner + ")",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundPosition: "center center",
                backgroundSize: "100%",
              }}
            >
              <Row className="" style={{ width: "88%", margin: "auto" }}>
                <Col sm={12} md={5} className="pb-5 pt-5">
                  <h2 className="display-4 fw-thin">{result.main_title}</h2>
                  <p class="py-4" style={{ fontSize: "18px" }}>
                    {result.sub_title}
                  </p>
                  <div class="d-country">
                    <Link
                      to="https://megamindonline.com/course-finder/"
                      target="_blank"
                    >
                      <button
                        type="submit"
                        class="px-4 py-2 country-mobile mr-3 btn btn-primary"

                      >
                        {"Get Your Shortlist for free"}
                      </button>
                    </Link>
                    <Link to="tel:+918882255001">
                      <button
                        type="submit"
                        class="px-4 py-2 btn country-mobile btn-primary"


                      >
                        {"Talk to an expert "}
                      </button>
                    </Link>
                  </div>
                </Col>

                <Col
                  sm={12}
                  md={7}
                  className="pb-10 countriDisplay"
                  style={
                    {
                      // backgroundImage: "url(" + result.banner + ")",
                      // backgroundRepeat: "no-repeat",
                      // backgroundAttachment: "scroll",
                      // backgroundSize: "contain",
                      // backgroundPosition: "center center",
                      // backgroundSize: "100%",
                    }
                  }
                ></Col>
              </Row>
            </Container>
          );
        })}

        {this.state.data.map((result) => {
          return (

            <Container className="padding-5" fluid>
              {console.log(result)}
              <Row className="" style={{ width: "85%", margin: "auto" }}>
                <Col sm={12} md={12} className="pb-4">
                  <h2 className="display-6">Facts</h2>
                </Col>

                <Col sm={4} md={3} className="padding-5">
                  <div className="Countrty-Icon">
                    <img 
                      className="w-0"
                      src={result?.fast_fact_img_url_1}
                      alt="Flag"
                    />
                    <p className="fw-bold">{result.fast_fact_title_1}</p>
                  </div>
                </Col>
                <Col sm={4} md={3} className="padding-5">
                  <div className="Countrty-Icon">
                    <img
                      className=""
                      src={result?.fast_fact_img_url_2}
                      alt="Flag"
                    />
                    <p className="fw-bold">{result.fast_fact_title_2}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-5">
                  <div className="Countrty-Icon">
                    <img
                      className=""
                      src={result?.fast_fact_img_url_3}
                      alt="Flag"
                    />
                    <p className="fw-bold">{result.fast_fact_title_3}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-5">
                  <div className="Countrty-Icon">
                    <img
                      className=""
                      src={result?.fast_fact_img_url_4}
                      alt="Flag"
                    />
                    <p className="fw-bold">{result.fast_fact_title_4}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-5">
                  <div className="Countrty-Icon">
                    <img
                      className=""
                      src={result?.fast_fact_img_url_5}
                      alt="Flag"
                    />
                    <p className="fw-bold">{result.fast_fact_title_5}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-5">
                  <div className="Countrty-Icon">
                    <img
                      className=""
                      src={result?.fast_fact_img_url_6}
                      alt="Flag"
                    />
                    <p className="fw-bold">{result.fast_fact_title_6}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-5">
                  <div className="Countrty-Icon">
                    <img
                      className=""
                      src={result?.fast_fact_img_url_7}
                      alt="Flag"
                    />
                    <p className="fw-bold">{result.fast_fact_title_7}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-5">
                  <div className="Countrty-Icon">
                    <img
                      className=""
                      src={result?.fast_fact_img_url_8}
                      alt="Flag"
                    />
                    <p className="fw-bold">{result.fast_fact_title_8}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}

        {this.state.data.map((result) => {
          return (
            <Container className="pb-5 margin-top-2" fluid>
              <Row className="hero-bg" style={{ width: "85%", margin: "auto" }}>
                <Col sm={12} md={6} className="hero-inner pb-5">
                  <div className="Study-wa">
                    <h2 className="display-6">
                      {" "}
                      Why Study in {result.country}
                    </h2>
                    <ul className="list-none pt-4">
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_1}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_2}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_3}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_4}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_5}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_6}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_7}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_8}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_9}
                      </li>
                      <li>
                        <TiTick className="list-p" />
                        {result.why_study_1_10}
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={12} md={6} className="hero-sec pb-5">
                  <div className="Study-Ca">
                    <p className="co-para m-0">{result.why_study_2_1}</p>
                    <br />
                    <p className="co-para m-0">{result.why_study_2_2}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}

        {/* Desktop TAB START CODE HERE */}

        {this.state.data.map((result) => {
          return (
            <Container
              className="py-5 MobilePhone"
              style={{ background: "#f9fafc" }}
              fluid
            >
              <Row className="" style={{ width: "90%", margin: "auto" }}>
                <Col sm={12} md={12} className="">
                  <Tabs className="react-select dselt">
                    <TabList
                      style={{
                        fontSize: "20px",
                        margin: "20px",
                        color: "#000",
                        border: "none",
                      }}
                    >
                      <Tab style={{ background: "#036cb9", border: "none" }}>
                        {"University List "}
                      </Tab>
                      {/* Removed as per suggested by megamind team */}



                      <Tab style={{ background: "#64b2c5", border: "none" }}>
                        {"Application & Visa Checklist "}
                      </Tab>
                      <Tab style={{ background: "#8fd7ca", border: "none" }}>
                        {"Testimonial"}
                      </Tab>
                      {/* <Tab style={{ background: "#abeecc", border: "none" }}>
                        {"Team"}
                      </Tab> */}
                      <Tab style={{ background: "#b7f5d6", border: "none" }}>
                        {"FAQ"}
                      </Tab>
                    </TabList>

                    {/* University List TAB START HERE */
                    /* University List TAB START HERE */}

                    <TabPanel className="pt-2 cardmaker">
                      <Tabs>
                        <TabPanel className="pt-0">
                          <div className="d-grid innergr">


                            <ul className="ul-text toplist">
                              {result.all_universities_1.split(";").filter(r => r !== '').map((named) =>
                              (
                                <li>
                                  <Link reloadDocument={true} className="nav-link" to={"/university?country_name=" + result.country + "&university_name=" + named} onClick={refreshPage}>
                                    {named.split(";")[0]}
                                  </Link>
                                </li>
                              ))}

                            </ul>
                            <ul className="ul-text toplist">
                              {result.all_universities_2.split(";").filter(r => r !== '').map((named) =>
                              (
                                <li>
                                  <Link reloadDocument={true} className="nav-link" to={"/university?country_name=" + result.country + "&university_name=" + named} onClick={refreshPage}>
                                    {named.split(";")[0]}
                                  </Link>
                                </li>
                              ))}

                            </ul>
                            <ul className="ul-text toplist">
                              {result.all_universities_3.split(";").filter(r => r !== '').map((named) =>
                              (
                                <li>
                                  <Link reloadDocument={true} className="nav-link" to={"/university?country_name=" + result.country + "&university_name=" + named} onClick={refreshPage}>
                                    {named.split(";")[0]}
                                  </Link>
                                </li>
                              ))}

                            </ul>

                          </div>
                        </TabPanel>
                      </Tabs>
                    </TabPanel>

                    {/* service TAB START HERE */
                    /* service TAB START HERE */}



                    {/* Application & Visa Checklist TAB START HERE */
                    /* Application & Visa Checklist TAB START HERE */}

                    <TabPanel className="tabrect-t pt-2">
                      <Tabs>
                        <TabPanel className="pt-0">
                          <div className="d-grid innergrid3 px-4">
                            <div class="wrimagecard wrimagecard-topimage">
                              <a href={result.avc_pdf_1} download>
                                <div class="wrimagecard-topimage_header py-5">
                                  <center>
                                    <img
                                      src={Application0}
                                      alt="Application"
                                      width={"50%"}
                                    />
                                  </center>
                                </div>
                                <Button
                                  variant="primary w-100 primy mt-2"
                                  size="lg"
                                >
                                  {result.avc_text_1}
                                </Button>
                              </a>
                            </div>

                            <div class="wrimagecard wrimagecard-topimage">
                              <a href={result.avc_pdf_2} download>
                                <div class="wrimagecard-topimage_header py-5">
                                  <center>
                                    <img
                                      src={Application1}
                                      alt="Application"
                                      width={"50%"}
                                    />
                                  </center>
                                </div>
                                <Button
                                  variant="primary w-100 primy mt-2"
                                  size="lg"
                                >
                                  {result.avc_text_2}
                                </Button>
                              </a>
                            </div>

                            <div class="wrimagecard wrimagecard-topimage">
                              <a href={result.avc_pdf_3} download>
                                <div class="wrimagecard-topimage_header py-5">
                                  <center>
                                    <img
                                      src={Application2}
                                      alt="Application"
                                      width={"50%"}
                                    />
                                  </center>
                                </div>

                                <Button
                                  variant="primary w-100 primy mt-2"
                                  size="lg"
                                >
                                  {result.avc_text_3}
                                </Button>
                              </a>
                            </div>

                            <div class="wrimagecard wrimagecard-topimage">
                              <a href={result.avc_pdf_4} download>
                                <div class="wrimagecard-topimage_header py-5">
                                  <center>
                                    <img
                                      src={Application3}
                                      alt="Application"
                                      width={"50%"}
                                    />
                                  </center>
                                </div>

                                <Button
                                  variant="primary w-100 primy mt-2"
                                  size="lg"
                                >
                                  {result.avc_text_4}
                                </Button>
                              </a>
                            </div>
                          </div>
                        </TabPanel>
                      </Tabs>
                    </TabPanel>

                    {/* Testimonial TAB START HERE */
                    /* Testimonial TAB START HERE */}
                    {/* Dynamic testimonial Data */}
                    <TabPanel className="pt-4">
                      <div className="d-grid innergrid3 px-4">
                        <Card style={{ width: '18rem'}}>
                          <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6px' }}>
                            <img style={{borderRadius:'50%'}} src="https://placehold.co/100x100?font=roboto"/> 
                            <Card.Title style={{fontSize:'17px'}}>{result.studentName_1}</Card.Title>
                            <h6>{result.universityName_1}</h6> 
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                             {result.testimonial_1}
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                          </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem'}}>
                          <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6px' }}>
                            <img style={{borderRadius:'50%'}} src="https://placehold.co/100x100?font=roboto"/> 
                            <Card.Title style={{fontSize:'17px'}}>{result.studentName_2}</Card.Title>
                            <h6>{result.universityName_2}</h6>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                             {result.testimonial_2}
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                          </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem'}}>
                          <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6px' }}>
                            <img style={{borderRadius:'50%'}} src="https://placehold.co/100x100?font=roboto"/> 
                            <Card.Title style={{fontSize:'17px'}}>{result.studentName_3}</Card.Title>
                            <h6>{result.universityName_3}</h6>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                             {result.testimonial_3}
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                          </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem'}}>
                          <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6px' }}>
                            <img style={{borderRadius:'50%'}} src="https://placehold.co/100x100?font=roboto"/> 
                            <Card.Title style={{fontSize:'17px'}}>{result.studentName_4}</Card.Title>
                            <h6>{result.universityName_4}</h6>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                             {result.testimonial_4}
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                          </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem'}}>
                          <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6px' }}>
                            <img style={{borderRadius:'50%'}} src="https://placehold.co/100x100?font=roboto"/> 
                            <Card.Title style={{fontSize:'17px'}}>{result.studentName_5}</Card.Title>
                            <h6>{result.universityName_5}</h6>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                             {result.testimonial_5}
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                          </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem'}}>
                          <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6px' }}>
                            <img style={{borderRadius:'50%'}} src="https://placehold.co/100x100?font=roboto"/> 
                            <Card.Title style={{fontSize:'17px'}}>{result.studentName_6}</Card.Title>
                            <h6>{result.universityName_6}</h6>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                             {result.testimonial_6}
                            </Card.Text>  
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                          </Card.Body>
                        </Card> 
                      </div>
                      {/* <button onClick={myFunction} id="myBtn">
                        View More
                      </button> */}
                    </TabPanel>

                    {/* FAQ TAB START HERE */
                    /* FAQ TAB START HERE */}

                    <TabPanel className="">
                      <Row>
                        <Col md={6}>
                          <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                What is the procedure to study in Canada?
                              </Accordion.Header>
                              <Accordion.Body>
                                The first step is to get admission to a Canadian
                                Designated Learning Institution (DLI) recognized
                                by the government of Canada. Once an individual
                                receives a letter of acceptance from a DLI, he
                                or she may be able to apply for a study permit.
                                Applications may be made online or by mail. All
                                new study permits are issued at a Canadian port
                                of entry. An applicant who has submitted an
                                application to a foreign Canadian Visa Office
                                will be issued a letter of approval advising him
                                or her to travel to a Canadian port of entry to
                                have the study permit issued. A study permit is
                                generally issued for the duration of the
                                person’s studies.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                How much does it cost to study in Canada?
                              </Accordion.Header>
                              <Accordion.Body>
                                Tuition fees vary based on institution. Please
                                contact the administration where you intend to
                                study for more information.
                              </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                Are scholarships available to international
                                students in Canada?
                              </Accordion.Header>
                              <Accordion.Body>
                                Scholarships may be available to international
                                students from private, government or public
                                institutions in Canada. There may be
                                scholarships available to international students
                                from the study institution of choice.{" "}
                              </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                              <Accordion.Header>
                                Are IELTS or CELPIP required in order to submit
                                a study permit application?
                              </Accordion.Header>
                              <Accordion.Body>
                                Please note that most Canadian Universities and
                                colleges may require IELTS or proof of language
                                proficiency in order to gain admission. However,
                                please note that this is an admission
                                requirement and not a requirement for a Canadian
                                Study Permit unless applying through the Student
                                Partner Program. Therefore, it is advisable that
                                you verify with the academic institution you
                                wish to attend to determine if IELTS is required
                                and the scores needed.
                              </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                              <Accordion.Header>
                                What is biometric identification and do I need
                                it for a study permit?
                              </Accordion.Header>
                              <Accordion.Body>
                                Canada requires citizens of certain countries to
                                have their biometrics (fingerprints and
                                photographs) provided. For a complete list of
                                countries that require biometric identification,
                                More Info : +91-8882255002
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Col>
                        <Col md={6}>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                What are the processing times for a study
                                permit?
                              </Accordion.Header>
                              <Accordion.Body>
                                Processing times for study permits vary by visa
                                office. For a complete list of processing times
                                based on visa office, More info : +91-8882255002
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                Is a study permit required for short courses?
                              </Accordion.Header>
                              <Accordion.Body>
                                An applicant is not required to obtain a study
                                permit for a program, which is less than six
                                months in duration. However, if a course is
                                longer than six months, the prospective student
                                will need to apply for a study permit. There are
                                benefits to applying to a study permit even if
                                you are applying to a program that is less than
                                six months. Even if you do not need a study
                                permit, it may be beneficial to apply for one.
                                In the event that you decide to continue
                                studying in a new program after completing your
                                short-term studies, without a study permit, you
                                may be required to leave the country and apply
                                through a Canadian visa office outside Canada.
                                To apply for a permit for a short-term course or
                                program, your studies must be at a Designated
                                Learning Institution (DLI).
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                What happens next if a study permit application
                                is refused?
                              </Accordion.Header>
                              <Accordion.Body>
                                If an application is refused, the individual may
                                be able to re-apply with a new application.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                              <Accordion.Header>
                                Is a medical exam required for a study permit?
                              </Accordion.Header>
                              <Accordion.Body>
                                An applicant may be required to undergo a
                                medical examination based on the discretion of
                                the visa officer.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Col>
                      </Row>
                    </TabPanel>
                  </Tabs>
                </Col>
              </Row>
            </Container>
          );
        })}

        {/* MOBILE DESIGN LAYOUTE CODE HERE */}

        {this.state.data.map((result) => {
          
          
          return (
            <Container
              className="py-5 DesktopDisplay"
              style={{ background: "#f9fafc" }}
              fluid
            >
              <Row className="" style={{ width: "100%", margin: "auto" }}>
                <Col sm={12} md={12} className="">
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>University List</Accordion.Header>
                      <Accordion.Body>
                        <div className="d-grid innergr">
                          <ul className="ul-text toplist">
                            <li>
                              <Link
                                className=""
                                to="/university"
                                exact
                                target="_blank"
                              >
                                {result.university_list_1}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_2}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_3}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_4}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_5}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_6}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_7}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_8}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_9}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_10}
                              </Link>
                            </li>
                            <li>
                              <Link className="" to="">
                                {result.university_list_11}
                              </Link>
                            </li>

                            <span id="dots"></span>
                            <span id="more">
                              <li>
                                <Link to="">{result.university_list_12}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_13}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_14}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_15}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_16}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_17}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_18}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_19}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_20}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_21}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_22}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_23}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_24}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_25}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_26}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_27}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_28}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_29}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_30}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_31}</Link>
                              </li>
                              <li>
                                <Link to="">{result.university_list_32}</Link>
                              </li>
                            </span>
                          </ul>
                          <button onClick={myFunction} id="myBtn">
                            Read more
                          </button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* Commented as per discussed with megamind discussed */}
                    {/* <Accordion.Item eventKey="1">
                      <Accordion.Header>Services</Accordion.Header>
                      <Accordion.Body>
                        <Row
                          className=""
                          style={{ width: "100%", margin: "auto" }}
                        >
                          <Col sm={6} className="padding-b-5">
                            <div className="Countrty-Icon">
                              <img className="w-0" src={CountryA1} alt="Flag" />
                              <p className="fw-bold">
                                {"Counselling"}
                                <br />
                                {"Regarding Countries,"}
                                <br />
                                {"Colleges, Courses"}
                              </p>
                            </div>
                          </Col>
                          <Col sm={6} className="padding-b-5">
                            <div className="Countrty-Icon">
                              <img className="" src={CountryA2} alt="Flag" />
                              <p className="fw-bold">
                                {"Your Exam"}
                                <br />
                                {"Preparation"}
                                <br />
                                {"(IELTS/PTE)"}
                              </p>
                            </div>
                          </Col>

                          <Col sm={6} className="padding-b-5">
                            <div className="Countrty-Icon">
                              <img className="" src={CountryA3} alt="Flag" />
                              <p className="fw-bold">
                                {"Submiting"}
                                <br />
                                {"Complete Application"}
                                <br />
                                {"to Colleges"}
                              </p>
                            </div>
                          </Col>

                          <Col sm={6} className="padding-b-5">
                            <div className="Countrty-Icon">
                              <img className="" src={CountryA4} alt="Flag" />
                              <p className="fw-bold">
                                {"Free Payment"}
                                <br />
                                {"& Education loans"}
                              </p>
                            </div>
                          </Col>

                          <Col sm={6} className="padding-b-5">
                            <div className="Countrty-Icon">
                              <img className="" src={CountryA5} alt="Flag" />
                              <p className="fw-bold">
                                {"Preparing LOR's"}
                                <br />
                                {"SOP's & Colleges"}
                                <br />
                                {"Essays"}
                              </p>
                            </div>
                          </Col>

                          <Col sm={6} className="padding-b-5">
                            <div className="Countrty-Icon">
                              <img className="" src={CountryA6} alt="Flag" />
                              <p className="fw-bold">
                                {"Receiving"}
                                <br />
                                {"offer letters"}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item> */}

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Application & Visa Checklist
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-grid innergrid3 px-4">
                          <div class="wrimagecard wrimagecard-topimage">
                            <Link onClick={onButtonClick}>
                              <div class="wrimagecard-topimage_header py-5">
                                <center>
                                  <img
                                    src={Application0}
                                    alt="Application"
                                    width={"50%"}
                                  />
                                </center>
                              </div>

                              <Button
                                variant="primary w-100 primy mt-2"
                                size="lg"
                              >
                                Application Checklist 1
                              </Button>
                            </Link>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage">
                            <a href={PdfDownloade} download>
                              <div class="wrimagecard-topimage_header py-5">
                                <center>
                                  <img
                                    src={Application1}
                                    alt="Application"
                                    width={"50%"}
                                  />
                                </center>
                              </div>

                              <Button
                                variant="primary w-100 primy mt-2"
                                size="lg"
                              >
                                {"UG Checklist"}
                              </Button>
                            </a>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage">
                            <a
                              href="../../images/country/Application-Check-List-PG.pdf"
                              download
                            >
                              <div class="wrimagecard-topimage_header py-5">
                                <center>
                                  <img
                                    src={Application2}
                                    alt="Application"
                                    width={"50%"}
                                  />
                                </center>
                              </div>

                              <Button
                                variant="primary w-100 primy mt-2"
                                size="lg"
                              >
                                {"PG Checklist"}
                              </Button>
                            </a>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage">
                            <Link
                              href="../../images/country/Application-Check-List-PG.pdf"
                              download
                            >
                              <div class="wrimagecard-topimage_header py-5">
                                <center>
                                  <img
                                    src={Application3}
                                    alt="Application"
                                    width={"50%"}
                                  />
                                </center>
                              </div>

                              <Button
                                variant="primary w-100 primy mt-2"
                                size="lg"
                              >
                                {"Visa Checklist"}
                              </Button>
                            </Link>
                          </div>

                          <span id="dots"></span>
                          <span id="more">
                            <div class="wrimagecard wrimagecard-topimage">
                              <Link
                                href="../../images/country/Application-Check-List-PG.pdf"
                                download
                              >
                                <div class="wrimagecard-topimage_header py-5">
                                  <center>
                                    <img
                                      src={Application3}
                                      alt="Application"
                                      width={"50%"}
                                    />
                                  </center>
                                </div>

                                <Button
                                  variant="primary w-100 primy mt-2"
                                  size="lg"
                                >
                                  {"Visa Checklist"}
                                </Button>
                              </Link>
                            </div>
                            <div class="wrimagecard wrimagecard-topimage">
                              <Link
                                href="../../images/country/Application-Check-List-PG.pdf"
                                download
                              >
                                <div class="wrimagecard-topimage_header py-5">
                                  <center>
                                    <img
                                      src={Application3}
                                      alt="Application"
                                      width={"50%"}
                                    />
                                  </center>
                                </div>

                                <Button
                                  variant="primary w-100 primy mt-2"
                                  size="lg"
                                >
                                  {"Visa Checklist"}
                                </Button>
                              </Link>
                            </div>
                          </span>
                        </div>
                        <button onClick={myFunction} id="myBtn">
                          Read more
                        </button>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header> Testimonial </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-grid minnergrid2">
                          <div class="wrimagecard wrimagecard-topimage Co-Card">
                            <iframe
                              width="auto"
                              height="169"
                              src="https://www.youtube.com/embed/zvwbPWfa2WQ?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage Co-Card">
                            <iframe
                              width="auto"
                              height="169"
                              src="https://www.youtube.com/embed/QJmlkbjjWIo?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage Co-Card">
                            <iframe
                              width="auto"
                              height="169"
                              src="https://www.youtube.com/embed/dYSmzC4z6g0?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage Co-Card">
                            <iframe
                              width="auto"
                              height="169"
                              src="https://www.youtube.com/embed/AS-QgN5f6SY?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage Co-Card">
                            <iframe
                              width="auto"
                              height="169"
                              src="https://www.youtube.com/embed/zYxZSvhBkRw?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage Co-Card">
                            <iframe
                              width="auto"
                              height="169"
                              src="https://www.youtube.com/embed/OuqxPEpMyV0?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>

                          <span id="dots"></span>
                          <span id="more">
                            <div class="wrimagecard wrimagecard-topimage Co-Card">
                              <iframe
                                width="auto"
                                height="169"
                                src="https://www.youtube.com/embed/lF7XItt1Xx8?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </span>
                        </div>
                        <button onClick={myFunction} id="myBtn">
                          Read more
                        </button>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header> Team </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-grid innergrid3 px-4">
                          <div class="wrimagecard wrimagecard-topimage">
                            <div class="wrimagecard-topimage_header p-0">
                              <center>
                                <img
                                  src={TeamImage}
                                  alt="Application"
                                  width={"100%"}
                                />
                              </center>
                            </div>

                            <Button
                              variant="primary w-100 primy mt-2"
                              size="lg"
                            >
                              Name Here
                            </Button>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage">
                            <div class="wrimagecard-topimage_header p-0">
                              <center>
                                <img
                                  src={TeamImage}
                                  alt="Application"
                                  width={"100%"}
                                />
                              </center>
                            </div>

                            <Button
                              variant="primary w-100 primy mt-2"
                              size="lg"
                            >
                              {"Name Here"}
                            </Button>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage">
                            <div class="wrimagecard-topimage_header p-0">
                              <center>
                                <img
                                  src={TeamImage}
                                  alt="Application"
                                  width={"100%"}
                                />
                              </center>
                            </div>

                            <Button
                              variant="primary w-100 primy mt-2"
                              size="lg"
                            >
                              {"Name Here"}
                            </Button>
                          </div>

                          <div class="wrimagecard wrimagecard-topimage">
                            <div class="wrimagecard-topimage_header p-0">
                              <center>
                                <img
                                  src={TeamImage}
                                  alt="Application"
                                  width={"100%"}
                                />
                              </center>
                            </div>

                            <Button
                              variant="primary w-100 primy mt-2"
                              size="lg"
                            >
                              {"Name Here"}
                            </Button>
                          </div>

                          <span id="dots"></span>
                          <span id="more">
                            <div class="wrimagecard wrimagecard-topimage">
                              <div class="wrimagecard-topimage_header p-0">
                                <center>
                                  <img
                                    src={TeamImage}
                                    alt="Application"
                                    width={"100%"}
                                  />
                                </center>
                              </div>

                              <Button
                                variant="primary w-100 primy mt-2"
                                size="lg"
                              >
                                {"Name Here"}
                              </Button>
                            </div>
                            <div class="wrimagecard wrimagecard-topimage">
                              <div class="wrimagecard-topimage_header p-0">
                                <center>
                                  <img
                                    src={TeamImage}
                                    alt="Application"
                                    width={"100%"}
                                  />
                                </center>
                              </div>

                              <Button
                                variant="primary w-100 primy mt-2"
                                size="lg"
                              >
                                {"Name Here"}
                              </Button>
                            </div>
                          </span>
                        </div>
                        <button onClick={myFunction} id="myBtn">
                          Read more
                        </button>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header> FAQ </Accordion.Header>
                      <Accordion.Body>
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              What is the procedure to study in Canada?
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="qaccpara">
                                {
                                  "The first step is to get admission to a Canadian Designated Learning Institution (DLI) recognized by the government of Canada. Once an individual receives a letter of acceptance from a DLI, he or she may be able to apply for a study permit. Applications may be made online or by mail. All new study permits are issued at a Canadian port of entry. An applicant who has submitted an application to a foreign Canadian Visa Office will be issued a letter of approval advising him or her to travel to a Canadian port of entry to have the study permit issued. A study permit is generally issued for the duration of the person’s studies."
                                }
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              How much does it cost to study in Canada?
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="qaccpara">
                                {
                                  " Tuition fees vary based on institution. Please contact the administration where you intend to study for more information. "
                                }
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>
                              Are scholarships available to international
                              students in Canada?
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="qaccpara">
                                {
                                  " Scholarships may be available to international students from private, government or public institutions in Canada. There may be scholarships available to international students from the study institution of choice. "
                                }
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>
                              Are IELTS or CELPIP required in order to submit a
                              study permit application?
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="qaccpara">
                                {
                                  " Please note that most Canadian Universities and colleges may require IELTS or proof of language proficiency in order to gain admission. However, please note that this is an admission requirement and not a requirement for a Canadian Study Permit unless applying through the Student Partner Program. Therefore, it is advisable that you verify with the academic institution you wish to attend to determine if IELTS is required and the scores needed. "
                                }
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="4">
                            <Accordion.Header>
                              What is biometric identification and do I need it
                              for a study permit?
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="qaccpara">
                                {
                                  "Canada requires citizens of certain countries to have their biometrics (fingerprints and photographs) provided. For a complete list of countries that require biometric identification, More Info : +91-8882255002 "
                                }
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="5">
                            <Accordion.Header>
                              How much does it cost to study in Canada?
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="qaccpara">
                                {
                                  " Processing times for study permits vary by visa office. For a complete list of processing times based on visa office, More info : +91-8882255002 "
                                }
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Is a study permit required for short courses?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="qaccpara">
                          {
                            "An applicant is not required to obtain a study permit for a program, which is less than six months in duration. However, if a course is longer than six months, the prospective student will need to apply for a study permit. There are benefits to applying to a study permit even if you are applying to a program that is less than six months. Even if you do not need a study permit, it may be beneficial to apply for one. In the event that you decide to continue studying in a new program after completing your short-term studies, without a study permit, you may be required to leave the country and apply through a Canadian visa office outside Canada. To apply for a permit for a short-term course or program, your studies must be at a Designated Learning Institution (DLI)."
                          }
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        What happens next if a study permit application is
                        refused?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="qaccpara">
                          {
                            " If an application is refused, the individual may be able to re-apply with a new application. "
                          }
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Is a medical exam required for a study permit?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="qaccpara">
                          {
                            " An applicant may be required to undergo a medical examination based on the discretion of the visa officer. "
                          }
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Container>
          );
        })}

        {this.state.data.map((result) => {
          return (
            <Container className="mobile-padding mt-5" fluid>
              <Row
                className="l-canda pb-5"
                style={{ width: "85%", margin: "auto" }}
              >
                <Col sm={12} md={6} className="p-5">
                  <h2 className="text-center text-black fw-bold pt-3 pb-5">
                    Cost Of Living in {result.country}
                  </h2>
                  <div className="Count-C text-center">
                    <img className="w-95" src={LivingImage} alt="Flag" />
                  </div>
                </Col>
                <Col sm={12} md={6} className="p-4">
                  <h2 className="text-center text-black fw-bold pt-4 pb-4">
                    Monthly Living Expenses {result.country}
                  </h2>
                  <div className="Count-Cd  text-center px-4">
                    <div className="Count-Cda py-4">
                      <img className="" src={result.mle_img_url_1} alt="Flag" />
                      <h5 className="fw-bold text-black m-0 pt-2">
                        {" "}
                        {result.mle_text_1}{" "}
                      </h5>
                    </div>
                    <div className="Count-Cda py-4">
                      <img className="" src={result.mle_img_url_2} alt="Flag" />
                      <h5 className="fw-bold text-black m-0 pt-2">
                        {" "}
                        {result.mle_text_2}{" "}
                      </h5>
                    </div>
                    <div className="Count-Cda py-4">
                      <img className="" src={result.mle_img_url_3} alt="Flag" />
                      <h5 className="fw-bold text-black m-0 pt-2">
                        {" "}
                        {result.mle_text_3}{" "}
                      </h5>
                    </div>
                    <div className="Count-Cda py-4">
                      <img className="" src={result.mle_img_url_4} alt="Flag" />
                      <h5 className="fw-bold text-black m-0 pt-2">
                        {" "}
                        {result.mle_text_4}{" "}
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}

        {this.state.data.map((result) => {
          return (
            <Container className="mobile-padding" fluid>
              <Row className="" style={{ width: "85%", margin: "auto" }}>
                <Col sm={12} md={12} className="pb-4">
                  <h2 className="display-6 text-center">
                    Part Time Careers and work Opportunities in {result.country}
                  </h2>
                </Col>

                <Col sm={4} md={3} className="padding-b-5">
                  <div className="Countrty-Icon">
                    <img className="w-0" src={result.pt_img_url_1} alt="Flag" />
                    <p className="fw-bold">{result.pt_txt_1}</p>
                  </div>
                </Col>
                <Col sm={4} md={3} className="padding-b-5">
                  <div className="Countrty-Icon">
                    <img className="" src={result.pt_img_url_2} alt="Flag" />
                    <p className="fw-bold">{result.pt_txt_2}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-b-5">
                  <div className="Countrty-Icon">
                    <img className="" src={result.pt_img_url_3} alt="Flag" />
                    <p className="fw-bold">{result.pt_txt_3}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-b-5">
                  <div className="Countrty-Icon">
                    <img className="" src={result.pt_img_url_4} alt="Flag" />
                    <p className="fw-bold">{result.pt_txt_4}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-b-5">
                  <div className="Countrty-Icon">
                    <img className="" src={result.pt_img_url_5} alt="Flag" />
                    <p className="fw-bold">{result.pt_txt_5}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-b-5">
                  <div className="Countrty-Icon">
                    <img className="" src={result.pt_img_url_6} alt="Flag" />
                    <p className="fw-bold">{result.pt_txt_6}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-b-5">
                  <div className="Countrty-Icon">
                    <img className="" src={result.pt_img_url_7} alt="Flag" />
                    <p className="fw-bold">{result.pt_txt_7}</p>
                  </div>
                </Col>

                <Col sm={4} md={3} className="padding-b-5">
                  <div className="Countrty-Icon">
                    <img className="" src={result.pt_img_url_8} alt="Flag" />
                    <p className="fw-bold">{result.pt_txt_8}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}
      </>
    );
  }
}

export default Country;
