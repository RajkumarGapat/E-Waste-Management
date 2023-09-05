import React, { useEffect, useState } from "react";
import "../../css/login.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import base_url from "../../api/bootapi";
import axios from "axios";
import swal from "sweetalert2";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [user, setUser] = useState({});

  //Handler of Login form
  const handlerForm = (e) => {
    checkLogin(user);
    e.preventDefault();
  };

  //Login check method
  const checkLogin = (data) => {
    axios.post(`${base_url}/login`, data).then(
      (response) => {
        if (response.data.length === 0) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Credentials Entered or You Have Not Registered Yet.",
          });
        } else {
          if (response.data[0].admin === true) {
            window.location = "/admin";
            sessionStorage.setItem("admin", "admin");
          } else {
            sessionStorage.setItem("username", response.data[0].name);
            const userdata = {
              name: response.data[0].name,
              email: response.data[0].email,
              city: response.data[0].city,
              phone: response.data[0].phone,
            };
            sessionStorage.setItem("userdata", JSON.stringify(userdata));
            sessionStorage.setItem("userSession", response.data[0].email);
            localStorage.setItem("user", response.data[0].email);
            window.location = "/home";
          }
        }
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh No!",
          text: "Server is Down",
        });
      }
    );
  };

  return (
    <div class="login-img">
      <div className="vh-150 d-flex">
        <div>
          <div className="row">
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3  py-4 p-md-5 mx-md-1">
                <img
                  src={logo}
                  alt=""
                  style={{ height: "380px", width: "430px" }}
                />
                <br></br>
                <br></br>
                <h3 class="text-black mb-4">
                  Perfect Solution To Your E-Waste
                </h3>
                <h5 style={{ color: "black" }}>
                  Evansece E-waste is an India's most loved and leading
                  professional E-waste Management Company that has set industry
                  benchmarks time and again with its innovative & environment
                  friendly disposal practices.
                </h5>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="m-auto w-75 pt-5 pb-5 align-self-center ">
                <h1
                  className="text-center fw-bolder mb-3"
                  style={{ color: "green" }}
                >
                  E-Waste Management
                </h1>
                <h3
                  style={{ fontWeight: "bold" }}
                  className="text-center bold display-6"
                >
                  Login
                </h3>

                <form onSubmit={handlerForm} className="row g-3 mt-3">
                  <div className="col-md-12">
                    <label
                      for="email"
                      class="form-label fs-5"
                      text-align="center"
                      fontWeight="bold"
                    >
                      Email-ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <label for="password" className="form-label fs-5">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-md-12 mt-5 text-center">
                    <h5 className="fs-5">
                      Not Registered Yet ??
                      <Link
                        to="/register"
                        className="text-decoration-none fs-5"
                      >
                        &nbsp; &nbsp;Register Here
                      </Link>
                    </h5>
                  </div>
                  <div class="col-md-12 mt-3 text-center">
                    <Link to="/forget" class="text-decoration-none fs-5">
                      Forgot Password ?
                    </Link>
                  </div>
                  <div class="col-md-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary ps-5 pe-5 p-2  mb-2"
                    >
                      Login
                    </button>
                    <br />
                    <Link to="/Agentlogin">Agent Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
