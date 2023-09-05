import React, { useEffect, useState } from "react";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
import axios from "axios";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "../../css/agent.css";

import BootstrapTable from "react-bootstrap-table-next";
import { textFilter } from "react-bootstrap-table2-filter";
function AgentHome() {
  useEffect(() => {
    document.title = "View Requests";
    if (sessionStorage.getItem("user") !== "agent") {
      window.location = "/";
    }
    viewAllRequests();
  }, []);

  const page = paginationFactory({
    page: 1,
    sizePerPage: 5,
    nextPageText: ">",
    firstPageText: "<<",
    lastPageText: ">>",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log(page);
      console.log(sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log(page);
      console.log(sizePerPage);
    },
  });

  const columns = [
    {
      dataField: "reqid",
      text: "Request ID",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "address", text: "Address", sort: true, filter: textFilter() },
    { dataField: "city", text: "City", sort: true, filter: textFilter() },
    {
      dataField: "ewasteQty",
      text: "E-waste",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "quantity", text: "Quantity" },
    {
      text: "Action",
      formatter: (cell, row) =>
        row.status !== true ? (
          <button
            type="button"
            class="btn btn-outline-danger btn-sm badge-pill"
            onClick={() => {
              handleForm(row);
            }}
          >
            Collect
          </button>
        ) : (
          <span>Collected</span>
        ),
    },
  ];

  const viewAllRequests = () => {
    var userdata = sessionStorage.getItem("userdata");
    var myid = JSON.parse(userdata);
    // console.log("my id"+typeof(myid));
    // console.log("In viewAllRequest "+userdata);
    axios.get(`${base_url}/viewrequestbyagent/${myid.id}`).then(
      (response) => {
        if (response.data.length === 0) {
          swal.fire({
            title: "Agent",
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

  const collectedDonation = (req) => {
    console.log("Collected Donation " + req.reqid);
    var userdata = sessionStorage.getItem("userdata");
    var myid = JSON.parse(userdata);
    axios.put(`${base_url}/requests/${myid.id}`, req).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleForm = (data) => {
    console.log("handme  " + JSON.stringify(data));
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
          collectedDonation(data);
          swal.fire("Status Updated").then(function () {
            window.location = "/agenthome";
          });
        }
      });
  };

  const [requests, setRequests] = useState([]);
  return (
    <div className="pt-5 agent-img">
      <div className=" vh-100">
        <div class="card">
          <h5 class="card-header text-center txt-decor">All Requests</h5>
          <div class="card-body tbl_decor">
            <BootstrapTable
              bootstrap4
              keyField="id"
              columns={columns}
              data={requests}
              filter={filterFactory()}
              pagination={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentHome;
