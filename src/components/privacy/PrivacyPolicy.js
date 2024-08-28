import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhatWeCollect from "./WhatWeCollect";
import PersonalInformation from "./PersonalInformation";
import Welcome from "./Welcome";

const Datatransfer = () => {
  return (
    <div className="">
      <h4> THIRD PARTY CONTENT AND LINKS TO THIRD PARTY SERVICES </h4>
      <p className="text-left">
        We do not include or offer third party products or services on our Site.
      </p>

      <h4> DATA TRANSFER </h4>
      <p className="text-left">
        Your information may be stored and processed in Singapore or any other
        country in which Megamind Consultants or its subsidiaries, affiliates or
        service providers maintain facilities. Megamind Consultants may transfer
        information that we collect about you, including Personal Information,
        to affiliated entities, or to other third parties across borders and
        from your country or jurisdiction to other countries or jurisdictions
        around the world. These countries may have data protection laws that are
        different to the laws of your country and, in some cases, may not be as
        protective. We have taken appropriate safeguards to require that your
        information will remain protected in accordance with this Privacy Policy
        by entering into requisite agreements with the concerned transferees. 
      </p>

      <h4> DATA RETENTION </h4>
      <p className="text-left">
        Your information will be retained with Megamind Consultantsas long as it
        is needed by Megamind Consultants to provide services to you. If you
        wish to cancel your account or request that Megamind Consultants no
        longer uses your information to provide services, you may contact
        Megamind Consultants at study@megamindonline.com..Megamind Consultants
        will promptly delete the information as requested. Megamind Consultants
        will retain and use your information as necessary to comply with its
        legal obligations, resolve disputes, and enforce its agreements or for
        other business purposes. When Megamind Consultants has no ongoing
        legitimate business need to process your information, we will either
        delete or anonymize it.
      </p>

      <h4> CONTACT & POLICY UPDATES </h4>
      <p className="text-left">
        In case on any queries on this privacy policy, please contact us
        at study@megamindonline.com. Megamind Consultants reserves the right to
        update or modify any part of this policy or make any changes without
        prior notice to the user. The user is advised to check this page
        periodically to stay abreast of any policy changes by us.
      </p>

      <h4> CHANGE OF INFORMATION AND CANCELLATION OF ACCOUNT </h4>
      <p className="text-left">
        You are responsible for maintaining the accuracy of the information you
        submit to us, such as your contact information provided as part of
        account registration. If your Personal Information changes, or if you no
        longer desire to access the Site, you may correct, delete inaccuracies,
        or amend information by contacting us
        through study@megamindonline.com and we will respond within 72 hours of
        receipt of communication.
      </p>
      <p className="text-left">
        You have the right to request that we rectify or delete the personal
        data or restrict the processing of your personal data, if you think they
        are inaccurate. Furthermore, you have the right to object against the
        processing based on our legitimate interests as a legal basis. We are
        required to assess and act on your request. Additionally, you also have
        the right to data portability if it should become relevant. You have a
        right to lodge a complaint with your local supervisory authority. [You
        may also cancel or modify your communications that you have elected to
        receive from the Site by logging into your user account and changing
        your communication preferences.
      </p>
      <p className="text-left">
        If you wish to cancel your account or request that we no longer use your
        information to provide you details with respect to our services and the
        Site, please write to us at study@megamindonline.com.
      </p>

      <h4> OPT-OUT </h4>
      <p className="text-left">
        If you wish to opt out of receiving non-essential communications such as
        promotional and marketing-related information regarding the Site and our
        services, please send Megamind Consultants an email
        at study@megamindonline.com.
      </p>

      <h4> CHANGES TO THE PRIVACY POLICY </h4>
      <p className="text-left">
        From time to time, we may update this Privacy Policy to reflect changes
        to our information practices. Any changes will be effective immediately
        upon the posting of the revised Privacy Policy on the Site. If we make
        any material changes, we will notify you by email (sent to the e-mail
        address specified in your account) or by means of a notice on the Site
        prior to the change becoming effective. We encourage you to periodically
        review this page for the latest information on our privacy practices.
      </p>

      <h4> GRIEVANCE REDRESSAL </h4>
      <p className="text-left">
        If you have any questions or concerns about this Privacy Policy, please
        feel free to contact us by writing to us at study@megamindonline.com or
        using the details provided on our 'Contact Us' page. We will use
        reasonable efforts to respond promptly to requests, questions or
        concerns you may have regarding our use of personal information about
        you. Except where required by law, Megamind Consultants cannot ensure a
        response to questions or comments regarding topics unrelated to this
        policy or Company's privacy practices.
      </p>

      <h4> CONSENT </h4>
      <p className="text-left">
        By consenting to the terms under this Privacy Policy, you are expressly
        granting Megamind Consultants the right to collect, share, transfer,
        store, retain, disseminate or use the Personal Information/Usage
        Information collected by Megamind Consultants from your usage of the
        Site in accordance with the terms of the Privacy Policy. You may, at any
        time, withdraw consent for the collection or processing of Personal
        Information/Usage Information by sending an email
        to study@megamindonline.com. Megamind Consultants, shall within 72 hours
        delete or anonymize the data collected from you.
      </p>

      <h4> CONTACT US </h4>
      <p className="text-left">
        If you have any questions about this Privacy Policy, please contact us:
        By <strong> email: study@megamindonline.com </strong> In the event of any grievances, user
        can contact the grievance officer at <strong> prem@megamindonline.com </strong> or write to
        us at the following address:
      </p>
      <p className="text-left">
        <span>Prem</span><br/>
        <span>Grievance Officer</span><br/>
        <span>Megamind Consultants Pvt. Ltd.</span><br/>
        <span>2nd Floor, 49 Ring Road,</span><br/>
        <span>Lajpat Nagar-lll,</span><br/>
        <span>New Delhi, Delhi 110024</span><br/>
      </p>
    </div>
  );
};

class PrivacyPolicy extends React.PureComponent {
  render() {
    return (
      <>
        <Container className="py-5 service-bg" fluid>
          <Row className="" style={{ width: "80%", margin: "auto" }}>
            <Col sm={12} md={6} className="py-5">
              <h1 className="display-2 fw-bold text-white">PRIVACY POLICY</h1>
            </Col>

            <Col sm={12} md={6} className="py-5"></Col>
          </Row>
        </Container>
        <Container>
          <Row className="mb-5 mt-3 parsend">
            <Col
              className=" p-5"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <h3>Privileged and confidential</h3>
              
              <h5 className="text-right">
                {" Privacy Policy | October 6, 2021 "}
              </h5>
              <Welcome />
              <WhatWeCollect />
              <PersonalInformation />
              <Datatransfer />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default PrivacyPolicy;
