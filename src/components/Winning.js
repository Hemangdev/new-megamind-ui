import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Winning0 from '../images/winning/Screenshot_1.png';
import Winning1 from '../images/winning/Screenshot_2.png';
import Winning2 from '../images/winning/Screenshot_3.png';
import Winning3 from '../images/winning/Screenshot_4.png';



function Winning() {

	return (

		<>

			<Container fluid>
                    <Row className="pb-5 studyslidt" style={{ width:"80%",margin:"auto"}}>
					<Col sm={12} md={12} className="pt-3 pb-5 text-center">
					<h2 className="display-6 text-black"> Our Winning Record </h2>
                    <p>No False Claims, We Back the Efficiency of Our Consultancy with Stats. Check for Yourself</p>
					</Col>
						<Col sm={4} md={3}>
							<ul className="list-style-none">
                            <li className="text-center">  
                              <img src={Winning0} className="w-100 pb-3" alt="logo" />
                              <p className="text-font">20 K+</p>
                                    <h5>Successful Admits</h5>
                              </li>
				
							</ul>
						</Col>
						<Col sm={4} md={3}>
							<ul className="list-style-none">
                            <li className="text-center">  
                                     <img src={Winning1} className="w-100 pb-3" alt="logo" />
                                     <p className="text-font">$2 Million+</p>
                                    <h5>Achieved Scholarships</h5>
                                
                                </li>
		
							</ul>
						</Col>
						<Col sm={4} md={3}>
							<ul className="list-style-none">
                            <li className="text-center">  
                                 <img src={Winning2} className="w-100 pb-3" alt="logo" />
                                 <p className="text-font">3500 Cr+</p>
                                 <h5>Representing Over 800 INS. </h5>
                               </li>

							</ul>

						</Col>

						<Col sm={4} md={3}>
							<ul className="list-style-none">
						     	<li className="text-center">  
                                    <img src={Winning3} className="w-100 pb-3" alt="logo" />
                                    <p className="text-font"> 98% </p>
                                    <h5>Visa Success Rate</h5>
                                </li>
			
							</ul>
						</Col>

                        <Col sm={12} md={12} className="text-center mobile-padding">
                  <a  href="./#enquiry" className="btn btn-pad btn-primary">Say hii! Get a Call From Counselling Expert</a>
                  </Col>
					</Row>

				</Container>

	

		</>
	)

}
export default Winning;
