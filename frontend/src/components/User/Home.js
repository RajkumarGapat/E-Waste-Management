import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/home.css";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";
import mumimg from "../../images/Mumbai.jpg";
import puneimg from "../../images/pune.png";
import hydimg from "../../images/hyderbad.jpg";
import bangimg from "../../images/banglore.jpg";
import firstimg from "../../images/firstimg.png";
import secondimg from "../../images/secondimg.png";
import payment from "../../images/PAYMENT.png";
import schedule from "../../images/SCHEDULE.png";
import pickup from "../../images/PICKUP.png";
import thirdimg from "../../images/thirdimg.jpg";
import Carouselbg from "../../images/Carouselbg.png";

import intro from "../../video/Intro.mp4";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  useEffect(() => {
    document.title = "Home";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    }
  }, []);
  return (
    <div>
      <div >
        <Carousel>
          <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={thirdimg} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={secondimg} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={firstimg} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="container text-center text-white mt-3 mb-3 pt-5" >
        <video controls autoplay width="850" height="600">
          <source type="video/mp4" src={intro} />
        </video>
      </div>

      <div style={{ "text-align": "center" }}>
        <Link to="/aboutus" class="btn btn-info text-dark btn-lg mt-5">
          ABOUT US
        </Link>
      </div>
      <section class="container ourservices text-center">
        <h2>OUR SERVICES</h2>
        <div class="row rowsetting">
          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-truck fa-3x text-white"></i>
            </div>
            <h2>E-Waste Management</h2>
          </div>

          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-recycle fa-3x text-white"></i>
            </div>
            <h2>E-Waste Recycling</h2>
          </div>

          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-send fa-3x text-white"></i>
            </div>
            <h2>Public Awareness</h2>
          </div>
        </div>
      </section>
      <section class="portfolio">
        <div class="container text-center ">
          <h3>LATEST BLOGS</h3>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 d-block m-auto">
              <div class="card">
                <img
                  src={blog1}
                  class="card img-fluid"
                  alt=""
                  style={{ width: "290px", height: "250px" }}
                />
                <div class="card body ">
                  <h5 class="card-title">
                    Recycling of e-waste in India and its potential
                  </h5>
                  <p class="card-text text-left">
                    Electronic waste (e-waste) typically includes discarded
                    computer monitors, motherboards, mobile phones and chargers,
                    compact discs, headphones, television sets, air conditioners
                    and refrigerators. According to the Global E-Waste Monitor
                    2017, India generates about 2 million tonnes (MT) of e-waste
                    annually and ranks fifth among e-waste producing countries,
                    after the US, China, Japan and Germany.In 2016-17.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div class="card">
                <img
                  src={blog2}
                  class="card img-fluid"
                  alt=""
                  style={{ width: "290px", height: "250px" }}
                />
                <div class="card body">
                  <h5 class="card-title">
                    How E-Waste Is Harmful to Your Health ?
                  </h5>
                  <p class="card-text text-left">
                    The toxic components in e-waste have the ability to damage
                    almost every system in the human body: the nervous system,
                    reproductive system and skeletal system, as well as the
                    brain, heart, liver and kidneys, and also causes birth
                    defects. Exposure to improperly disposed of chlorine causes
                    the destruction of cell structure and tissue damage. Cadmium
                    is found in cell phone batteries and can cause kidney
                    damage.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div class="card">
                <img
                  src={blog3}
                  class="card img-fluid"
                  alt=""
                  style={{ width: "290px", height: "250px" }}
                />
                <div class="card body">
                  <h5 class="card-title">
                    8 Reasons To Recycle Your Old Home Appliance
                  </h5>
                  <p class="card-text text-left">
                    These are the 8 main reasons:-
                    <ul>
                      <li>Dangerous effects of non-recycled electronics</li>
                      <li>Recycling electronics is easier now</li>
                      <li>Data Destruction can be securely performed</li>
                      <li>Get precious metals out of your e-waste</li>
                      <li>Haphazard disposition is illegal</li>

                      <li>Recycling old gadgets could save money</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ color: "black" }} class="text-center p-1">
          <br />
          <h3 color="blue">We Are Currently Working In These Cities</h3>
          <br />
          <hr></hr>
          <div class="img1">
            <img src={mumimg} alt="Mumbai_image" height="250" width="310" />
            <img src={puneimg} alt="pune" height="250" width="310" />
            <img src={hydimg} alt="hyd" height="250" width="310" />
            <img src={bangimg} alt="banglore" height="250" width="310" />
          </div>
          <div class="fourcities">
            <h3 class="fmumbai">
              Mumbai <br />
              900k+ Tonnes
            </h3>
            <h3 class="fpune">
              Pune
              <br />
              750k+ Tonnes
            </h3>
            <h3 class="fbanglore">
              Hyderabad
              <br />
              456k+ Tonnes
            </h3>
            <h3 class="fbanglore">
              Banglore
              <br />
              300k+ Tonnes
            </h3>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="loginflex">
        <div className="container text-center">
          <h2 className="how_works_title">How it works</h2>
          <br></br>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="how_works_col">
                <h4>Schedule a pickup</h4>
                <br></br>
                <img src={schedule} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="how_works_col">
                <h4>Pickup at your address</h4>
                <br></br>
                <img src={pickup} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="how_works_col">
                <h4>Receive payment</h4>
                <br></br>
                <img src={payment} alt="" />
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
