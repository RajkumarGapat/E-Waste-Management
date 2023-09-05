import React from "react";
import "../../css/home.css";
import img from "../../images/Swacch-Bharat-Black-removebg-preview.png";

function About() {
  return (
    <div
      class="min-vh-100 pt-1 text"
      style={{
        "background-image":
          "linear-gradient(to bottom, #def4de, #d0f4cf, #c1f4c1, #b2f4b1, #a2f4a2)",
      }}
    >
      <h1 class="mt-1 pt-5 text-center  display-10 fw-bold">
        Evanesce E-Waste
      </h1>
      <div class="container-fluid p-5 ">
        <div class="row m-auto">
          <div class="col-lg-8">
            <h2>
              <b>ABOUT US</b>
            </h2>
            <br />
            <h3>
              <strong>Our Mission</strong>
            </h3>
            <h5>
              <p>
                Our mission is to ensure consumption is more responsible and
                less burdensome on the planet and the poor. We strive to reduce
                waste and unsustainable consumption and enable better management
                of the waste that is generated. We also focus on fighting air
                pollution by making science and policy more accessible to
                everyone, thus creating public vigilance and action. In all our
                work, vulnerable populations-the poor, the marginalized,
                children, and women-will remain the sharpest on our radar. The
                program aims to create effective awareness at various levels of
                society to reduce the adverse impact on the environment and
                health arising out of the polluting technologies used in
                recycling plastic and e-waste in the unorganized sector.
              </p>
            </h5>
            <br />
          </div>
          <div class="col-lg-4 mt-5">
            <img
              src={img}
              class="card img-fluid"
              alt=""
              style={{ width: "415.99px", height: "250px" }}
            />
          </div>
        </div>
      </div>
      <div class="container-fluid p-5">
        <div class="row">
          <div class="col-lg-6">
            <div className="font text-center">
              <i className="fas fa-recycle fa-9x " />
            </div>
            <br />
            <div className=" text-center m-auto">
              <div className="row ">
                <h3>
                  <i className=" fas fa-circle "> Re-Cycle</i>
                  &nbsp;&nbsp;
                  <i className=" fas fa-circle "> Re-Sell</i>
                  &nbsp;&nbsp;
                  <i className=" fas fa-circle "> Re-Use </i>
                  &nbsp;&nbsp;
                </h3>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h1>
              <strong>Our Vision</strong>
            </h1>
            <br />
            <h4>
              <p>Inclusive, Sustainable and Equitable Growth For All</p>
            </h4>
            <h4>
              <p>
                We bring together nature, people and technology to provide the
                most impactful waste management solutions that maximise resource
                recovery
              </p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
