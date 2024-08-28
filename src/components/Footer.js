import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Maplogo from "../images/imagev.PNG"; 
import img from '../images/whatsapp.png';

import Megamindlogo from "../images/megamind-logo.png";
import FlightLogo from "../images/flight.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import About from "./about/About";
import Form from "react-bootstrap/Form";
import emailjs from '@emailjs/browser';
import PhoneInput from "react-phone-number-input";
import axios from 'axios';

import Flag0 from "../images/flag/flag0.png";
import Flag1 from "../images/flag/flag1.png";
import Flag2 from "../images/flag/flag2.png";
import Flag3 from "../images/flag/flag3.png";
import Flag4 from "../images/flag/flag4.png";
import Flag5 from "../images/flag/flag5.png";
import Flag6 from "../images/flag/flag6.png"; 
import swiss from '../images/swiss-flag.png';




function Footer() {

  const [show, setShow] = useState(false);

  const [viewCountries,setViewCountries] = useState(false)

  const [value, setValue] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Controls for contries popup
  const handleViewCont = () => setViewCountries(true)
  const handleCloseCont = () => setViewCountries(false)

  // Function from back to top
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  function sendEmail(e) {
    e.preventDefault();
    //alert("sendEmail called...");
    var name = document.getElementById("to_name").value;
    var email = document.getElementById("to_email").value;
    var country = document.getElementById("to_state").value;
    var mobile_no = document.getElementById("to_contact").value;

    var geturl = 'https://megamindonline.com/admin/webmanager/controller.php?command=SEND_ENQUIRY_EMAIL&name=' + name + "&email=" + email + "&country=" + country + "&mobile=" + mobile_no;
    console.log("geturl=" + geturl);
    axios.get(geturl).then(res => {
      // Clear the forms after submission
      document.getElementById("to_name").value = '';
      document.getElementById("to_email").value = '';
      document.getElementById("to_state").value = '';
      document.getElementById("to_contact").value = '';
      alert("Your enquiry has been registered successfully."); 
      handleClose()
      setValue('')
    });
  }
  return (
    <>

      <BrowserRouter>
        <Container fluid>
          <Row
            className="py-5 border-t"
            style={{ width: "80%", margin: "auto" }}
          >
            <Col sm={6} md={4}>
              <div className="">
                <NavLink
                  className=""
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "white",
                  })}
                >
                  <img
                    src={Megamindlogo}
                    className="mobile-bottom"
                    alt="Megamind logo"
                  />
                </NavLink>
                <div className="padding-top-5 pb-2">
                  <NavLink to="https://www.facebook.com/megamindcon/" target="_blank" className="fa-brands fa-facebook mega-icon"></NavLink>
                  <NavLink to="https://www.instagram.com/megamindconsultants/" target="_blank" className="fa-brands fa-instagram mega-icon"></NavLink>
                  <NavLink to="https://in.linkedin.com/company/megamindcon" target="_blank" className="fa-brands fa-linkedin mega-icon"></NavLink>
                  <NavLink to="https://www.youtube.com/channel/UCkSuejbTdz5Nn3Bf4x8ADCQ" target="_blank" className="fa-brands fa-youtube mega-icon"></NavLink>
                  <NavLink to="https://twitter.com/megamindcon" target="_blank" className="fa-brands fa-x-twitter mega-icon">  <FontAwesomeIcon /> </NavLink>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4} className="paras">
              <h5 className="fw-bold text-black">DELHI OFFICE</h5>
              <p className="fw-bold p-para pt-2"> Megamind Consultants</p>
              <p className="fw-bold p-para"> info@megamindonline.com</p>
              <p className="fw-bold p-para">
                2nd Floor, 49 Ring Road, Lajpat Nagar-lll,
                <br /> New Delhi-110024, India
              </p>
              <p className="fw-bold p-para"> +91-888-225-5001</p>
            </Col>
            <Col sm={12} md={4}>
              <NavLink
                className="navbar-brand"
                target="_blank"
                to="https://maps.app.goo.gl/AgtnNt6BQKfGjSzh8"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
              >
                <img src={Maplogo} className="w-100" alt="logo" />
              </NavLink>
            </Col>
          </Row>

          <Row
            className="py-5 border-top"
            style={{ width: "80%", margin: "auto" }}
          >
            <Col sm={6} md={2}>
              <ul className="list-style-none p-0">
                <li>
                  <a className="list-style" href="/about" exact>
                    {"About Megamind "}
                  </a>
                </li>

                {/* <li>
                  <NavLink className="list-style" to="./">
                    {"  Work with us "}
                  </NavLink>
                </li> */}
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <ul className="list-style-none p-0">
                <li>
                  <a className="list-style" href="./" exact>
                    {"Home "}
                  </a>
                </li>

                <li>
                  <a className="list-style" href="/Ielts" exact>
                    {"IELTS Prepartion "}
                  </a>
                </li>
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Premium University Counselling"}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Human Resource"}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Student Testimonials "}
                  </NavLink>
                </li> */}
                <li>
                  <NavLink className="list-style" variant="primary" onClick={handleShow} to="/">
                    {"Registration Form "}
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Visa Services"}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" target="_blank" to="/blog">
                    {"Blog"}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Consultant Study in Australia "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Consultant Study in Canada "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Consultant Study in United Kingdom"}
                  </NavLink>
                </li> */}
              </ul>
            </Col>
            <Col sm={6} md={2}>
              <ul className="list-style-none p-0">
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Study Abroad "}
                  </NavLink>
                </li> */}
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=GERMANY" exact>
                    {" Study in Germany "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=CANADA" exact>
                    {" Study in Canada "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=Australia" exact>
                    {" Study in Australia "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=UK" exact>
                    {"Study in United Kingdom "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=IRELAND" exact>
                    {" Study in Ireland "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=New Zealand" exact>
                    {" Study in New-Zealand "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=USA" exact>
                    {"Study in USA"}
                  </NavLink>
                </li>



              </ul>
            </Col>

            {/* Part to be removed from the footer */}
            {/* <Col sm={6} md={1}>
              <ul className="list-style-none p-0">
                <li>
                  <NavLink className="list-style" to="/">
                    {"Tests "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"IELTS"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"GMAT"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {" GRE "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {" SAT"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"TOEFL "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {" PTE"}
                  </NavLink>
                </li>
              </ul>
            </Col> */}

            <Col sm={12} md={2}>
              <ul className="list-style-none p-0">
                <li>
                  <NavLink className="list-style" to="https://franchise.megamindonline.com/">
                    {"Franchise "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="https://www.megamindonline.com/financeservices">
                    {" Financial Services"}
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"MBA in Canada "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Top Colleges in Toronto "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Universities in Canada "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Colleges in Toronto "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Colleges in Vancouver "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" 2 Years Programs in Canada "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"MBA in UK"}
                  </NavLink>
                </li> */}
              </ul>
            </Col>

            <Col sm={12} md={2}>
              <ul className="list-style-none">
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Other Links"}
                  </NavLink>
                </li> */}
                <li>
                  <NavLink className="list-style" exact target="_blank" to="/privacy-policy">
                    {" Privacy Policy"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"Terms & Conditions "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"   Responsible Disclosure Policy "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {" EEO Policy "}
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Sitemap"}
                  </NavLink>
                </li> */}
              </ul>
            </Col>
          </Row>


          {/* modal pop up start here */}

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Enquiry Now</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="py-3" onSubmit={sendEmail}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="to_name"
                    name='to_name'
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="to_email"
                    name='to_email'
                    aria-describedby="emailHelp"
                    placeholder="Email Id"
                    required
                  />
                </div>
                <div class="form-group">
                  <PhoneInput
                    className="form-control"
                    placeholder="Contact No"
                    id="to_contact"
                    value={value}
                    onChange={setValue}
                   defaultCountry="IN"
                    rules={{ required: true }}
                    name='to_contact'
                    required
                  />
                </div>



                <Row>

                  <Col sm={12} md={12} className="">

                    <div class="form-group">
                      <select class="form-control" name='to_state' id="to_state" required>

                      <option value="" disabled selected>Select Country</option>
                        <option>Canada</option>
                        <option>Germany</option>
                        <option>Australia</option>
                        <option>U.K.</option>
                        <option>New Zealand</option>
                        <option>Ireland</option>
                      </select>
                    </div>
                    {/* <div class="form-group">
                          <select class="custom-select form-control" required>
                            <option value="">State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <div class="invalid-feedback">
                            Example invalid custom select feedback
                          </div>
                        </div> */}
                  </Col>
                </Row>

                <input
                  type="submit"
                  class="mt-btn btn btn-secondary btn-sm megaming-pop"
                  value="Submit" 
                />
              </Form>
            </Modal.Body>
          </Modal>


          {/* modal pop up end  here */}

          {/* new modal popup for contries  */}
          <Modal
            show={viewCountries}
            onHide={handleCloseCont}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Select Countries</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="">
              <div className="img-cont">
                <div class="img-wim">
                  <NavLink to="/country?code=UK" target="_blank">
                    <img
                      src={Flag0}
                      className="img-imo zoom-thumbnail w-60 Flag"
                      // style={{ marginTop: "-50px" }}
                      alt="ImageMaker"
                      title="United Kingdom"
                    />
                  </NavLink>
                </div>
                <h2 className="country-name">Study in United Kingdom</h2>
              </div>
              <div className="img-cont">
                <div class="img-wim">
                  <NavLink to="/country?code=USA" target="_blank">
                    <img
                      src={Flag1}
                      className="img-imo zoom-thumbnail  w-60 Flag"
                      // style={{ marginTop: "-50px" }}
                      alt="ImageMaker"
                      title=" United States of America"
                    />
                  </NavLink>
                </div>
                <h2 className="country-name">Study in United States of America</h2>
              </div>
              <div className="img-cont">
                <div class="img-wim">
                  <NavLink to="/country?code=GERMANY" target="_blank">
                    <img
                      src={Flag3}
                      className="img-imo zoom-thumbnail  w-60 Flag"
                      // style={{ marginTop: "-50px" }}
                      alt="ImageMaker"
                      title="Germany"
                    />
                  </NavLink>
                </div>
                <h2 className="country-name"> Study in Germany</h2>
              </div>
              {/* <NavLink to="/country?code=New Zealand" target="_blank">
                <img
                  src={Flag4}
                  className="zoom-thumbnail  w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title="New Zealand"
                />
              </NavLink> */}

              {/* <NavLink to="/country?code=IRELAND" target="_blank">
                <img
                  src={Flag6}
                  className="zoom-thumbnail  w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title="Ireland"
                />
              </NavLink> */}
              {/* <NavLink> <img src={ArtbordImage} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink> */}
            </div>
            <div className="">
              <div className="img-cont">
                <div class="img-wim">
                  <NavLink to="/country?code=CANADA" target="_blank" className="width-img-fleg">
                    <img
                      src={Flag2}
                      className="img-imo zoom-thumbnail  w-60 Flag"
                      // style={{ marginTop: "-50px" }}
                      alt="ImageMaker"
                      title="Canada"
                    />
                  </NavLink>
                </div>

                <h2 className="country-name"> Study in Canada</h2>

              </div>
              <div className="img-cont">
                <div class="img-wim">
                  <NavLink to="/country?code=Australia" target="_blank">
                    <img
                      src={Flag5}
                      className="img-imo zoom-thumbnail  w-60 Flag"
                      // style={{ marginTop: "-50px" }}
                      alt="ImageMaker"
                      title="Australia"
                    />

                  </NavLink>
                </div>
                <h2 className="country-name"> Study in Australia</h2>
              </div>
              <div className="img-cont">
                <div class="img-wim">
                  <NavLink to="/country?code=Australia" target="_blank">
                    <img
                      src={Flag6}
                      className="img-imo zoom-thumbnail  w-60 Flag"
                      // style={{ marginTop: "-50px" }}
                      alt="ImageMaker"
                      title="Australia"
                    />

                  </NavLink>
                </div>
                <h2 className="country-name"> Study in Ireland</h2>
              </div>
              <div className="img-cont">
                <div class="img-wim">
                  <NavLink to="/country?code=Australia" target="_blank">
                    <img
                      src={swiss}
                      className="img-imo zoom-thumbnail  w-60 Flag"
                      // style={{ marginTop: "-50px" }}
                      alt="ImageMaker"
                      title="Australia"
                    />

                  </NavLink>
                </div>
                <h2 className="country-name"> Study in Switzerland</h2>
              </div>

            </div>
            </Modal.Body>
          </Modal>

          <Row
            className="border-top pt-3"
            style={{ width: "80%", margin: "auto" }}
          >
            <Col sm={12} md={8}>
              <p style={{ lineHeight: "54px" }} className="p-para">
              ©Copyright 2024. Megamind Consultants All rights reserved. |
                Powered by <NavLink className="list-style" to="https://www.digitalxplode.com/">DigitalXplode</NavLink>
              </p>
            </Col>

            <Col sm={12} md={4}>
              <a
                onClick={backTop}
                className="btn btn-pad2 btn-sm btn-outline-primary"
              >
                {"Back on Top "}
                <BsFillArrowUpCircleFill
                  style={{ fontSize: "22px", marginLeft: "10" }}
                />
              </a>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="">
            <Col sm={12} md={12} className="p-0">
              <div class="webfooter_slideshow__d1IHp">
                <img
                  src={FlightLogo}
                  alt=""
                  srcset=""
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "40%",
                    height: "88px",
                    zIndex: "1",
                  }}
                />
                <div class="webfooter_images__JoxIN"></div>
              </div>
            </Col>
          </Row>
        </Container>

        <Routes>
          <Route exact path="/about" component={About} />
        </Routes>
      </BrowserRouter>

      {/* bottom call and whatsapp CTA */}
      <Col sm={12} className="bottom-fixed-links">
        <li><a className="bottomPatti" href="https://api.whatsapp.com/send/?phone=%2B918882255001&text&type=phone_number&app_absent=0"><img src={img}/><span>Connect</span></a></li>
        <li><a className="bottomPatti" href="tel:+919990737589"><i class="fa-solid fa-phone"></i><span>Call us</span></a></li>
        <li><a className="bottomPatti" href="https://megamindonline.com/course-finder/"><i class="fa-solid fa-magnifying-glass"></i><span>Course finder</span></a></li>
        <li><a onClick={handleViewCont} className="bottomPatti"><i class="fa-solid fa-earth-africa"></i><span>Countries</span></a></li>
        <li><a className="bottomPatti" href="https://megamindonline.com/Ielts"><i class="fa-solid fa-plane-up"></i><span>IELTS</span></a></li>
        <li><a className="bottomPatti" href="https://megamindonline.com/about"><i class="fa-solid fa-people-group"></i><span>About Us</span></a></li>
      </Col>
    </>
  );
}
export default Footer;
