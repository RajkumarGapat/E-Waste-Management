import React, { useEffect } from "react";
import "../../css/profile.css";

function UserProfile() {
  const sess = sessionStorage.getItem("userSession");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "User Profile";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);
  return (
    <div class="profile-bg">
      <div class="container vh-30 w-50">
        <div class="row d-flex justify-content-center mt-10 ">
          <div class="col-md-10 mt-5 pt-5 ">
            <div class=" z-depth-3">
              <div class="col-sm-12  rounded-left rounded-right p-bg">
                <div class="card-block text-center text-white">
                  <i class="fas fa-id-card fa-7x mt-5 mb-5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 ">
            <div class=" z-depth-3">
              <div class="col-sm-12 bg-white rounded-left rounded-right pb-3">
                <h3 class=" p-2 text-center font-weight-bold">
                  <b>PROFILE CARD</b>
                </h3>
                <hr class="badge-primary mt-10 " />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Full Name : {sess != null ? userdata.name : "name"}
                    </h3>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Email ID : {sess != null ? userdata.email : "email"}
                    </h3>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      City:{sess != null ? userdata.city : "city"}
                    </h3>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Phone : {sess != null ? userdata.phone : "phone"}
                    </h3>
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

export default UserProfile;
