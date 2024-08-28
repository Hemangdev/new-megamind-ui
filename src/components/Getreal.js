import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GetrealImage from '../images/getreal/Screenshot_1.png';




function Getreal() {

    return (

        <>
          

                <Container style={{background: "#f9fafc"}} fluid>
                    <Row className="mobile-padding" style={{ width:"90%",margin:"auto"}}>

                        <Col sm={12} md={7} className="text-center mobile-padding">

                                <img src={GetrealImage} className="w-80" alt="logo" />

                        </Col>

                        <Col sm={12} md={5} className="text-left py-5">
                            <h3 className="font-medium">
                                Get real guidance from <br/>real student through mentor connect
                            </h3>
                            <p class="py-4">
                            Talk to students who already have reached your dream 
                            university pursuing your dream course
                            </p>
                            <a href="tel:+918882255001" exact className="btn btn-pad btn-primary">Talk to Expert</a>
                        </Col>
                    </Row>

                </Container>



        </>
    )

}
export default Getreal;
