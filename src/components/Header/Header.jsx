import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary mt-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold">Knowledge Cafe</a>
          <div className="d-flex" role="search">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top rounded-circle"
            />
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
