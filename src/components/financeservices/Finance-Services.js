import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./finance.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Form from "react-bootstrap/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import FirstImage1 from "../../images/finance/first1.png";
import FirstImage2 from "../../images/finance/first2.png";
import FirstImage3 from "../../images/finance/first3.png";
import FirstImage4 from "../../images/finance/first4.png";
import FirstImage5 from "../../images/finance/first5.png";
import FirstImage6 from "../../images/finance/first6.png";
import FormImager from "../../images/finance/formemial.png";
import ImageEmi from "../../images/finance/ghfdh.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from "react-bootstrap/Accordion";
import ClientView from "../ClientView";





function FinanceServices() {
  // Form code Start
  const [value, setValue] = useState();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  // Form code end
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b8e209k', 'template_5y8dn5w', form.current, 'CGZSsii0ceT-gxRzI')
      .then((result) => {
          console.log(result.text);
          alert("Thank you for filling out your information!");
       window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };
  // the naming can be any, depends on you.

  return (
    <>
      <Container className="py-5" fluid style={{ background: "#d7ebf6" }}>
        <Row className="" style={{ width: "75%", margin: "auto" }}>
          <Col sm={12} md={6} className="py-2">
            <h2
              className="display-3 fw-bolder text-black"
              style={{ lineHeight: "56px" }}
            >
              <span style={{ color: "#006bb9" }}>Finance</span> Your{" "}
              <span style={{ color: "#006bb9" }}> Study Abroad </span> Dreams
            </h2>
            <p className="h2 fw-bold text-black">
              {"with "}
              <span style={{ color: "#006bb9" }}>{"Affrordable Loans "}</span>
              {" from"}
              <span style={{ color: "#006bb9" }}>
                {" 10+ Banking Partners"}
              </span>
            </p>
            <Link target="_blank" to="/loan-calculater" exact>
              <button
                type="submit"
                class="my-2 py-2 px-6 btn btn-primary btn-sm fw-bold"
              >
                {"Calculate your EMI "}
              </button>
            </Link>
            <br />
            <button
              type="submit"
              class="py-2 px-6 btn btn-outline-primary btn-sm fw-bold"
            >
              {" Request Callback "}
            </button>
          </Col>

          <Col sm={12} md={6} className="py-5 px-5">
            <img src={ImageEmi} alt="Emi Calculater" width={"100%"} />
          </Col>
        </Row>
      </Container>

      <Container className="py-5" fluid>
        <Row className="" style={{ width: "87%", margin: "auto" }}>
          <Col sm={12} md={12} className="py-2 text-center pb-4">
            <h2 className="display-6 fw-medium text-black">
              WHY <strong style={{ color: "#006bb9" }}>MEGAMIND IS THE</strong> RIGHT CHOICE
            </h2>
          </Col>
          <Col sm={12} md={4} className="d-flex">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage1} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Comprehensive</h5>
              </div>
              <div class="text pb-3">
                <small>
                  Avail up to 100% finance for your tuition fee & living costs
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="d-flex">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage2} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>E-Banking</h5>
              </div>
              <div class="text pb-3">
                <small>
                  Cut the queue with our truly online, end-to-end loan offering
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="d-flex">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage3} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Lowest Interest Rates</h5>
              </div>
              <div class="text pb-3">
                <small>
                  Access global education opportunities with the lowest loan
                  interest rates
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="d-flex">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage4} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Fast Processing</h5>
              </div>
              <div class="text pb-3">
                <small>
                  Avail up to 100% finance for your tuition fee & living costs
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="d-flex">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage5} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Flexible Repayment</h5>
              </div>
              <div class="text pb-3">
                <small>Get easy EMIs with flexible repayment structures</small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="d-flex">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage6} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Easy Application</h5>
              </div>
              <div class="text pb-3">
                <small>
                  File a common application for all lenders & we take care of
                  the rest
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5" fluid style={{ background: "#f3f3f3" }}>
        <Row className="" style={{ width: "87%", margin: "auto" }}>
          <Col sm={12} md={12} className="py-2 text-center pb-4">
            <h2 className="display-6 fw-medium text-black">
              <strong style={{ color: "#006bb9" }}>HOW </strong>IT{" "}
              <strong style={{ color: "#006bb9" }}>WORK</strong>
            </h2>
          </Col>
          <Col sm={12} md={3} className="d-flex">
            <div class="box-part box-layou text-left px-4">
              <div class="title pt-2 custom-border2">
                <h5>Requirement</h5>
              </div>
              <div class="text pb-3">
                <small>
                  Avail up to 100% finance for your tuition fee & living costs
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="d-flex">
            <div class="box-part box-layou text-left px-4">
              <div class="title pt-2 custom-border2">
                <h5>Documentation</h5>
              </div>
              <div class="text pb-3">
                <small>Upload your documents for verification</small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="d-flex">
            <div class="box-part box-layou text-left px-4">
              <div class="title pt-2 custom-border2">
                <h5> Application </h5>
              </div>
              <div class="text pb-3">
                <small>
                  Apply to multiple loan providers as per eligibility
                </small>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} className="d-flex">
            <div class="box-part box-layou text-left px-4">
              <div class="title pt-2 custom-border2">
                <h5> Disbursal </h5>
              </div>
              <div class="text pb-3">
                <small>
                  Take disbursal from the bank sanctioning loan at best interest
                  rate
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>




      <Container className="pb-5 aacurdin-bg" fluid>
        <Row className="pt-5 pb-5" style={{ width: "70%", margin: "auto" }}>
          <Col sm={12} md={12} className="text-center pb-5">
            <h2 className="display-6 fw-medium text-black">
              <strong style={{ color: "#006bb9" }}>
                FREQUENTLY ASKED QUESTIONS
              </strong>
            </h2>
          </Col>
          <Col sm={12} md={12} className="accoudin">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is Fly Finance?</Accordion.Header>
                <Accordion.Body>
                  <p class="para">
                    As of my last knowledge update in January 2023, I don't have
                    specific information about "Fly Finance." Financial services
                    and technologies can evolve quickly, and new companies or
                    platforms may emerge after my last update.
                  </p>
                  <p class="para">
                    If Fly Finance is a relatively new or niche entity in the
                    financial sector, I recommend checking the latest online
                    sources, such as news articles, company websites, or
                    financial databases, for the most up-to-date information.
                    Additionally, if Fly Finance is a local or regional service,
                    it may be more recognized within a specific geographical
                    area.
                  </p>
                  <p class="para"> 
                    Please provide more context or check the latest sources for
                    accurate and current information on Fly Finance.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Who is eligible to apply for an Education loan with Fly
                  Finance?
                </Accordion.Header>
                <Accordion.Body>
                  <p class="para">
                    As of my last knowledge update in January 2023, I don't have
                    specific information about Fly Finance and its eligibility
                    criteria for education loans. Eligibility criteria for
                    education loans can vary among financial institutions, and
                    they often depend on factors such as:
                  </p>
                  <p class="para">
                    <strong> 1. Academic Performance: </strong>Some lenders may
                    consider the academic performance of the student when
                    determining eligibility.
                  </p>
                  <p class="para">
                    <strong> 2. Course and Institution: </strong>The type of
                    course and the institution where the student is planning to
                    study can influence eligibility.
                  </p>
                  <p class="para">
                    <strong> 3. Co-applicant's Financial Stability:</strong>{" "}
                    Many lenders require a co-applicant, often a parent or
                    guardian, who has a stable financial background.
                  </p>
                  <p class="para">
                    <strong> 4. Collateral: </strong>Some education loans may
                    require collateral, while others may be unsecured. The
                    availability of collateral can affect eligibility.
                  </p>
                  <p class="para">
                    <strong> 5. Repayment Capacity: </strong>The borrower's or
                    co-applicant's ability to repay the loan is a crucial
                    factor.
                  </p>
                  <p class="para">
                    <strong> 6. Nationality and Age: </strong> Some lenders may
                    have specific eligibility criteria based on the student's
                    nationality and age.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can I start applying for a loan without an offer letter from
                  my university?
                </Accordion.Header>
                <Accordion.Body>
                  <p class="para">
                    In general, many lenders for education loans require proof
                    of admission to an educational institution as part of the
                    application process. This proof is often in the form of an
                    offer letter from the university or college where you have
                    been accepted for your course of study. The offer letter
                    typically contains details about the course, duration, and
                    other relevant information.
                  </p>
                  <p class="para">
                    However, each lender may have different requirements and
                    policies. Some lenders may allow you to initiate the loan
                    application process without the offer letter but may require
                    it before finalizing the loan approval. It's essential to
                    check with the specific lender you are considering for your
                    education loan.
                  </p>
                  <p class="para">
                    If you do not have your offer letter yet but are planning to
                    apply for a loan, you might inquire with the lender about
                    their specific requirements and whether they allow
                    provisional admission documents or other forms of proof in
                    the absence of the official offer letter.
                  </p>
                  <p class="para">
                    Always carefully review the terms and conditions of the loan
                    and communicate directly with the lending institution to
                    ensure you have accurate and up-to-date information tailored
                    to their specific policies.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How will the experts at Fly Finance help me get the best loan
                  offer?
                </Accordion.Header>
                <Accordion.Body>
                  <p class="para">
                    I must clarify that as of my last knowledge update in
                    January 2023, I don't have specific information about "Fly
                    Finance" or its services. Therefore, I can provide a general
                    perspective on how financial experts or loan specialists
                    might assist individuals in obtaining the best loan offer.
                  </p>
                  <p class="para">
                    Financial experts at lending institutions typically help
                    borrowers by:
                  </p>
                  <p class="para">
                    <strong>1. Assessing Financial Situation:</strong> Experts
                    may evaluate your financial situation, including income,
                    expenses, and existing debts, to understand your repayment
                    capacity.
                  </p>
                  <p class="para">
                    <strong>2. Providing Guidance on Eligibility: </strong>They
                    can guide you on the eligibility criteria for different loan
                    products and help you understand which loans you qualify for
                    based on your financial profile.
                  </p>
                  <p class="para">
                    <strong>3. Explaining Loan Terms: </strong>Financial experts
                    can clarify the terms and conditions of various loan
                    options, including interest rates, repayment terms, and any
                    associated fees.
                  </p>
                  <p class="para"> 
                    <strong> 4. Assisting with Documentation:</strong> They may
                    help you prepare and organize the necessary documentation
                    required for the loan application process.
                  </p>
                  <p class="para">
                    <strong>5. Negotiating with Lenders:</strong> Experts may
                    negotiate with lenders on your behalf to secure the most
                    favorable terms, such as lower interest rates or more
                    flexible repayment options.
                  </p>
                  <p class="para">
                    <strong>6. Providing Options:</strong> They might present
                    you with multiple loan options, allowing you to choose the
                    one that best suits your needs.
                  </p>
                  <p class="para">
                    <strong>7. Answering Questions: </strong>Experts can address
                    any questions or concerns you have about the loan process,
                    ensuring that you have a clear understanding of the
                    financial commitment you are entering into.
                  </p>
                  <p class="para">
                    If Fly Finance is a specific service or company, it's
                    recommended to visit their official website or contact their
                    customer service to get detailed and accurate information on
                    how their experts assist individuals in obtaining the best
                    loan offers. They may have unique processes or services
                    tailored to their customers' needs.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Does Fly Finance charge any service fee?
                </Accordion.Header>
                <Accordion.Body>
                  <p class="para">
                    As of my last knowledge update in January 2023, I don't have
                    specific information about whether Fly Finance charges a
                    service fee. The fee structure of financial services,
                    including loan providers or financial intermediaries, can
                    vary widely.
                  </p>
                  <p class="para">
                    To get the most accurate and up-to-date information
                    regarding any service fees charged by Fly Finance, I
                    recommend checking their official website or contacting
                    their customer service directly. Lenders or financial
                    service providers typically outline their fee structure,
                    including any application fees, processing fees, or service
                    charges, in their terms and conditions or on their official
                    communication channels.
                  </p>
                  <p class="para">
                    Keep in mind that service fees can depend on the type of
                    financial product or service you are using, as well as the
                    specific policies of the institution. Always review the
                    terms and conditions carefully before proceeding with any
                    financial transaction to ensure a clear understanding of
                    associated fees. If you have specific questions, reaching
                    out to Fly Finance's customer service team is the best way
                    to obtain accurate and personalized information.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Where will I receive my disbursement?
                </Accordion.Header>
                <Accordion.Body>
                  <p class="para">
                    The location where you receive the disbursement of your loan
                    funds depends on the policies and procedures of the lending
                    institution providing the loan. Typically, loan
                    disbursements are made directly to the educational
                    institution where you are enrolled. The funds are then
                    applied to your tuition, fees, and other eligible
                    educational expenses.
                  </p>
                  <p class="para">
                    Here's a general process for education loan disbursement:
                  </p>
                  <p class="para">
                    <strong> Loan Approval: </strong>After your loan application
                    is approved, the lender will work with you to finalize the
                    details, including the loan amount, interest rate, and
                    repayment terms.
                  </p>
                  <p class="para">
                    <strong> Disbursement to School: </strong> Once the loan is
                    approved, the lender will typically disburse the funds
                    directly to your educational institution. They may send the
                    funds via a check or electronic transfer.
                  </p>
                  <p class="para">
                    <strong> Application to Tuition and Fees: </strong> The
                    educational institution will apply the funds to cover your
                    tuition, fees, and other approved expenses. Any remaining
                    funds may be refunded to you to cover additional educational
                    costs such as books, housing, or other living expenses.
                  </p>

                  <p class="para">
                    It's crucial to communicate with your lender and the
                    financial aid office at your educational institution to
                    understand the specific disbursement process and timeline.
                    Additionally, be aware of any requirements or steps you need
                    to take to ensure a smooth disbursement process. Keep in
                    mind that the information provided here is a general
                    guideline, and the specific procedures may vary based on the
                    policies of the lending institution and the educational
                    institution you are attending.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container className="py-5 form-bg" fluid>
        <Row
          className="pt-5 pb-5 d-flex align-items-center"
          style={{ width: "80%", margin: "auto" }}
        >
          <Col sm={12} md={4} className="pb-5">
            <img src={FormImager} alt="most" width={"100%"} />
          </Col>
          <Col sm={12} md={8} className="pl-5">
            <h2 className="display-4 fw-bold text-black">
              <strong style={{ color: "#006bb9" }}>
                {"Request a callback"}
              </strong>
            </h2>

            <Form ref={form} onSubmit={sendEmail}>
              <Row>
                <div class="form-group">
                  <input
                    type="text"
                    className="form-view"
                    name="username"
                    id="inlineFormInputName"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    className="form-view"
                    name="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <Col sm={12} md={4}>
                  <div class="form-group">
                    <PhoneInput
                      className="form-view"
                      name="phoneemail"
                      placeholder="Phone Number"
                      value={value}
                      onChange={setValue}
                      defaultCountry="IN"
                      rules={{ required: true }}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <input
                    type="text"
                    className="form-view"
                    name="cityname"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                    placeholder="City Name"
                    required
                  />
                </Col>
                <Col sm={12} md={4}>
                <input
                    type="text"
                    className="form-view"
                    name="statename"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                    placeholder="State Name"
                    required
                  />
                </Col>
                <Col sm={12} md={4} className="m-auto">
                  <input
                    type="submit"
                    className="mt-btn btn btn-primary"
                    value="Submit"
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <ClientView />
    </>
  );
}
export default FinanceServices;
