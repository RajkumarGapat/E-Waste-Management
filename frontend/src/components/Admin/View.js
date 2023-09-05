import axios from "axios";
import React, { useState, useEffect } from "react";
import Viewcard from "./Viewcard";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
import "../../css/view.css";
import gify from "../../images/home_1.gif";

const View = () => {
  const name = sessionStorage.getItem("username");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "View Pending Donations";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
    viewUserRequests(userdata);
  }, []);

  const viewUserRequests = (data) => {
    axios.post(`${base_url}/pendingrequests`, data).then(
      (response) => {
        if (response.data.length === 0) {
          swal.fire({
            title: `Hey ${name}`,
            text: "There are no requests",
            icon: "error",
            button: "Ok",
          });
        }
        setRequests(response.data);
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
  const [requests, setRequests] = useState([]);
  console.log(requests);

  return (
    <div className="min-vh-350 view_bg">
      <div class="card-deck row">
        {requests.length > 0 ? (
          requests.map((item) => <Viewcard request={item} />)
        ) : (
          <div className="gify">
            <img src={gify} alt="" height="600" width="600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
