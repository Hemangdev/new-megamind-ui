import React, { useState } from "react";
import { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ArtbordImage from "../images/ArtbordImage.png";
import Flag0 from "../images/flag/flag0.png";
import Flag1 from "../images/flag/flag1.png";
import Flag2 from "../images/flag/flag2.png";
import Flag3 from "../images/flag/flag3.png";
import Flag4 from "../images/flag/flag4.png";
import Flag5 from "../images/flag/flag5.png";
import Flag6 from "../images/flag/flag6.png";
import swiss from '../images/swiss-flag.png';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import axios from 'axios';
import emailjs from '@emailjs/browser';
import spinner from '../assets/spinner.gif'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
// import $ from 'jquery';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ArtboardHome() {



  const [value, setValue] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // New form controls here
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  // Values for the new form of (Download Brochure)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userNumber, setUserNumber] = useState("")
  const [loader, setLoader] = useState(false)
  console.log('Hello testing megamind');
  





  // Function for submiting the form (Download Brochure)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    const serviceId = "service_czesrtn"
    const templateId = "template_ztm3fuc"
    const publicKey = "myJSrqn8i1LAsCUMo"

    // Object that has a dyanmic values of params
    const templateParams = {
      from_name: userName,
      from_email: userEmail,
      from_number: userNumber,
    }

    // function to sending the data using emailjs library
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(response => {

        console.log('SUCCESS!', response.status, response.text);
        window.open('https://megamindonline.com/Megamind-Brochure.pdf', '_blank');
        setUserName('')
        setUserEmail('')
        setUserNumber('')
        setLoader(false)
        setIsOpen(false)

      }, error => {
        console.error('FAILED...', error);
        console.log(error); // Log the entire error object
        setLoader(false)
      });
  }







  // New Forms functions here
  const newModal = () => {
    setIsNewModalOpen(true)
  }
  const closeNewModal = () => {
    setIsNewModalOpen(false)
  }


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }








  function sendEmail(e) {
    e.preventDefault();
    //alert("sendEmail called...");
    var name = document.getElementById("inlineFormInputName").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var country = document.getElementById("exampleFormControlSelect1").value;
    var mobile_no = document.getElementById("mobile_no").value;
    var geturl = 'https://megamindonline.com/admin/webmanager/controller.php?command=SEND_ENQUIRY_EMAIL&name=' + name + "&email=" + email + "&country=" + country + "&mobile=" + mobile_no;
    console.log("geturl=" + geturl);
    axios.get(geturl).then(res => {
      // Clear the form fields after submiting the form
      document.getElementById("inlineFormInputName").value = '';
      document.getElementById("exampleInputEmail1").value = '';
      document.getElementById("exampleFormControlSelect1").value = '';
      document.getElementById("mobile_no").value = '';
      alert("Your enquiry has been registered successfully.");


    });
  }

  return (
    <>

      <Container id="top" className="Bg-Home" fluid>
        <Row className="py-5" style={{ width: "80%", margin: "auto" }} id="enquiry">
          <Col sm={12} md={5}>
            <h2 className="text-left display-8 fw-light text-black">
              {" Your Study  "}
              <br /> {"Abroad Expert"}
            </h2>
            <p className="m-0 pt-2 pb-4 paragraph">
              {
                " The largest Personalised student Counselling Study Abroad Platform in the World. Obsessed with Student Success. "
              }
            </p>
            <div className="d-grind">
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
                <h2 className="country-name">UK</h2>
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
                <h2 className="country-name">USA</h2>
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
                <h2 className="country-name">Germany</h2>
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

            <div className="d-grind">
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

                <h2 className="country-name">Canada</h2>

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
                <h2 className="country-name">Australia</h2>
              </div>
              <div className="img-cont">
                <div class="img-wim">
                  <NavLink to="/country?code=Australia" target="_blank">
                    <img
                      src={swiss}
                      className="img-imo zoom-thumbnail  w-60 Flag"
                      style={{borderRadius:'50%'}}
                      // style={{ marginTop: "-50px" }}
                      alt="ImageMaker"
                      title="Australia"
                    />

                  </NavLink>
                </div>
                <h2 className="country-name">Switzerland</h2>
              </div>

            </div>
            {/* Removed as per discussed with Megamind Team */}
            {/* <button
              type="submit"
              onClick={openModal}
              class="mt-button btn btn-primary w-60 dwn-btn"
            >
              Download Brochure
            </button> */}


          </Col>

          <Col sm={12} md={3}>
            <NavLink>
              <img
                src={ArtbordImage}
                className="w100"
                style={{ marginTop: "0px" }}
                alt="ImageMaker"
              />
            </NavLink>
          </Col>

          <Col sm={12} md={4}>
            <div className="card-boxx m-3">
              <h4 className="text-center fw-thin">Enquiry Now </h4>
              <Form className="py-3" method="Post">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputName"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email ID"
                    required
                  />
                </div>

                <div class="form-group">

                  <select class="form-control form-select py-2" id="exampleFormControlSelect1" required>

                    <option value="" disabled selected>Select Country</option>

                    <option>Canada</option>
                    <option>Germany</option>
                    <option>Australia</option>
                    <option>U.K.</option>
                    <option>New Zealand</option>
                    <option>Ireland</option>
                    <option>USA</option>
                  </select>
                </div>
                <div class="form-group">
                  <PhoneInput
                    className="form-control"
                    type="tel"
                    limitMaxLength={10} 
                    id="mobile_no"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    defaultCountry="IN"
                    rules={{ required: true }}
                    required
                  />
                </div>

                <input type="button" class="mt-btn btn btn-primary" value="Submit" onClick={sendEmail} />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="makin">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <button style={{borderRadius:'50%',width:'12%'}} onClick={closeModal} className="btn btn-primary float-right">
          
          </button> */}
          <IoMdCloseCircleOutline style={{cursor:'pointer'}} onClick={closeModal} size={30} color="#036ab7" className="float-right"/>

          <form onSubmit={handleFormSubmit} target="_blank" className="py-3" style={{ width: "300px" }}>
            <div class="form-group">
              <label for="name" className="py-2">
                {"Full Name"}
              </label>
              <input
                type="name"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                class="form-control"
                name="name"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div class="form-group">
              <label for="Email" className="py-2">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="Email"
                name="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            {/* phone number field here */}
            <div class="form-group pb-4">
              <label for="Phone" className="py-2">
                Phone No.
              </label>
              <input
                type="Phone"
                class="form-control"
                id="Phone"
                name="Phone"
                value={userNumber}
                onChange={(e) => setUserNumber(e.target.value)}
                aria-describedby="emailHelp"
                placeholder="Enter Phone"
                required
              />
            </div>
            <input
              type="submit"
              className="btn py-3 btn-primary w-100"
              value="Download Brochure"
            />
            <div>
              {
                loader && <img style={{ width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '40%', marginTop: '25px' }} src={spinner} />
              }

            </div>


          </form>
        </Modal>
      </div>
    </>
  );
}

export default ArtboardHome;
