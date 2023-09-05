import React, { useEffect, useState } from "react";
import base_url from "../../api/bootapi.js";
import axios from "axios";
import Admincolcard from "./Admincolcard";
import swal from "sweetalert2";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.js";
import "../../css/admin.css";

function Adminview() {
  useEffect(() => {
    document.title = "View Collections";
    if (sessionStorage.getItem("admin") !== "admin") {
      window.location = "/";
    }
    viewCollection();
  }, []);

  const viewCollection = () => {
    axios.get(`${base_url}/viewcollections`).then(
      (response) => {
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

  var supplierPage = (requestId) => {
    swal.fire("Taking to payment page", "Loading").then(function () {
      sessionStorage.setItem("product_request", requestId);

      window.location = "/payment";
    });
  };

  const [requests, setRequests] = useState([]);
  console.log(requests);
  const columns = [
    {
      dataField: "reqid",
      text: "Donation Id",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "email", text: "Email ID", sort: true, filter: textFilter() },
    { dataField: "ewasteQty", text: "E-Waste Donated" },
    { dataField: "quantity", text: "Quantity" },
    {
      dataField: "agentid.id",
      text: "Agent-Id",
      sort: true,
      filter: textFilter(),
    },
    {
      text: "Payment",
      formatter: (cell, row) =>
        row.payment === 0 ? (
          <button
            type="button"
            class="btn btn-outline-danger btn-sm badge-pill"
            onClick={() => {
              supplierPage(row.reqid);
            }}
          >
            Pay
          </button>
        ) : (
          <span>Paid : Rs. {row.payment}</span>
        ),
    },
  ];
  const page = paginationFactory({
    page: 1,
    sizePerPage: 5,
    nextPageText: ">",
    firstPageText: "<<",
    lastPageText: ">>",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
  });
  return (
    <div style={{ textAlign: "center" }} className="min-vh-100 admin-bg ">
      <div class="container mt-5 pt-3 ">
        <div class="card card-bg">
          <h4 class="card-header txt-deco">Collections</h4>
          <div class="card-body bt">
            <BootstrapTable
              bootstrap4
              keyField="reqid"
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
export default Adminview;
