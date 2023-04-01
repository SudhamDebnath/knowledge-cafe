import React, { useEffect, useState } from "react";

const SideCart = ({ readTime, bookmarkCount, bookmarkTitles }) => {
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
        <h3>Bookmarked Blogs No:{bookmarkCount}</h3>
        <h4>Bookmark Titles: {bookmarkTitles}</h4>
      </div>
    </div>
  );
};

export default SideCart;
