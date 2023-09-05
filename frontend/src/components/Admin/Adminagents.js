import React, { useEffect, useState } from "react";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
import axios from "axios";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import { textFilter } from "react-bootstrap-table2-filter";
function Adminagents() {
  sessionStorage.setItem("frompage", "adminagents");
  useEffect(() => {
    document.title = "Agents List";
    if (sessionStorage.getItem("admin") !== "admin") {
      window.location = "/";
    }
    viewAgents();
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

  const deleteAgent = (agentEmail) => {
    axios.delete(`${base_url}/deleteagent/${agentEmail}`).then(
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
  const handleDelete = (row) => {
    console.log("asdfsdfsdfsdfdrow : " + row.id);
    swal
      .fire({
        title: "Are you sure you want to delete this Agent?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete It!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteAgent(row.id);
          swal
            .fire("Deleted!", "Agent has been Deleted", "success")
            .then(function () {
              window.location = "/Adminagents";
            });
        }
      });
  };

  const viewAgents = () => {
    axios.get(`${base_url}/getallagents`).then(
      (response) => {
        if (response.data.length === 0) {
          swal.fire({
            title: "Admin",
            text: "There are No Agents Registered",
            icon: "error",
            button: "Ok",
          });
        }
        console.log(agents);
        setAgents(response.data);
      },
      (error) => {
        console.log(error);
        swal.fire("Server is Daown");
      }
    );
  };

  const columns = [
    { dataField: "id", text: "ID", sort: true, filter: textFilter() },
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "email", text: "E-mail", sort: true, filter: textFilter() },
    { dataField: "phone", text: "Phone no.", sort: true, filter: textFilter() },
    { dataField: "city", text: "City", filter: textFilter() },
    {
      text: "Action",
      formatter: (cell, row) => (
        <button
          type="button"
          class="btn btn-outline-danger btn-sm badge-pill"
          onClick={() => handleDelete(row)}
        >
          Delete
        </button>
      ),
    },
  ];

  const [agents, setAgents] = useState([]);
  console.log(agents);
  return (
    <div className="min-vh-100 admin-bg ">
      <div class="container mt-10 pt-30 ">
        <div class="card card-bg">
          <h4 class="card-header txt-deco">All Agents</h4>
          <div style={{ textAlign: "center" }} class="card-body bt">
            {/* <table class="table table-hover table-bordered">
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
                {agents.length > 0 ? (
                  agents.map((item) => <Adminagentcard agent={item} />)
                ) : (
                  <h2 className="text-center m-5 p-5">No agents registered</h2>
                )}
              </tbody>
            </table> */}
            <BootstrapTable
              bootstrap4
              keyField="id"
              columns={columns}
              data={agents}
              filter={filterFactory()}
              pagination={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminagents;
