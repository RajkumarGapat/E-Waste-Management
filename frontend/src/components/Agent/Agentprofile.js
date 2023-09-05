import React, { useEffect, useState } from "react";
import "../../css/profile.css";
import { Link } from "react-router-dom";

function Agentprofile() {
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  const user = sessionStorage.getItem("user");
  useEffect(() => {
    console.log(userdata);
    document.title = "Profile";
    if (user !== "agent") {
      window.location = "/";
    }
  }, []);

  return (
    <div class="profile-bg">
      <div class="container  w-50">
        <div class="row d-flex justify-content-center mt-2">
          <div class="col-md-8 mt-5 pt-5">
            <div class=" z-depth-3">
              <div class="col-sm-12  rounded-left rounded-right p-bg">
                <div class="card-block text-center text-white">
                  <i class="fas fa-id-card fa-5x mt-3 mb-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-8 ">
            <div class=" z-depth-3">
              <div class="col-sm-12 bg-white rounded-left rounded-right pb-7">
                <h4 class=" p-2 text-center font-weight-bold">
                  <b>Profile Details</b>
                </h4>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="font-weight-bold">
                      Agent id:{user === "agent" ? userdata.id : "id"}
                    </h4>
                  </div>
                </div>
                <hr class="badge-primary mt-0 " />
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="font-weight-bold">
                      Full Name : {user === "agent" ? userdata.name : "name"}
                    </h4>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="font-weight-bold">
                      Email ID : {user === "agent" ? userdata.email : "email"}
                    </h4>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="font-weight-bold">
                      Phone:{user === "agent" ? userdata.phone : "phone"}
                    </h4>
                  </div>
                </div>
                <div class="row pt-4">
                  <div className="col-md-12 text-center mt-2 mb-  ">
                    <Link
                      to="/agenthome"
                      className="btn btn-primary btn-md ps-5 pe-5 p-3"
                    >
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agentprofile;
