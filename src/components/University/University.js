import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./university.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink, Outlet } from "react-router-dom";
import UniversityIcon from "../../images/university/icond.png";






//Axios for get request
import axios from 'axios';
import Model from "../Model";
import Popup from 'reactjs-popup';
import Popuper from './Popuper';
// import $ from 'jquery';




// function csvToArray (csv) {
//     var rows = csv.split(";");

//     return rows.map(function (row) {
//     	return row.split(",");
//     });
// };

class University extends React.Component {
  state={
    openModal : false
}

onClickButton = e =>{
    e.preventDefault()
    this.setState({openModal : true})
}

onCloseModal = ()=>{
    this.setState({openModal : false})
}
      //initialize an object's state in a class
      constructor(props) {
      super(props)
      this.state = {
        data: []
              }
      }
      //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
      componentDidMount(){
        
		const search = window.location.search;
		const query = new URLSearchParams(search);
		const university_name = query.get('university_name');
		console.log("university_name="+university_name);

// Using reduce() function Approach 
let outputStr = university_name.split('') 
    .reduce((result, char) => { 
    if (char === ' ') { 
        return result + '%20'; 
    } else { 
        return result + char; 
    } 
}, ''); 
console.log("space add in url=",outputStr);

//COUNTRY NAME
const country_name = query.get('country_name');
console.log("country_name="+country_name);


		//let { code } = this.props.params.code;
		//console.log({code});
        var geturl = 'https://megamindonline.com/admin/webmanager/controller.php?command=GET_UNIVERSITY_COURSE_DETAILS&country=' + country_name + '&college_university=' + outputStr;
		console.log("geturl="+geturl);
		//get request
        axios.get(geturl).then(res => 
        {
			this.setState({data: res.data});
			//this.courses = csvToArray(res.data.all_courses);
			//var result = res.data.map();
			//console.log(result);
            //console.log(JSON.stringify(res.data));
			//console.log("res.data.all_courses="+res.data.all_courses); 
            //console.log("res.data.main_banner_image="+res.data.main_banner_image); 
			
			
		}); 
      }
   
	
	
	
     render() 
	 {

		  const responsive = {
			superLargeDesktop: {
			  // the naming can be any, depends on you.
			  breakpoint: { max: 4000, min: 3000 },
			  items: 5,
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
			  items: 1,
			},
		   }


	  return (
			<>
<div>
                <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                
                <Popuper/>

                </Modal>   
            </div>
	  {this.state.data.map((result) => {
				return (

      <Container className="padding-top-4 pb-10" fluid style={{ 
							  backgroundImage: 'url('+result.main_banner_image+')',
							  backgroundRepeat: 'no-repeat',
							  backgroundAttachment: 'scroll',
							  backgroundSize: '100%',
							  backgroundPosition:'right center'

				}}>
        <Row className="" style={{ width: "80%", margin: "auto" }}>
          <Col sm={12} md={4} className="pb-5 pt-5">
            <h2 className="display-4 pb-3">
             {result.college_university}
            </h2>

            <Link
              to="https://megamindonline.com/course-finder/"
              target="_blank"
            >
              <button
                type="submit"
                className="px-3 mr-3 btn btn-primary"
                style={{ fontSize: "14px" }}
              >
                {"Apply Now "}
              </button>
            </Link>
            <Model/>
          </Col>

          <Col sm={12} md={8} className="pb-10 countriDisplay">
            {/* <img className="w-100" src={TryImage} alt="Flag" /> */}
          </Col>
        </Row>
      </Container>
		)
	  })}

	{this.state.data.map((result) => {
	   return (
      <Container className="pt-5 pb-5 margin-top-2" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-4 text-center">
            <h2 className="display-6">{result.college_university}</h2>
          </Col>
        </Row>
        <Row className="hero-bg" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={6} className="univers-inner">
            <img src={result.small_banner_image} alt="imageuiversity" width={"100%"} />
          </Col>
          <Col sm={12} md={6} className="university-sec">
            <div className="Study-wa">
              <h2 className="display-6"> Why {result.college_university} ? </h2>
              <ul className="list-no pt-4">
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />
                  {
                    result.college_university_feature_1
                  }
                </li>
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />

                  {
                    result.college_university_feature_2
                  }
                </li>
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />

                  {
                    result.college_university_feature_3
                  }
                </li>
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />

                  {
                    result.college_university_feature_4
                  }
                </li>
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />
                  {
                    result.college_university_feature_5
                  }
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
		)
	  })}

      <Container className="padding-5" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-4 text-center">
            <h2 className="display-6"> Popular Courses </h2>
          </Col>

          {/* Fist Courses Start Here*/}

	  {this.state.data.map((result) => {
				return (

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src= {result.all_courses.course_1_logo}
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
				  {result.all_courses.course_1_title}
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_1_fee}</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_1_duration}</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_1_qualifications_required}</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_1_level}</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_1_type_of_course}</h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_1_intake_months}</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
					  {result.all_courses.course_1_big_description}
                    </div>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={this.onClickButton}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
			)
		  })}

          {/* Fist Courses End Here*/}

          {/* Second Courses Start Here*/}

	 	 {this.state.data.map((result) => {
				return (

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src= {result.all_courses.course_2_logo}
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    {result.all_courses.course_2_title}
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_2_fee}</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_2_duration}</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_2_qualifications_required}</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_2_level}</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_2_type_of_course}</h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> {result.all_courses.course_2_intake_months}</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
						{result.all_courses.course_2_big_description}
                    </div>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={this.onClickButton}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
			)
		  })}

          {/* Second Courses End Here*/}

          {/* Third Courses Start Here*/}
	 	
		{this.state.data.map((result) => {
				return (

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src={result.all_courses.course_3_logo}
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    {result.all_courses.course_3_title}
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_3_fee}</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_3_duration}</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_3_qualifications_required}</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_3_level}</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_3_type_of_course}</h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_3_intake_months}</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
					  {result.all_courses.course_3_big_description}
                    </div>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={this.onClickButton}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
			)
		  })}

          {/* Third Courses End Here*/}

          {/* Fourth Courses Start Here*/}

		{this.state.data.map((result) => {
				return (

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src={result.all_courses.course_4_logo}
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    {result.all_courses.course_4_title}
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_4_fee}</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_4_duration}</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_4_qualifications_required}</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_4_level}</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_4_type_of_course}</h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_4_intake_months}</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                    {result.all_courses.course_4_big_description}
                    </div>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={this.onClickButton}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
			)
		  })}

          {/* Fourth Courses End Here*/}

          {/* Five Courses Start Here*/}

  		{this.state.data.map((result) => {
				return (
 
			<Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src= {result.all_courses.course_5_logo}
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    {result.all_courses.course_5_title}
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_5_fee}</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_5_duration}</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_5_qualifications_required}</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_5_level}</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_5_type_of_course}</h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_5_intake_months}</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
					{result.all_courses.course_5_big_description}
                    </div>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={this.onClickButton}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
  			)
		  })}

		{/* Five Courses End Here*/}

          {/* Six Courses Start Here*/}

    		{this.state.data.map((result) => {
				return (

			<Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src={result.all_courses.course_6_logo}
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    {result.all_courses.course_6_logo} 
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_6_fee}</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_6_duration}</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_6_qualifications_required}</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_6_level}</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_6_type_of_course}</h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">{result.all_courses.course_6_intake_months}</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
					  {result.all_courses.course_6_big_description}
                    </div>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100" onClick={this.onClickButton}>
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
   			)
		  })}

		{/* Six Courses End Here*/}

		</Row>
      </Container>

 	{/* {this.state.data.map((result) => {
	   return (
      <Container fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-4 text-center">
            <h2 className="display-6"> Program List </h2>
          </Col>

          <Col sm={12} md={12} className="">
            <div className="University-Icon">
              <img className="" src={result.program_list_document_url1} alt="Flag" width={"100%"} />
            </div>
          </Col>
          <Col sm={12} md={12} className="text-center">
            <Link to="/" target="_blank">
              <button
                type="submit"
                className="px-4 text-center mr-3 py-2 btn-large btn btn-primary"
                style={{ fontSize: "14px" }}
              >
                {" Download "}
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
		)
	  })} */}

 	{this.state.data.map((result) => {
	   return (
      <Container className="mobile-padding" fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>

            <hr />
            <div class="gal">
            <img className="" src={result.image_gallery_1} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_2} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_3} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_4} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_5} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_6} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_7} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_8} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_9} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_10} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_11} alt="Flag" width={"100%"} />
            <img className="" src={result.image_gallery_12} alt="Flag" width={"100%"} />
            </div>
          </Row>
      </Container>
		)
	  })}


 	{this.state.data.map((result) => {
	   return (

      <Container className="mt-5" fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-5">
            <h2 className="text-center">College Videos</h2>
          </Col>

          <Col sm={12} md={12} className="">
            <Carousel
              responsive={responsive}
              additionalTransfrom={80}
              arrows
              autoPlay
              autoPlaySpeed={4000}
              centerMode={false}
              className=""
              containerClass="container-with-dots innertslide"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={100}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src={result.video_gallery_url_1}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">{result.video_gallery_title_1}</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src={result.video_gallery_url_2}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">{result.video_gallery_title_2}</h5>
                </NavLink>
                <Outlet />
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src={result.video_gallery_url_3}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">{result.video_gallery_title_3}</h5>
                </NavLink>
                <Outlet />
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src={result.video_gallery_url_4}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">{result.video_gallery_title_4}</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src={result.video_gallery_url_5}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">{result.video_gallery_title_5}</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src={result.video_gallery_url_6}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">{result.video_gallery_title_6}</h5>
                </NavLink>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
		)
	  })}

 	{this.state.data.map((result) => {
	   return (

      <Container className="pt-5" fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-5">
            <h2 className="display-6 text-center">{" Accommodations "}</h2>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="w-0" src={result.accommodations_img_1} alt="Flag" />
              <p className="fw-bold">
			  {result.accommodations_txt_1}
              </p>
            </div>
          </Col>
          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={result.accommodations_img_2} alt="Flag" />
              <p className="fw-bold">
			  {result.accommodations_txt_2}
              </p>
            </div>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={result.accommodations_img_3} alt="Flag" />
              <p className="fw-bold">{result.accommodations_txt_3}</p>
            </div>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={result.accommodations_img_4} alt="Flag" />
              <p className="fw-bold">
				{result.accommodations_txt_4} 
              </p>
            </div>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={result.accommodations_img_5} alt="Flag" />
              <p className="fw-bold">
                {result.accommodations_txt_5}
              </p>
            </div>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={result.accommodations_img_6} alt="Flag" />
              <p className="fw-bold">
			  {result.accommodations_txt_6}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

		)
	  })}

 	{this.state.data.map((result) => {
	   return (

      
      <Container className="mb-5" fluid>
        <Row className="pb-5" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={6} className="Lorem mt-5 pt-5">
            <img className="" src={result.grid_img_1} alt="Flag" width={"100%"} />
            <div className="LoremIpsum">
              <p> Lorem Ipsum </p>
            </div>
          </Col>
          <Col sm={12} md={6} className="Lorem mt-5 pt-5">
            <img className="" src={result.grid_img_2} alt="Flag" width={"100%"} />
            <div className="LoremIpsum">
              <p> Lorem Ipsum </p>
            </div>
          </Col>
          <Col sm={12} md={6} className="Lorem mt-5 pt-5">
            <img className="" src={result.grid_img_3} alt="Flag" width={"100%"} />
            <div className="LoremIpsum">
              <p> Lorem Ipsum </p>
            </div>
          </Col>
          <Col sm={12} md={6} className="Lorem mt-5 pt-5">
            <img className="" src={result.grid_img_4} alt="Flag" width={"100%"} />
            <div className="LoremIpsum">
              <p> Lorem Ipsum </p>
            </div>
          </Col>
        </Row>
      </Container>

		)
	  })}
			
			</>
			)
	 }
 }
export default University;
