import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../../api/bootapi.js";
import "../../css/admin.css";

const Paymentinsert = (request) => {
  const frompage = sessionStorage.getItem("frompage");
  useEffect(() => {
    document.title = "Update";
    if (sessionStorage.getItem("admin") !== "admin") {
      window.location = "/";
    }

    getPrevious();
  }, []);

  const [confirm, setConfirm] = useState({
    reqid: request.reqid,
    name: request.name,
    email: request.email,
    address: request.address,
    city: request.city,
    quantity: request.quantity,
    ewasteQty: request.ewasteQty,
    status: true,
  });

  const collectedDonation = (data) => {
    axios.put(`${base_url}/requests`, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  var ureqid = sessionStorage.getItem("product_request");
  console.log("get null" + ureqid);
  const getPrevious = () => {
    axios.get(`${base_url}/getrequests/${ureqid}`).then(
      (response) => {
        setUpayment(response.data[0].payment);
      },
      (error) => {
        swal.fire("Server is down");
      }
    );
  };

  let uname = sessionStorage.getItem("username");
  let uemail = sessionStorage.getItem("userSession");

  let [upayment, setUpayment] = useState("");

  let paymentinp = (e) => setUpayment(e.target.value);

  const udata = {
    reqid: ureqid,
    name: uname,
    email: uemail,

    payment: upayment,
  };

  const updateRequest = (data) => {
    let reqid = sessionStorage.getItem("product_request");
    console.log("fghjk" + reqid);
    axios.put(`${base_url}/requestspay/${reqid}`, data).then(
      (response) => {
        swal
          .fire({
            icon: "success",
            title: "Payment",
            text: "Payment Done",
          })
          .then(function () {
            window.location = "/adminview";
          });
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

  let [epayment, setEpayment] = useState(0);

  const clearFields = () => {
    setUpayment(0);
  };

  const clearError = () => {
    document.getElementById("payment").classList.remove("is-invalid");
    setEpayment("");
  };

  const validate = () => {
    if (upayment === "") {
      swal.fire("All fields are required");
    } else if (parseInt(upayment) < 0) {
      document.getElementById("payment").classList.add("is-invalid");
      setEpayment("Enter a valid payment");
    } else {
      swal.fire("Success!!");

      updateRequest(udata);
      clearError();
      clearFields();
    }
  };
  return (
    <div class="mt-5 pt-5  min-vh-100 pb-5 pay-bg">
      <h5 class="text-center text-white display-4 fw-bold mb-3 pt-5 pb-5">
        Payment
      </h5>
      <form class="row g-3 m-auto bg-light decor ">
        <div className="col-md-12 ">
          <label for="name" className="form-label fs-4">
            Request Id :-
          </label>
          <span className="fs-3 fw-bold text-grey">Req</span>
          <input
            style={{ border: "0px none" }}
            type="text"
            className=" bg-light fs-3 fw-bold text-black"
            id="reqid"
            name="reqid"
            value={ureqid}
            disabled
          />
        </div>

        <div className="col-12 mb-3">
          <label for="quantity" className="form-label">
            Enter Amount to pay (in INR)
          </label>
          <input
            type="Number"
            className="form-control"
            id="payment"
            placeholder="should be in  between 1-100"
            name="payment"
            value={upayment}
            onFocus={clearError}
            onChange={paymentinp}
          />
          <div class="invalid-feedback fs-6 fw-bold">{epayment}</div>
        </div>

        <div className="col-md-6 text-center mt-5 mb-5  ">
          <Link to="/view" className="btn btn-primary btn-lg ps-5 pe-5 p-3">
            Back
          </Link>
        </div>
        <div className="col-md-6 text-center mt-5 mb-5  ">
          <input
            type="button"
            className="btn btn-primary btn-lg ps-5 pe-5 p-3"
            value="Pay"
            onClick={validate}
          />
        </div>
      </form>
    </div>
  );
};

export default Paymentinsert;
