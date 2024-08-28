import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
// import $ from 'jquery';


function UniversityPartner() {
	
	 const [ups1, setData1] = useState([]);
	 const [ups2, setData2] = useState([]);
	 const [ups3, setData3] = useState([]);
	 const [ups4, setData4] = useState([]);
		
	 useEffect(() => {
	 
	 axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_HOME_DATA_UNIVERSITY_PARTNERS_1")
	  .then((response) => {
		 setData1(response.data.split(";").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	  });

	 axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_HOME_DATA_UNIVERSITY_PARTNERS_2")
	  .then((response) => {
		 setData2(response.data.split(";").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	  });

	 axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_HOME_DATA_UNIVERSITY_PARTNERS_3")
	  .then((response) => {
		 setData3(response.data.split(";").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	  });

	 axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_HOME_DATA_UNIVERSITY_PARTNERS_4")
	  .then((response) => {
		 setData4(response.data.split(";").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	  });


	 }, []);
	 
	 
	 
	
  return (
    <>
      <Container style={{ background: "#f9fafc" }} fluid>
        <Row
          className=""
          style={{ width: "80%", margin: "auto" }}
        >
          <Col sm={12} md={12} className="text-center">
            <h2 className="h-one">
              <span style={{ color: "blue" }}>650+</span> University Partners
            </h2>
          </Col>
          <Col sm={3} md={3} className="colmd3 ">
            <ul className="list-style-none">
			
			 { ups1.map((up) => 
			  (
				<React.Fragment>
				  <li>
					<img src={up} className="w-100 pb-3" alt="logo" />
				  </li>
				</React.Fragment>
			  ))}
            </ul>
          </Col>

          <Col sm={3} md={3} className="colmd3 ">
            <ul className="list-style-none">

			 { ups2.map((up) => 
			  (
				<React.Fragment>
				  <li>
					<img src={up} className="w-100 pb-3" alt="logo" />
				  </li>
				</React.Fragment>
			  ))}

            </ul>
          </Col>

          <Col sm={3} md={3} className="colmd3 ">
            <ul className="list-style-none">

			 { ups3.map((up) => 
			  (
				<React.Fragment>
				  <li>
					<img src={up} className="w-100 pb-3" alt="logo" />
				  </li>
				</React.Fragment>
			  ))}

            </ul>
          </Col>

          <Col sm={3} md={3} className="colmd3 ">
            <ul className="list-style-none">

			 { ups4.map((up) => 
			  (
				<React.Fragment>
				  <li>
					<img src={up} className="w-100 pb-3" alt="logo" />
				  </li>
				</React.Fragment>
			  ))}

            </ul>
          </Col>

          <Col sm={12} md={12} className="mobile-padding text-center">
            <p className="paramob">
              Admission counselling services to these universities is FREE for
              students. As their official partners, we <br />
              receive a student advisory fee from universities
            </p>
            <NavLink to="/Alluniversity" target="_blank" exact className="my-5 btn btn-pad btn-primary">
              {"View All Universities "}
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default UniversityPartner;