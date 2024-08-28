import React from "react";


function Tabs({filterCategory, tabsData}){
    return(
        <>

 <div className="text-left my-4 mt-5">
 {
 tabsData.map((category, index)=>{
      return (
        <button type="button" className="btn btnmoret btn-outline-primary mx-2 text-capitalize" onClick={()=> filterCategory(category)} key={index}>{category}</button>
      )
 })
 }


</div>
        </>
    )
}

export default Tabs;