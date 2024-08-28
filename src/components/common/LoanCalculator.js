import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import SliderSelect from "./SliderSelect";
import TenureSelect from "./TenureSelect";
import Result from "./Result";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./loan.css";

function LoanCalculator() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });

  console.log(data);

  return (
    <>
      <Container maxWidth="xl" className="py-5 service-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-2 fw-bold text-white">Loan Calculator</h2>
          </Col>

          <Col sm={12} md={7} className="py-5"></Col>
        </Row>
      </Container>

      <Container maxWidth="xl" className="pb-5 bgremove" sx={{ paddingTop: 4 }}>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col md={12}>
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12} md={6} className="metercolor">
                <SliderSelect data={data} setData={setData} />
                <TenureSelect data={data} setData={setData} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Result data={data} />
              </Grid>
            </Grid>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoanCalculator;
