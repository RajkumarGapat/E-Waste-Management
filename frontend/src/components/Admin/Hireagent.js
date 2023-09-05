import React, { useEffect, useState } from "react";
import "../../css/register.css";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import base_url from "../../api/bootapi.js";
import axios from "axios";

function Hireagent() {
  useEffect(() => {
    document.title = "Hire Agent";
  }, []);

  let [uname, setUname] = useState("");
  let [ucity, setUcity] = useState("");
  let [uphone, setUphone] = useState("");
  let [uemail, setUemail] = useState("");
  let [upassword, setUpassword] = useState("");

  let unameinp = (e) => setUname(e.target.value);
  let ucityinp = (e) => setUcity(e.target.value);
  let uphoneinp = (e) => setUphone(e.target.value);
  let uemailinp = (e) => setUemail(e.target.value);
  let upasswordinp = (e) => setUpassword(e.target.value);

  let agent = {
    name: uname,
    city: ucity,
    phone: uphone,
    email: uemail,
    password: upassword,
  };

  //Register data
  const registerAgent = (data) => {
    axios.post(`${base_url}/Hireagent`, data).then(
      (response) => {
        swal
          .fire({
            icon: "success",
            title: "Hurreh!!!",
            text: "You have registered to a great cause",
          })
          .then(function () {
            window.location = "/Adminagents";
          });
        clearFields();
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Enter Email ID first",
          text: "We need to check if the email is already registered or not",
        });
      }
    );
  };

  //Check Email
  const checkEmail = (data) => {
    axios.post(`${base_url}/findagentbyemail`, data).then(
      (response) => {
        console.log(response);
        if (response.data.length == 0) {
          registerAgent(agent);
          clearErrors();
          clearFields();
        } else {
          swal.fire({
            icon: "error",
            title: "Oh no!!!",
            text: "Email is already Registered",
          });
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

  let [name, setName] = useState();
  let [ecity, setEcity] = useState();
  let [email, setEmail] = useState();
  let [phone, setPhone] = useState();
  let [password, setPassword] = useState();

  function clearErrors() {
    document.getElementById("name").classList.remove("is-invalid");
    setName("");

    document.getElementById("city").classList.remove("is-invalid");
    setEcity("");

    document.getElementById("phone").classList.remove("is-invalid");
    setPhone("");

    document.getElementById("email").classList.remove("is-invalid");
    setEmail("");

    document.getElementById("password").classList.remove("is-invalid");
    setPassword("");
  }

  function clearFields() {
    setUname("");
    setUcity("");
    setUphone("");
    setUemail("");
    setUpassword("");
  }

  let validate = () => {
    if (
      uname.trim() === "" ||
      ucity === "" ||
      uphone.trim() === "" ||
      uemail.trim() === "" ||
      upassword.trim() === ""
    ) {
      swal.fire("All fields are  required");
    } else if (
      uname.search(/^[a-zA-Z ]*$/) < 0 ||
      uname.length < 3 ||
      uname.length > 40
    ) {
      document.getElementById("name").classList.add("is-invalid");
      setName(
        "Please enter valid name having length of minimum 3 and maximum 30"
      );
    } else if (ucity === "") {
      document.getElementById("city").classList.add("is-invalid");
      setEcity("Enter City");
    } else if (uphone === "" || uphone.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("phone").classList.add("is-invalid");
      setPhone("Enter valid Mobile Number");
    } else if (
      uemail === "" ||
      uemail.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setEmail("Enter valid Email ID");
    } else if (
      upassword === "" ||
      upassword.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      upassword.length < 6
    ) {
      document.getElementById("password").classList.add("is-invalid");
      setPassword(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else {
      checkEmail(agent);
    }
  };

  return (
    <div>
      <div>
        <div className="vh-100 d-flex hire-agent ">
          <div className="m-auto w-25 pt-25 ps-5 pe-5 pb-15 align-self-center text-black hire-form">
            <form className="row g-3 mt-1">
              <div className="col-md-12">
                <br></br>

                <label for="name" className="form-label fs-5">
                  Hire Agent
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  onChange={unameinp}
                  onFocus={clearErrors}
                  value={uname}
                  required
                />

                <div class="invalid-feedback fs-6 fw-bold">{name}</div>
              </div>

              <div className="col-md-6">
                <label for="city" className="form-label fs-5">
                  City
                </label>
                <select
                  id="city"
                  className="form-select"
                  name="city"
                  onChange={ucityinp}
                  onFocus={clearErrors}
                  value={ucity}
                  required
                >
                  <option value=""></option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Banglore">Banglore</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
                <div class="invalid-feedback fs-6 fw-bold">{ecity}</div>
              </div>

              <div className="col-md-12">
                <label for="phone" className="form-label fs-5">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Without +91"
                  onChange={uphoneinp}
                  onFocus={clearErrors}
                  value={uphone}
                  required
                />
                <div class="invalid-feedback fs-6 fw-bold">{phone}</div>
              </div>
              <div className="col-md-12">
                <label for="email" className="form-label fs-5">
                  Email-ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Eg:-abc@gmail.com"
                  onChange={uemailinp}
                  onFocus={clearErrors}
                  value={uemail}
                  required
                />
                <div class="invalid-feedback fs-6 fw-bold">{email}</div>
              </div>
              <div className="col-md-12">
                <label for="password" className="form-label fs-5">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter a strong password"
                  onChange={upasswordinp}
                  onFocus={clearErrors}
                  value={upassword}
                  required
                />
                <div class="invalid-feedback fs-6 fw-bold">{password}</div>
              </div>

              <div className="col-md-12 text-center">
                <input
                  type="button"
                  className="btn btn-md btn-primary"
                  value="Register"
                  onClick={validate}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hireagent;
