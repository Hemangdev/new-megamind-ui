// Posts.js
import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdDateRange } from "react-icons/md";

import { useEffect, useState } from "react";
import axios from 'axios';
// import $ from 'jquery';


const Blog = () => {
	
	 const [blog_posts, setData] = useState([]);
	 const [blog_posts_latest, setData1] = useState([]);
	 
		
	  useEffect(() => {

	  axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_BLOG_GRID_DATA")
	  .then((response) => {
		 setData(response.data.split("|").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	  });

	  axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_BLOG_LATEST_DATA")
	  .then((response) => {
		 setData1(response.data.split("|").filter(r => r !== ''));
	  })
	  .catch((error) => {
		console.log(error);
	  });


	 }, []);
	
	
  return (
    <>
      <Container className="py-5 blog-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-2 fw-bold text-white">Blog</h2>
          </Col>

          <Col sm={12} md={7} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="padding-top-4 pb-5" fluid>
        <Row
          className="align-items-start"
          style={{ width: "85%", margin: "auto" }}
        >
          <Col md={8} sm={12} className="m-15 px-tb">
            <Row>
              {/* First Blog Start Here */}
              {/* First Blog Start Here */}

			  { blog_posts.map((bp) => 
			  (
				<React.Fragment>
					  <Col sm={12} md={12}>
						<div className="blog-grid">
						  <div className="blog-img">
							<div className="date">
							{bp.split(";")[0]}  
							</div>
							<Link reloadDocument={true} to={"/post?id=" +bp.split(";")[5]}>
							  <img
								src={bp.split(";")[1]}
								title=""
								alt=""
								height={220}
								width={750}
							  />
							</Link>
						  </div>
						  <div className="blog-info">
							<h5>
							  <Link reloadDocument={true} to={"/post?id=" +bp.split(";")[5]}>
								{bp.split(";")[2]}
							  </Link>
							</h5>
							<p>
							  {bp.split(";")[3]}
							  <Link reloadDocument={true} to={"/post?id=" +bp.split(";")[5]} className="px-btn-arrow ps-2">
								<span>Read More</span>
							  </Link>
							</p>
						 
							<div className="btn-bar">
							  <Link className="date px-2"  to={"/post?id="+bp.split(";")[5]}>
							  <MdDateRange/> {bp.split(";")[4]}
							  </Link>
							 
							</div>
						  </div>
						</div>
					  </Col>
				</React.Fragment>
			  ))}
            </Row>
          </Col>

          {/* <!-- Latest Post --> */}

          <Col md={4} sm={12} className="m-15 px-tb blog-aside">
            {/* <!-- Latest Post --> */}
            
			
			<div className="widget widget-latest-post">
              <div className="widget-title">
                <h3>Latest Post</h3>
              </div>
              <div className="widget-body">

			  { blog_posts_latest.map((bpl) => 
			  (
				<React.Fragment>
					<div className="latest-post-aside media">
					  <div className="lpa-left media-body">
						<div className="lpa-title">
						  <h5>
							<Link reloadDocument={true} to={"/post?id=" +bpl.split(";")[3]}>
							{bpl.split(";")[0] }
							</Link>
						  </h5>
						</div>
						<div className="lpa-meta">
						  <Link className="date" to="/">
							{bpl.split(";")[2] }
						  </Link>
						</div>
					  </div>
					  <div className="lpa-right">
						<Link  reloadDocument={true} to={"/post?id=" +bpl.split(";")[3]}>
						  <img src={bpl.split(";")[1] } title="" alt="" />
						</Link>
					  </div>
					</div>
				</React.Fragment>
			  ))}

              </div>
            </div>

            {/* <!-- End widget Tags --> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
