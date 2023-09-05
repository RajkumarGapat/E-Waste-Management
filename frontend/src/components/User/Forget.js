import React, { useEffect, useState } from "react";
import "../../css/forget.css";
import base_url from "../../api/bootapi.js";
import axios from "axios";
import swal from "sweetalert2";
import { Link } from "react-router-dom";

function Forget() {
  useEffect(() => {
    document.title = "Forget Password";
  }, []);

  const [usere, setUsere] = useState("");
  const [userq, setUserq] = useState("");
  const [usera, setUsera] = useState("");
  const [userpwd, setUserpwd] = useState("");
  const [userconpwd, setUserconpwd] = useState("");

  const getEmail = (data) => {
    axios.post(`${base_url}/findbyemail`, data).then(
      (response) => {
        console.log(response.data);
        if (response.data.length === 0) {
          swal.fire({
            title: "Opps",
            text: "Please Enter Valid Email You Used For Registration",
            icon: "error",
          });
        } else {
          swal.fire({
            icon: "success",
            title: "Email Verified.",
            text: "Now you can set a new password by answering the security question and I hope you don't forget this one",
          });
          setUserq(response.data[0].securityQues);
          setUsere(response.data[0].email);
          document.getElementById("email").disabled = true;
        }
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };

  const ans = {
    email: usere,
    securityQues: userq,
    securityAns: usera,
  };
  const pass = {
    email: usere,
    password: userpwd,
  };
  const getAnswer = (data) => {
    axios.post(`${base_url}/forget`, data).then(
      (response) => {
        console.log(response);
        if (response.data.length === 0) {
          swal.fire({
            title: "Oh NO!",
            text: "Your Answer Does Not Match The One You Entered During Registration",
            icon: "error",
          });
          document.getElementById("securityAns").value = "";
          document.getElementById("password").value = "";
          document.getElementById("conpassword").value = "";
        } else {
          setNew(pass);
          clearFields();
          clearError();
          swal
            .fire({
              icon: "success",
              title: "Finally!!!",
              text: "You Have Reset The Password Successfully.Keep It Safe And Remember It For Login",
            })
            .then(function () {
              window.location = "/";
            });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const setNew = (data) => {
    axios.put(`${base_url}/updatepassword`, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const clearFields = () => {
    document.getElementById("email").value = "";
    document.getElementById("securityQues").value = "";
    document.getElementById("securityAns").value = "";
    document.getElementById("password").value = "";
    document.getElementById("conpassword").value = "";
  };
  const clearError = () => {
    document.getElementById("email").classList.remove("is-invalid");
    setEemail("");
    document.getElementById("securityAns").classList.remove("is-invalid");
    setEans("");
    document.getElementById("password").classList.remove("is-invalid");
    setEpassword("");
    document.getElementById("conpassword").classList.remove("is-invalid");
    setEconpassword("");
  };

  const [eemail, setEemail] = useState("");
  const [eans, setEans] = useState("");
  const [epassword, setEpassword] = useState("");
  const [econpassword, setEconpassword] = useState("");

  const evalidate = (e) => {
    if (usere === "") {
      document.getElementById("email").classList.add("is-invalid");
      setEemail("Please enter this field");
      setUsere("");
    } else if (
      usere.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setEemail("Please enter an valid email id");
      setUsere("");
    } else {
      getEmail({ email: usere });
    }
    e.preventDefault();
  };
  const validate = (e) => {
    if (usera === "" || userpwd === "" || userconpwd === "") {
      swal.fire("All fields are required");
    } else if (usera.length <= 3 || usera.length > 40) {
      document.getElementById("securityAns").classList.add("is-invalid");
      setEans("Enter Answer length above 2 or less than 40");
    } else if (
      userpwd === "" ||
      userpwd.search(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/) <
        0 ||
      userpwd.length < 6
    ) {
      document.getElementById("password").classList.add("is-invalid");
      setEpassword(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else if (userpwd !== userconpwd) {
      document.getElementById("conpassword").classList.add("is-invalid");
      setEconpassword("Password mismatch.");
    } else {
      getAnswer(ans);
      e.preventDefault();
    }
  };
  return (
    <div className="forget_bg-img">
      <div class="container vh-100" style={{ width: "50%" }}>
        <div class="row d-flex justify-content-center">
          <div class="col-md-12">
            <div class=" z-depth-1 mt-1">
              <div class="col-sm-12 rounded-right  p-0 mt-0  m-auto">
                <h2 class="mt-3 mb-3 text-center font-weight-bold text-danger">
                  <b>
                    <u>Don't Worry !!</u>
                  </b>
                </h2>

                <div class="row mb-4 ms-5">
                  <h4 class="font-weight-bold">
                    First Enter Registered Email&nbsp;
                    <span class="fs-5">(and verify it)</span>:{" "}
                  </h4>
                </div>
                <div class="row mb-4 ms-5">
                  <div class="col-sm-8">
                    <input
                      class="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email Here....."
                      value={usere}
                      onFocus={clearError}
                      onChange={(e) => {
                        setUsere(e.target.value);
                      }}
                    />
                    <div class="invalid-feedback fs-6 fw-bold">{eemail}</div>
                  </div>
                  <div class="col-sm-4">
                    <input
                      class="btn btn-primary btn-md text-center"
                      type="button"
                      value="Verify Email"
                      onClick={evalidate}
                    />
                  </div>
                </div>

                <div class="row mb-4 ms-5">
                  <div class="col-sm-12">
                    <h5 class="font-weight-bold">Security Question : </h5>
                    <input
                      class="form-control text-dark"
                      type="text"
                      id="securityQues"
                      name="securityQues"
                      value={userq}
                      onFocus={clearError}
                      disabled
                    />
                  </div>
                </div>

                <div class="row mb-4 ms-5">
                  <div class="col-sm-6">
                    <h5 class="font-weight-bold">Answer : </h5>
                    <input
                      type="text"
                      placeholder="Enter your Answer Here....."
                      class="form-control text-dark"
                      id="securityAns"
                      name="securityAns"
                      value={usera}
                      onFocus={clearError}
                      onChange={(e) => {
                        setUsera(e.target.value);
                      }}
                    />
                    <div class="invalid-feedback fs-6 fw-bold">{eans}</div>
                  </div>
                </div>

                <div class="row mb-4 ms-5">
                  <div class="col-sm-8">
                    <h5 class="font-weight-bold">New Password : </h5>
                    <input
                      type="password"
                      placeholder="Enter your New Password Here....."
                      class="form-control text-dark"
                      id="password"
                      name="password"
                      value={userpwd}
                      onFocus={clearError}
                      onChange={(e) => {
                        setUserpwd(e.target.value);
                      }}
                    />
                    <div class="invalid-feedback fs-6 fw-bold">{epassword}</div>
                  </div>
                </div>

                <div class="row mb-4 ms-5">
                  <div class="col-sm-8">
                    <h5 class="font-weight-bold">Confirm Password : </h5>
                    <input
                      type="password"
                      placeholder="Enter your Confirm Password Here....."
                      class="form-control text-dark"
                      id="conpassword"
                      name="conpassword"
                      value={userconpwd}
                      onFocus={clearError}
                      onChange={(e) => {
                        setUserconpwd(e.target.value);
                      }}
                    />
                    <div class="invalid-feedback fs-6 fw-bold">
                      {econpassword}
                    </div>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col-sm-6" style={{ textAlign: "right" }}>
                    <Link class="btn btn-danger btn-lg mb-2 me-5" to="/">
                      &nbsp; Back &nbsp;
                    </Link>
                  </div>
                  <div class="col-sm-6" style={{ textAlign: "left" }}>
                    <form>
                      <input
                        class="btn btn-primary btn-lg mb-2 ms-5"
                        type="button"
                        onClick={validate}
                        value="Submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
