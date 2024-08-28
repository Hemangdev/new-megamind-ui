import React, { useState } from "react";
import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Gallery(){

    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category==="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category === category;
       })
       setData(filteredData);
    }
    return(
     
        <Container className="partner_partner" fluid>
       <Row className="" style={{ width: "90%", margin: "auto" }}>
  
            <Col sm={12} md={12}>
            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Items data={data} />
            </Col>
  
        </Row>
           
       </Container>
    
    )
}

export default Gallery;