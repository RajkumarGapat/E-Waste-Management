import React, { useEffect, useState } from "react";
import "../../css/agent.css";
import agent_img from "../../images/agentlogin.PNG";
import { Link } from "react-router-dom";
import base_url from "../../api/bootapi.js";
import axios from "axios";
import swal from "sweetalert2";

function Agentlogin() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const [user, setUser] = useState({});

  const handlerForm = (e) => {
    checkLogin(user);
    e.preventDefault();
  };

  const checkLogin = (data) => {
    axios.post(`${base_url}/Agentlogin`, data).then(
      (response) => {
        if (response.data.length === 0) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Credentials Entered or you have not registered yet.",
          });
        } else {
          sessionStorage.setItem("username", response.data.name);
          const userdata = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone,
            password: response.data.password,
            city: response.data.city,
            is_free: response.data.is_free,
          };
          sessionStorage.setItem("userdata", JSON.stringify(userdata));
          sessionStorage.setItem("user", "agent");
          window.location = "/agenthome";
        }
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Wrong Credentials",
        });
      }
    );
  };

  return (
    <div className="agent-img">
      <div className="vh-100 d-flex">
        <div className="container w-50 m-auto log">
          <div className="row">
            <div className="col-lg-5 p-0">
              <img src={agent_img} alt="" className="w-150 ag-img" />
            </div>
            <div className="col-lg-7">
              <div className="m-auto w-75 pt-5 pb-5 align-text-center ">
                <h3 class="center aligned header">Agent Login</h3>

                <form onSubmit={handlerForm} className="row g-3 mt-3">
                  <div className="col-md-12">
                    <label for="email" class="form-label fs-5">
                      Email-ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Your Registered Email..."
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
                      placeholder="Enter Password here..."
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <br></br>
                  <div class="col-md-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary ps-5 pe-5 p-2  mb-2"
                    >
                      Login
                    </button>
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

export default Agentlogin;
