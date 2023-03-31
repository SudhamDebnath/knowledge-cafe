import React from "react";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary mt-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold">Knowledge Cafe</a>
          <div className="d-flex" role="search">
            <img
              src="../../../public/girl.svg"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
