import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./contact.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Imagesl from "../../images/contact/conayts.png";
import ClientView from "../ClientView";

function Contact() {
  const [value, setValue] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8b102k6', 'template_hicgsvv', form.current, 'BtddOTkC2IjvFqF4O')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent Successfully");
          alert('Thank you for filling out your information!');
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <Container className="top-bg" fluid>
        <Row className="" style={{ width: "80%", margin: "auto" }}>
          <Col sm={12} md={12} className="py-5">
            <div className="heightConatct"></div>
          </Col>

          <Col sm={12} md={6} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="pb-5" fluid>
        <Row className="py-5 mt-5" style={{ width: "80%", margin: "auto" }}>
          <div className="contact-u" sm={12} md={12}>
            <Row className="">
              <Col sm={12} md={7}>
                <img src={Imagesl} alt="imager" width={"100%"}></img>
              </Col>

              <Col sm={12} md={5}>
                <div className="conatct-boxx m-3" id="enquiry">
                  <h2 className="text-center fw-bold"> Contact Form </h2>
                  <Form className="py-3" ref={form} onSubmit={sendEmail}>
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
                      <PhoneInput
                        className="form-control"
                        placeholder="Contact No"
                        id="to_contact"
                        value={value}
                        onChange={setValue}
                        defaultCountry=""
                        rules={{ required: true }}
                        name='to_contact'
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

                    <Row>
                      <Col sm={12} md={6} className="">

                      <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name='to_city'
                        id="to_city"
                        placeholder="City Name"
                        required
                      />
                    </div>
{/* 
                        <div class="form-group">
                          <select class="custom-select form-control" required>
                            <option value="">City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <div class="invalid-feedback">
                            Example invalid custom select feedback
                          </div>
                        </div> */}
                      </Col>
                      <Col sm={12} md={6} className="">
                      <div class="form-group">
                      <input
                        type="text"
                        name='to_state'
                        class="form-control"
                        id="to_state"
                        placeholder="State Name"
                        required
                      />
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
                      <Col sm={12} md={12} className="">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="defaultCheck1"
                          />
                          <label class="form-check-label" for="defaultCheck1">
                            <small>I authorize Megamind Consultants representatives to
                            Call, SMS, Email or WhatsApp me about its products
                            and offers. This consent overrides any registration
                            for DNC / NDNC.</small>
                          </label>
                        </div>
                      </Col>
                    </Row>

                    <input
                      type="submit"
                      class="mt-btn btn btn-secondary btn-sm"
                      value="Submit"
                    />
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>

      <ClientView />
    </>
  );
}

export default Contact;
