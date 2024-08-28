import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -42%)",
    width: "40%",
    borderRadius: "22px",
    border: "none",
    padding: "15px 20px",
    zIndex:"9999",
    background:"white",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
  },
};





function Courses() {






// popup form start code
// popup form start code


const [value, setValue] = useState();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }


// popup form end code
// popup form end code


  return (

    <>
      <Container className="py-5 service-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={6} className="py-5">
            <h2 className="display-2 fw-bold text-white">Available Courses</h2>
          </Col>

          <Col sm={12} md={6} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="padding-5" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={12} className="pt-4 pb-4 text-center">
            <h2 className="display-6"> Available Courses </h2>
          </Col>

          {/* Fist Courses Start Here*/}

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={openModal}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>

          {/* Fist Courses End Here*/}

          {/* Second Courses Start Here*/}

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={openModal}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>

          {/* Second Courses End Here*/}

          {/* Third Courses Start Here*/}

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={openModal}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>

          {/* Third Courses End Here*/}

          {/* Fourth Courses Start Here*/}
          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={openModal}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
          {/* Fourth Courses End Here*/}

          {/* Five Courses Start Here*/}
          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={openModal}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
          {/* Five Courses End Here*/}

          {/* Six Courses Start Here*/}
          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={openModal}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
          {/* Six Courses End Here*/}
        </Row>
      </Container>


{/* MODEL POPUP FORM */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="btn btn-primary float-right" onClick={closeModal}>
          x
        </button>
        <h3 style={{fontSize:"24px"}} className="text-black text-center pt-2"  ref={(_subtitle) => (subtitle = _subtitle)}> Start your journey at the University  </h3>
        <p style={{fontSize:"16px", textAlign:"center"}}>Take the first step to make your study abroad dream a reality. Get end-to-end assistance with shortlisting, applications, scholarships, visa, finance and more.</p>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Full Name"
                defaultValue="Rahul Singh"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Email Id"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a Email Id.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <PhoneInput
                className="form-control"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                defaultCountry="IN"
                rules={{ required: true }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Select size="lg">
                <option>Select State</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>New Zealand</option>
                <option>Ireland</option>
                <option>United Kingdom</option>
                <option>United States of America</option>

              </Form.Select>
            </Form.Group>

          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" className="btn btn-primary text-center m-auto d-block">Submit Form</Button>
        </Form>
      </Modal>

    </>
  );
}

export default Courses;
