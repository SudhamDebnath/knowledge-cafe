import React, { useEffect, useState } from "react";

const SideCart = ({ readTime }) => {

    const [time, setTime] = useState(0);
    
    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setTime(getReadTime);
        
    }, [readTime]);
    

  return (
    <div className="">
      <div className="bg-secondary-subtle">
        <h3>Spent time on read : {time} min</h3>
      </div>

      <div>
        <h3>Bookmarked Blogs : 8</h3>
        <h4>Master Microsoft Power Platform and Become an In-Demand!</h4>
      </div>
    </div>
  );
};

export default SideCart;
