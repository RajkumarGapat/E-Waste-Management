import React, { useEffect, useState } from "react";
import Admincard from "./Admincard";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
import axios from "axios";
import Adminagentcard from "./Adminagentcard";
import "../../css/admin.css";

function AgentsCityWise() {
  //let city="";
  useEffect(() => {
    document.title = "View Requests";
    if (sessionStorage.getItem("admin") !== "admin") {
      window.location = "/";
    }
    const frompage = sessionStorage.getItem("frompage"); //adminreq
    viewAllcityAgents();
  }, []);

  const viewAllcityAgents = () => {
    // `${base_url}/requests/${request.reqid}`
    let city = sessionStorage.getItem("city_request");
    console.log("city caught : " + city);
    let request_id = sessionStorage.getItem("request_no");
    //return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    axios.get(`${base_url}/city_wise_agents/${city}`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: "no list",
            text: "no admins in the city",
            icon: "error",
            button: "Ok",
          });
        }

        setCityAgents(response.data);
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

  const [cityagents, setCityAgents] = useState([]);
  return (
    <div class="min-vh-100 mt-5 assign_bg">
      <div class="container mt-5 pt-5">
        <h1 className=" mb-3 text-center text-white fw-bold">
          {sessionStorage.getItem("city_request")}
        </h1>
        <div class="card">
          <h5 class="card-header">Agents</h5>
          <div class="card-body">
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cityagents.length > 0 ? (
                  cityagents.map((item) => <Adminagentcard agent={item} />)
                ) : (
                  <h2 className="text-center m-5 p-5">No agents registered</h2>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgentsCityWise;
