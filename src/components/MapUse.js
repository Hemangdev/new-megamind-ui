
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapImage from '../images/smart.jpg';



function MapUse() {

    return (


        <>
      
                <Container className="mobile-padding" fluid>
                    <Row className="py-5" style={{ width: "75%", margin: "auto" }}>
                        <Col sm={12} md={12} className="text-center pb-5">
                        <h2 className=""> We connect <strong style={{color:"black"}}>Schools, Students, </strong> & <br/> <strong style={{color:"black"}}> Recruitment Partners </strong> From Every Part of the World</h2>
                        </Col>
                    <img className="py-4" src={MapImage} alt='Flag'/>
                    </Row>

                </Container>

        

        </>
    )
}


export default MapUse;




