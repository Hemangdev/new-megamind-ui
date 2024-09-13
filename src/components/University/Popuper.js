import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Imagesl from "../../images/contact/conayts.png";
import ClientView from "../ClientView";

function Popuper() {
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

                <div className="conatct-boxx p-0" id="enquiry">
                  <h3 className="text-center"> Enquiry Now </h3>
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
                        defaultCountry=""
                        rules={{ required: true }}
                        name='to_contact'
                        required
                      />
                    </div>

                 

                    <Row>

                      <Col sm={12} md={12} className="">
                      
                      <div class="form-group">
                    <select class="form-control" name='to_state' id="to_state" required>
                    <option>Canada</option>
                    <option>Germany</option>
                    <option>Australia</option>
                    <option>U.K.</option>
                    <option>Swizerland</option>
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
                      class="mt-btn btn btn-secondary btn-sm"
                      value="Submit"
                    />
                  </Form>
                </div>

    </>
  );
}

export default Popuper;
