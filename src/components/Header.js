import React from "react";
import Container from 'react-bootstrap/Container';
import "../fonts/font.css";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./Home";
import Megamindlogo from '../images/megamind-logo.png';
import { BiSolidPhoneCall } from "react-icons/bi";
import WhatsappIocn from '../images/whatsapicon.png'
import Country from "./country/Country";
import ApplyImage from "../images/applynow.png";
import Services from "./services/Services";
import FinanceServices from "./financeservices/Finance-Services";
import Contact from "./contact/Contact";
import Ielts from "./IELTS/Iltes";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import University from "./University/University";
import About from "./about/About";
import Blog from "./blog/Blog";
import Post from "./blog/Post";
import Alluniversity from "./AllUniversity/Alluniversity";
import Courses from "./courses/Courses";

//Axios for get request
import { useEffect, useState } from "react";
import axios from 'axios';
import $ from 'jquery';
import PrivacyPolicy from "./privacy/PrivacyPolicy";
import LoanCalculator from "./common/LoanCalculator";
import { Button } from "react-bootstrap";

function refreshPage(event) {
  //alert("refreshPage called.."+$(event.target).attr("href"));	
  window.location.href = $(event.target).attr("href");
}


function Header() {

  const [countries, setData] = useState([]);
  console.log(countries);

  useEffect(() => {
    axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_ALL_COUNTRIES")
      .then((response) => {
        setData(response.data.split(";").filter(r => r !== ''));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (

    <>

      <BrowserRouter forceRefresh={true}>


        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3 height">
            <Container fluid>
              <Navbar.Brand href="#">
                <NavLink className="navbar-brand" id="top" to="./" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                  <img src={Megamindlogo} className="" width="170px" alt="Megamind logo" />
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <NavLink className="navbar-brand" id="top" to="./" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                      <img src={Megamindlogo} className="" width="170px" alt="Megamind logo" />
                    </NavLink>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink className="nav-link active" to="./" aria-current="page" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black', textDecoration: 'underline', textUnderlineOffset: "4px" })}>Home</NavLink>
                    <NavLink className="nav-link" to="/services" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Services</NavLink>

                    <NavDropdown
                      title="Countries"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >

                      {countries.map((country, index) =>
                      (
                        <React.Fragment key={index}>
                          <NavDropdown.Item className={`country-item country-item-${index + 1}`}>
                            <Link reloadDocument={true} className="nav-link padding-left" to={"/country?code=" + country} onClick={refreshPage}>{"Study in " + country}</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                        </React.Fragment>
                      ))}
                    </NavDropdown>


                    <NavLink className="nav-link" to="/financeservices" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Financial Services</NavLink>
                    <NavLink className="nav-link" to="/contact" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Contact Us</NavLink>
                    <NavLink className="nav-link" to="/blog" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Blogs</NavLink>
                    <NavLink className="nav-link" to="https://megamindonline.com/course-finder" target="_blank" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Course Finder</NavLink>
                    <NavLink className="nav-link" to="https://franchise.megamindonline.com" target="_blank" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Franchise</NavLink>
                    <NavLink className="nav-link" to="/Ielts" target="_blank" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>IELTS</NavLink>
                  </Nav>
                  <Form className="d-flex align-items-center">
                    <NavLink to="tel:+918882255001" target="_blank" className="text-color mabottom fw-medium">
                      <BiSolidPhoneCall className="border-color" /> 8882255001
                    </NavLink>
                    <NavLink to="https://wa.me/+918882255001" target="_blank" className="" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
                      <img src={WhatsappIocn} className="" width={"50px"} alt="ImageMaker" />
                    </NavLink>

                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}



        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/country/*" element={<Country />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/ielts" element={<Ielts />} />

          <Route exact path="/financeservices" element={<FinanceServices />} />
          <Route exact path="/university" element={<University />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />

          <Route exact path="/post" element={<Post />} />
          <Route exact path="/alluniversity" element={<Alluniversity />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/loan-calculater" element={<LoanCalculator />} />

        </Routes>

        <Link to="/" target="_blank">

          <Button className="bookVisitbtn2">

           Document Required
          </Button>
          {/* <img
            src={ApplyImage}
            class="pos1 d-lg-block d-md-block"
            alt=""
          /> */}

        </Link>



        {/* Calendly Book a visit meeting */}
        {/* <Link to="https://calendly.com/megamindonline" target="_blank">
          <Button className="bookVisitbtn">

            Book a Visit
          </Button>
        </Link> */}
      </BrowserRouter>
    </>
  )
};

export default Header;