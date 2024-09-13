import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import axios from 'axios';
// import $ from 'jquery';


function ClientView() {
	
	 const [clientlogos, setData] = useState([]);
		
	  useEffect(() => {
	  axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_HOME_DATA_AA")
	  .then((response) => {
		 setData(response.data.split(";").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	  });
	 }, []);
	console.log(clientlogos)
	
    return (
        <>
            <Container style={{background: ""}} fluid>
                    <Row className="pb-5 border-bottom" style={{ width:"80%",margin:"auto"}}>
                    <Col sm={12} md={12} className="py-5 text-center">
                    <h2 className="h-one text-black" style={{letterSpacing: "-1px"}}> Accreditation & Association</h2>
                     </Col>
                        <div className="slider">
                            <div className="slide-track">

							  { clientlogos.map((clientlogo) => 
							  (
								<React.Fragment>
                                <div className="slide">
                                    <img src={clientlogo} alt="logo" />
                                </div>
								</React.Fragment>
							  ))}

                            </div>
                        </div>

                    </Row>
                </Container>
    
        </>
    )
}

export default ClientView;


