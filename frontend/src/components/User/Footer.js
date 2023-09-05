import React from "react";
import "../../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-a2f4a2 text-dark pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <hr></hr>
              <h5 class="text-uppercase mb-4 font-weight-bold ">Our Mission</h5>
              <p>
                We collect E-waste from various societies and nearby
                localities.We are currently working only in four cities for now
                i.e Mumbai,Hyderabad,Pune and Banglore
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <hr></hr>
              <h5 class="text-uppercase mb-4 font-weight-bold ">Products</h5>
              <p>
                <a
                  href="/home"
                  style={{ "text-decoration": "none" }}
                  class="text-dark"
                >
                  E-Waste Management
                </a>
              </p>
              <p>
                <a
                  href="/home"
                  style={{ "text-decoration": "none" }}
                  class="text-dark"
                >
                  E-Waste Recycling
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <hr></hr>
              <h5 class="text-uppercase mb-4 font-weight-bold">Useful links</h5>
              <p>
                <Link
                  to="/home"
                  style={{ "text-decoration": "none" }}
                  class="text-dark"
                >
                  HOME
                </Link>
              </p>
              <p>
                <Link
                  to="/donate"
                  style={{ "text-decoration": "none" }}
                  class="text-dark"
                >
                  DONATE
                </Link>
              </p>
              <p>
                <Link
                  to="/view"
                  style={{ "text-decoration": "none" }}
                  class="text-dark"
                >
                  VIEW DONATION
                </Link>
              </p>
              <p>
                <Link
                  to="/profile"
                  style={{ "text-decoration": "none" }}
                  class="text-dark"
                >
                  PROFILE
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <hr></hr>
              <h5 class="text-uppercase mb-4 font-weight-bold ">Contact</h5>
              <p>
                <i class="fa fa-home mr-3"></i>Pune , Maharashtra
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>prashant@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 7385641207
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2023 All rights reserved by :
                <a
                  style={{ "text-decoration": "none " }}
                  href="https://github.com/widerohit"
                >
                  <strong>&nbsp;E-Waste Management</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
