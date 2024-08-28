
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
//Axios for get request
// import axios from "axios";
import $ from "jquery";
$(document).ready(function () {

  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

});
function Counter() {


  return (
    <>

      <Container>
        <Row>
          {/* <!-- counter --> */}
          <div
            class="col-md-6 col-sm-6 p-2"
            data-wow-duration="300ms"
            style={{ visibility: "visible", animationDuration: "300ms", animationName: "fadeInUp" }}>
            <div class="card-counter primary py-5" style={{ background: "#b7d5ec", color: "#0077c7" }}>
              <span
                class="timer counter primery-counter"
                data-to="980"
                data-speed="7000"
              >
                10
              </span>
              <span class="primery-counter">K</span>
              <p style={{ color: "#0077c7" }} className=""> COUNTRIES </p>
            </div>
          </div>
          {/* <!-- end counter -->
                    <!-- counter --> */}



          <div
            class="col-md-6 col-sm-6 p-2"
            data-wow-duration="600ms"
            style={{ visibility: "visible", animationDuration: "600ms", animationName: "fadeInUp" }}>
            <div class="card-counter primary py-5 mt-5" style={{ background: "#bae9c5", color: "#00b836" }}>
              <span
                class="timer counter primery-counter"
                data-to="980"
                data-speed="7000"
              >
                900
              </span>
              <span class="primery-counter">K</span>
              <p style={{ color: "#00b836" }}> UNIVERSITIES</p>

            </div>
          </div>

          {/* <!-- end counter -->
                    <!-- counter --> */}
          <div
            class="col-md-6 col-sm-6 p-2"
            data-wow-duration="900ms"
            style={{ visibility: "visible", animationDuration: "900ms", animationName: "fadeInUp" }}>
            <div class="card-counter primary py-5 country-mob" style={{
              background: "#bae9c5",
              color: "#00b836",
              marginTop: "-40px",
            }}>
              <span
                class="timer counter primery-counter"
                data-to="810"
                data-speed="7000"
              >
                15
              </span>
              <span class="primery-counter">K</span>
              <p style={{ color: "#00b836" }}>COURSES</p>

            </div>
          </div>
          {/* <!-- end counter -->
                    <!-- counter --> */}
          <div
            class="col-md-6 col-sm-6 p-2"
            data-wow-duration="1200ms"
            style={{ visibility: "visible", animationDuration: "1200ms", animationName: "fadeInUp" }}>
            <div class="card-counter primary py-5" style={{ background: "#b7d5ec", color: "#0077c7" }}>
              <span
                class="timer counter primery-counter"
                data-to="600"
                data-speed="7000"
              >
                90
              </span>
              <span class="primery-counter">K+</span>
              <p style={{ color: "#0077c7" }}>SATISFIED STUDENTS</p>

            </div>
          </div>
        </Row>
      </Container>

    </>
  );
}

export default Counter;
