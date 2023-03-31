import React, { useEffect, useState } from "react";

const SideCart = ({readTime, bookmark}) => {


    // const [time, setTime] = useState(0);
    
    // useEffect(() => {
    //     const getReadTime = localStorage.getItem("readTime");
    //     setTime(getReadTime);
        
    // }, [readTime]);
    

  return (
    <div className="">
      <div className="">
        <h3>Spent Time On Read : {readTime} Min</h3>
      </div>

      <div className="">
              <h3>Bookmarked Blogs :{bookmark}</h3>
        <h4>Master Microsoft Power Platform and Become an In-Demand!</h4>
      </div>
    </div>
  );
};

export default SideCart;
