import React from "react";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
import axios from "axios";

function Adminusercard({ user }) {
  const deleteUser = () => {
    axios.delete(`${base_url}/deleteuser/${user.email}`).then(
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
        title: "Are you sure you want to delete this user?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteUser();
          swal
            .fire("Deleted!", "User has been Deleted", "success")
            .then(function () {
              window.location = "/adminusers";
            });
        }
      });
  };

  return (
    <div>
      <tr>
        <td>{user.name}</td>
        <td>{user.city}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.securityQues}</td>
        <td>{user.securityAns}</td>
        <td>{user.admin === true ? "Yes" : "No"}</td>
        <td>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm badge-pill"
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
}

export default Adminusercard;
