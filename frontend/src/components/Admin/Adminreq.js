import React, { useEffect, useState } from "react";
import Admincard from "./Admincard";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
import axios from "axios";
import "../../css/carddesign.css";
import "../../css/admin.css";

function Adminreq() {
  useEffect(() => {
    document.title = "View Requests";
    if (sessionStorage.getItem("admin") !== "admin") {
      window.location = "/";
    }
    viewAllRequests();
    sessionStorage.setItem("frompage", "adminreq");
  }, []);

  const viewAllRequests = () => {
    axios.get(`${base_url}/viewallpendingrequests`).then(
      (response) => {
        if (response.data.length === 0) {
          swal.fire({
            title: "Admin",
            text: "There are no requests",
            icon: "error",
            button: "Ok",
          });
        }
        console.log(response.data);
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

  const onSearchChange = (event) => {
    // this.setState({searchfield: event.target.value})
    console.log(event.target.value);
    setSearchfield(event.target.value);
  };
  const [requests, setRequests] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const filteredRequests = requests.filter((requestitem) => {
    return requestitem.city.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div class="min-vh-100 mt-5 admin-bg">
      <div class="container">
        <input
          type="text"
          class="any"
          onChange={onSearchChange}
          placeholder="Sort City Wise"
        />

        <div class="card-deck row">
          {requests.length > 0 ? (
            filteredRequests.map((item) => <Admincard request={item} />)
          ) : (
            <h2 className="text-center m-5 p-5">No request cards</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Adminreq;
