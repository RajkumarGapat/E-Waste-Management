import React, { useEffect, useState } from "react";
import base_url from "../../api/bootapi.js";
import axios from "axios";
import swal from "sweetalert2";
import "../../css/insert.css";

const Insert = () => {
  useEffect(() => {
    document.title = "Donate";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);

  let uname = sessionStorage.getItem("username");
  let uemail = sessionStorage.getItem("userSession");
  let [uaddress, setUaddress] = useState("");
  let [ucity, setUcity] = useState("");
  let [uquantity, setUquantity] = useState("");
  let [uewasteQty, setUewasteQty] = useState("");

  let addressinp = (e) => setUaddress(e.target.value);
  let cityinp = (e) => setUcity(e.target.value);
  let quantityinp = (e) => setUquantity(e.target.value);
  let ewasteinp = (e) => setUewasteQty(e.target.value);

  const udata = {
    name: uname,
    email: uemail,
    address: uaddress,
    city: ucity,
    quantity: uquantity,
    ewasteQty: uewasteQty,
  };

  const insertRequest = (data) => {
    axios.post(`${base_url}/requests`, data).then(
      (response) => {
        swal
          .fire({
            icon: "success",
            title: "Congratulations",
            text: "You are contributing to a great cause.We will contact you soon via email or phone number provided for collection.",
          })
          .then(function () {
            window.location = "/view";
          });
        clearFields();
        clearError();
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is Down",
        });
      }
    );
  };

  let [eaddress, setEaddress] = useState("");
  let [ecity, setEcity] = useState("");
  let [equantity, setEquantity] = useState("");
  let [eewasteQty, setEewasteQty] = useState("");

  const clearFields = () => {
    setUaddress("");
    setUcity("");
    setUquantity("");
    setUewasteQty("");
  };

  const clearError = () => {
    document.getElementById("address").classList.remove("is-invalid");
    setEaddress("");

    document.getElementById("city").classList.remove("is-invalid");
    setEcity("");

    document.getElementById("quantity").classList.remove("is-invalid");
    setEquantity("");

    document.getElementById("ewasteQty").classList.remove("is-invalid");
    setEewasteQty("");
  };

  const validate = () => {
    if (
      uaddress === "" ||
      ucity === "" ||
      uquantity === "" ||
      uewasteQty === ""
    ) {
      swal.fire("All fields are Required");
    } else if (
      uaddress.search(/^[/#.0-9a-zA-Z\s,-]+$/) < 0 ||
      uaddress.length < 10
    ) {
      document.getElementById("address").classList.add("is-invalid");
      setEaddress("Enter a valid address");
    } else if (parseInt(uquantity) < 1 || parseInt(uquantity) > 100) {
      document.getElementById("quantity").classList.add("is-invalid");
      setEquantity("Enter a quantity between 1-100");
    } else if (uewasteQty.search(/(?=.*[a-zA-Z]).{6,100}/) < 0) {
      document.getElementById("ewasteQty").classList.add("is-invalid");
      setEewasteQty(
        "Enter a description having at least, one character with a minimum length of 6 and a maximum of 100"
      );
    } else {
      insertRequest(udata);
      clearError();
      clearFields();
    }
  };
  return (
    <div>
      <div id="now" className="mt-5 p-2">
        <form className="row g-3 w-50 m-auto p-5 fs-5 log">
          <div className="col-md-12 mb-3 ">
            <label for="name" className="form-label fs-10">
              Name :-
            </label>
            <input
              style={{ border: "0px none" }}
              type="text"
              className=" bg-light fs-10 fw-bold "
              id="name"
              name="name"
              value={uname}
              disabled
            />
            <br></br>
            <label for="email" className="form-label fs-10">
              Email :-
            </label>
            <input
              type="email"
              style={{ border: "0px none" }}
              className="bg-light fs-10 fw-bold "
              id="email"
              name="email"
              value={uemail}
              disabled
            />
          </div>
          <div className="col-md-12 mb-3"></div>

          <div className="col-12 mb-3">
            <label for="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Building no or Bunglow no./Apartment/Locality/Road or Landmark-Zipcode"
              name="address"
              value={uaddress}
              onFocus={clearError}
              onChange={addressinp}
            />
            <div class="invalid-feedback fs-6 fw-bold">{eaddress}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label for="city" className="form-label">
              City
            </label>
            <div className="col-md-6 "></div>
            <select
              id="city"
              className="form-select"
              name="city"
              value={ucity}
              onFocus={clearError}
              onChange={cityinp}
            >
              <option selected>Choose City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Banglore">Banglore</option>
            </select>
            <div class="invalid-feedback fs-6 fw-bold">{ecity}</div>
          </div>

          <div className="col-12 mb-3">
            <label for="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="Number"
              className="form-control"
              id="quantity"
              placeholder="should be in  between 1-100"
              name="quantity"
              value={uquantity}
              onFocus={clearError}
              onChange={quantityinp}
            />
            <div class="invalid-feedback fs-6 fw-bold">{equantity}</div>
          </div>

          <div className="col-md-8 mb-1">
            <label for="ewasteQty" className="form-label">
              Mention description of E-Waste
            </label>
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              id="ewasteQty"
              name="ewasteQty"
              placeholder="Eg:-mobiles, Televsion etc......"
              value={uewasteQty}
              onFocus={clearError}
              onChange={ewasteinp}
            />
            <div class="invalid-feedback fs-6 fw-bold">{eewasteQty}</div>
          </div>

          <div className="col-12 text-center mt-5 mb-5  ">
            <input
              type="button"
              value="Donate"
              className="btn btn-primary btn-lg ps-5 pe-5 p-3"
              onClick={validate}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Insert;
