import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.jpg";
function Adminnav() {
  const logoutAdmin = () => {
    sessionStorage.removeItem("admin");
    window.location = "/";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-white navbar fixed-top p-2">
        <div className="container-fluid">
          <img src={logo} alt="" style={{ height: "60px", width: "150px" }} />
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <h3 className="navbar-brand font-weight-bold">Admin Panel</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsenavbar"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-dark text-center"
            id="collapsenavbar"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item ms-3">
                <Link
                  to="/admin"
                  style={{ color: "black", textDecoration: "none" }}
                  classNameName="nav-link "
                >
                  Pending Requests
                </Link>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item ms-3">
                <Link
                  to="/adminview"
                  style={{ color: "black", textDecoration: "none" }}
                  classNameName="nav-link "
                >
                  Collected Donations
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link
                  to="/adminusers"
                  style={{ color: "black", textDecoration: "none" }}
                  classNameName="nav-link "
                >
                  View Users
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link
                  to="/Hireagent"
                  style={{ color: "black", textDecoration: "none" }}
                  classNameName="nav-link text-black font-weight-bold "
                >
                  Hire Agent
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link
                  to="/Adminagents"
                  style={{ color: "black", textDecoration: "none" }}
                  classNameName="nav-link text-black font-weight-bold"
                >
                  View Agents
                </Link>
              </li>
              <li className="nav-item  nav-logout">
                <button
                  className="btn btn-sm btn-primary ps-3 pe-3 p-2"
                  onClick={logoutAdmin}
                  type="submit"
                >
                  &nbsp;&nbsp;LOGOUT&nbsp;&nbsp;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Adminnav;
