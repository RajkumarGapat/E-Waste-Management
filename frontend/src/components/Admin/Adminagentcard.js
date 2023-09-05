import React, { useState } from "react";
import base_url from "./../../api/bootapi.js";
import swal from "sweetalert2";
import axios from "axios";

function Adminagentcard({ agent }) {
  const frompage = sessionStorage.getItem("frompage"); //"adminreq"
  const [confirm, setConfirm] = useState({
    reqid: agent.agentid,
    name: agent.name,
    email: agent.email,
    city: agent.city,
    phone: agent.phone,
    is_free: agent.is_free,
  });
  const deleteAgent = () => {
    axios.delete(`${base_url}/deleteagent/${agent.id}`).then(
      (response) => {
        console.log(response);
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
  const setStatus = () => {
    let request_id = sessionStorage.getItem("product_request");
    axios.get(`${base_url}/setStatus/${agent.id}/${request_id}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "ERROR !!!",
          text: "SERVER IS DOWN",
        });
      }
    );
  };
  const handleDelete = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this agent?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteAgent();
          swal
            .fire("Deleted!", "Agent has been Deleted", "success")
            .then(function () {
              window.location = "/Adminagents";
            });
        }
      });
  };
  const setworkstatus = () => {
    swal
      .fire({
        title: "Are you sure you want to assign a agent?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, change status !",
      })
      .then((result) => {
        if (result.isConfirmed) {
          setStatus();

          swal.fire("Agent Assigned !", "Changed", "success").then(function () {
            window.location = "/admin";
          });
        }
      });
  };

  return (
    <tr>
      <td>{agent.id}</td>
      <td>{agent.email}</td>
      <td>{agent.name}</td>
      <td>{agent.phone}</td>
      {frompage === "adminreq" ? (
        <td>
          {agent._free ? (
            <button
              type="button"
              class="btn btn-outline-danger btn-sm badge-pill"
              onClick={setworkstatus}
            >
              Assign Agent
            </button>
          ) : (
            <span>Busy</span>
          )}
        </td>
      ) : (
        <td>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm badge-pill"
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  );
}

export default Adminagentcard;
