// Post.js
import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../blog/Post.css";
import { useEffect, useState } from "react";
import axios from 'axios';
// import $ from 'jquery';


const Post = () => {
	
	 const [post_details, setData] = useState([]);
	 const [blog_posts_latest, setData1] = useState([]);
		
	  useEffect(() => {
		  const search = window.location.search;
		  const query = new URLSearchParams(search);
		  const id = query.get('id');
		  console.log("id="+id);

		  axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_BLOG_POST_DETAIL&id="+id)
		  .then((response) => {
			 setData(response.data.split(";").filter(r => r !== ''));
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
            <h2 className="display-6 fw-bold text-white">BLOG</h2>
            <h4 className="text-white">
              {post_details[2]}
            </h4>
          </Col>

          <Col sm={12} md={7} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="padding-top-4" fluid>
      <Row className="align-items-start">
          <div className="blog-single gray-bg">
            <div className="container">
              <div className="row align-items-start">
                <Col md={8} className="m-15 px-tb">
                  <article className="article">
                    <div className="article-img">
                      <img
                        src={post_details[1]}
                        title=""
                        alt=""
                        height={380}
                        width={"100%"}
                      />
                    </div>
                    <div className="article-title">
                      <h2>
                        {post_details[2]}
                      </h2>
                    </div>
                    <div className="article-content">
                      <p className="para text-justify">
                        {post_details[3]}
                      </p>
                    </div>
                    <div className="nav tag-cloud">
                      <Link to="#">Marketing</Link>
                      <Link to="#">Research</Link>
                      <Link to="#">Managment</Link>
                    </div>
                  </article>
                </Col>

                <Col sm={12} md={4} className="m-15 px-tb blog-aside">
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
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Post;
