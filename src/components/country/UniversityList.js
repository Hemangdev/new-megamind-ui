import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import "./country.css";

import { TabPanel } from "react-tabs";

//Axios for get request
import axios from "axios";
// import $ from "jquery";

function UniversityList()  {



  const [ca_university, setData1] = useState([]);
   
  useEffect(() => {
  

  axios.get("https://megamindonline.com/admin/webmanager/controller.php?command=GET_UNIVERSITY_NAMES_LIST")
   .then((response) => {
    setData1(response.data.split(";").filter(r => r !== ''));
   })
   .catch((error) => {
   console.log(error);
   });

  }, []);





    return (

<>

<TabPanel className="pt-0 checkthis">
                          <div className="d-grid innergr">
                            <ul className="ul-text toplist">
                            { ca_university.map((name) => 
			  (
                              <li>
                                <Link className="" to="" exact>
                            {console.log(name.split(",")[0])}
                                {name.split(",")[0]}
                                </Link>
                              </li>
                              ))}

                            </ul>
                          </div>
                        </TabPanel>
</>
    )

}

export default UniversityList;