import React, { useEffect, useState } from "react";

const SideCart = ({ readTime, bookmarkCount, bookmarkTitles, handleClear }) => {
  // const [time, setTime] = useState(0);

  // useEffect(() => {
  //     const getReadTime = localStorage.getItem("readTime");
  //     setTime(getReadTime);

  // }, [readTime]);

  return (
    <div className="container-fluid">
      <div className="bg-info bg-opacity-25 fw-bold p-3 border border-info rounded">
        <p className="fs-4">Spent Time On Read : {readTime} Min</p>
      </div>

      <div className="bg-info bg-opacity-25 mt-4 mb-4 p-3 border border-info rounded">
        <p className="fs-4 fw-bold">Bookmarked Blogs : {bookmarkCount}</p>
        <div className="bg-white rounded p-3">
        <p className="fs-5 fw-semibold">{bookmarkTitles}</p>
        </div>
      </div>

      <button className="btn fw-bold bg-info bg-opacity-25 border-info" onClick={handleClear}>
        Clear Local Storage
      </button>

    </div>
  );
};

export default SideCart;
