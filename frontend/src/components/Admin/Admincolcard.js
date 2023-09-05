import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../../api/bootapi.js";

function Admincolcard({ request }) {
  const [confirm, setConfirm] = useState({
    reqid: request.reqid,
    name: request.name,
    email: request.email,
    address: request.address,
    city: request.city,
    quantity: request.quantity,
    payment: request.payment,
    ewasteQty: request.ewasteQty,
    status: true,
  });

  var supplierPage = () => {
    swal.fire("taking to payment page", "Loading").then(function () {
      sessionStorage.setItem("product_request", request.reqid);
      // sessionStorage.setItem("email_request",request.email);

      window.location = "/payment";
    });
  };

  return (
    <tr>
      <td className="fs-4 pe-5">{request.reqid}</td>
      <td className="fs-4 pe-5">{request.name}</td>
      <td className="fs-4 pe-5">{request.email}</td>
      <td className="fs-4 pe-5">{request.ewasteQty}</td>

      <td className="fs-4 pe-5">{request.quantity}</td>
      <td className="fs-4 pe-5"> {request.agentid.id}</td>
      <td>
        {request.payment === 0 ? (
          <button className="btn btn-success btn-md" onClick={supplierPage}>
            Payment
          </button>
        ) : (
          <h5 className="fs-4 pe-3">Paid</h5>
        )}
      </td>
    </tr>
  );
}

export default Admincolcard;
