import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../../api/bootapi.js";

function AssignCard({ request }) {
  const [confirm, setConfirm] = useState({
    reqid: request.reqid,
    name: request.name,
    email: request.email,
    address: request.address,
    city: request.city,
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

  const handleForm = () => {
    swal
      .fire({
        title: "Hey Admin",
        text: "Are you sure you have collected the donation?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          collectedDonation(confirm);
          swal.fire("Hurreh, We collect the donation").then(function () {
            window.location = "/admin";
          });
        }
      });
  };
  const deleteRequest = () => {
    axios.delete(`${base_url}/requests/${request.reqid}`).then(
      (response) => {
        //console.log(response);
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

  const handleDelete = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this request?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteRequest();
          swal
            .fire("Deleted!", "Request has been Deleted", "success")
            .then(function () {
              window.location = "/admin";
            });
        }
      });
  };
  const supplierPage = () => {
    swal
      .fire("taking to supplier page", "Assigning Agent", "Loading")
      .then(function () {
        sessionStorage.setItem("city_request", request.id);
        console.log(sessionStorage.getItem("city_request"));
        window.location = "/adminAgent_assign";
      });
  };
  return (
    <tr>
      <td className="fs-4 pe-3">{request.reqid}</td>
      <td className="fs-4 pe-3">{request.name}</td>
      <td className="fs-4 pe-3">{request.email}</td>
      <td className="fs-5 pe-3">{request.address}</td>
      <td className="fs-5 pe-3">{request.city}</td>
      <td className="fs-4 pe-3">{request.ewasteQty}</td>
      <td>
        <button className="btn btn-primary btn-md" onClick={handleForm}>
          Collected?
        </button>
      </td>
      <td>
        <button className="btn btn-danger btn-md" onClick={handleDelete}>
          Delete
        </button>
      </td>
      <td>
        <button className="btn btn-success btn-md" onClick={supplierPage}>
          Assigned
        </button>
      </td>
    </tr>
  );
}

export default AssignCard;
