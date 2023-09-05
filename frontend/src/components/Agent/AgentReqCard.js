import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../../api/bootapi.js";

function AgentReqCard({ request }) {
  const [confirm, setConfirm] = useState({
    reqid: request.reqid,
    name: request.name,
    email: request.email,
    address: request.address,
    city: request.city,
    quantity: request.quantity,
    ewasteQty: request.ewasteQty,
    status: request.status,
  });

  const collectedDonation = (data) => {
    var userdata = sessionStorage.getItem("userdata");
    var myid = JSON.parse(userdata);
    axios.put(`${base_url}/requests/${myid.id}`, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleForm = () => {
    swal
      .fire({
        title: "Hey Agent",
        text: "Have you collected the donation?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          collectedDonation(confirm);
          swal.fire("Status Updated").then(function () {
            window.location = "/agenthome";
          });
        }
      });
  };

  return (
    <tr>
      <td className="fs-4 pe-3">{request.name}</td>
      <td className="fs-4 pe-3">{request.address}</td>
      <td className="fs-4 pe-3">{request.city}</td>
      <td className="fs-4 pe-3">{request.ewasteQty}</td>
      <td className="fs-4 pe-3">{request.quantity}</td>
      <td>
        {request.status === false ? (
          <button className="btn btn-primary btn-md" onClick={handleForm}>
            Collect
          </button>
        ) : (
          <h5 className="fs-4 pe-3">Collected</h5>
        )}
      </td>
    </tr>
  );
}

export default AgentReqCard;
