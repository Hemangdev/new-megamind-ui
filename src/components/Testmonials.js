import React from "react";

function Testmonials(){
    return(
        <>
        
        
<Container className="pb-5" fluid>
<Row className="pt-5 pb-5" style={{ width: "90%", margin: "auto" }}>
  <Col sm={12} md={12} className="text-center pb-3">
    <h2 className="display-6 fw-medium text-black">
      <strong style={{ color: "#006bb9" }}>TESTIMONIALS </strong>
    </h2>
  </Col>

  <Col sm={12} md={12} className="text-right">
    {/* <Tsstmonial /> */}
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
      sliderClass="back-button"
      slidesToSlide={1}
      swipeable
    >
      <div className="card-boxer bomad">
        <div class="testi">
          <div class="testimonial">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "
              }
            </p>
          </div>
          <div class="media med">
            <img src={FirstImage1} alt="most" />
            <div class="media-body">
              <div class="overview">
                <div class="name text-white">
                  <b>{"Karan Joshi"}</b>
                </div>
                <div class="details">{"University Name"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-boxer bomad">
        <div class="testi">
          <div class="testimonial">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "
              }
            </p>
          </div>
          <div class="media med">
            <img src={FirstImage1} alt="most" />
            <div class="media-body">
              <div class="overview">
                <div class="name text-white">
                  <b>{"Karan Joshi"}</b>
                </div>
                <div class="details">{"University Name"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-boxer bomad">
        <div class="testi">
          <div class="testimonial">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "
              }
            </p>
          </div>
          <div class="media med">
            <img src={FirstImage1} alt="most" />
            <div class="media-body">
              <div class="overview">
                <div class="name text-white">
                  <b>{"Karan Joshi"}</b>
                </div>
                <div class="details">{"University Name"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-boxer bomad">
        <div class="testi">
          <div class="testimonial">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "
              }
            </p>
          </div>
          <div class="media med">
            <img src={FirstImage1} alt="most" />
            <div class="media-body">
              <div class="overview">
                <div class="name text-white">
                  <b>{"Karan Joshi"}</b>
                </div>
                <div class="details">{"University Name"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-boxer bomad">
        <div class="testi">
          <div class="testimonial">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "
              }
            </p>
          </div>
          <div class="media med">
            <img src={FirstImage1} alt="most" />
            <div class="media-body">
              <div class="overview">
                <div class="name text-white">
                  <b>{"Karan Joshi"}</b>
                </div>
                <div class="details">{"University Name"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-boxer bomad">
        <div class="testi">
          <div class="testimonial">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "
              }
            </p>
          </div>
          <div class="media med">
            <img src={FirstImage1} alt="most" />
            <div class="media-body">
              <div class="overview">
                <div class="name text-white">
                  <b>{"Karan Joshi"}</b>
                </div>
                <div class="details">{"University Name"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  </Col>
</Row>
</Container>
        
        </>
    )
}

export default Testmonials;