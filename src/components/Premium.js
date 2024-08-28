import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import Pslider from './Pslider';




function Premium() {

	return (

		<>

              <Container className='mobile-padding Bg-Back' fluid>
					<Row className="py-5">
   
						<Col sm={12} md={12} className="text-center">
							<h2 className="display-8 fw-medium text-black"> Premium Services</h2>
							<p className="fw-medium"> one stop solution for all your study abroad needs </p>
						</Col>

						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-4">
						</Col>
						<Col sm={12} md={12} className="padding-top-4">
						</Col>

					</Row>

					<Row className="mobile-padding text-center m-auto gridauto" style={{ width: "90%" }}>
						
				          <Pslider/>

					</Row>
				</Container>


		</>
	)

}
export default Premium;