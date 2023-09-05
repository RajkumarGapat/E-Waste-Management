import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div>
      <div class="bg-dark text-right p-2 row">
        <div class="col-lg-8">
          <h4 class="text-white me-5 pe-5 fw-bold">Terms and Conditions</h4>
        </div>
        <div class="col-lg-4">
          <Link
            to="/register"
            class="btn btn-sm btn-primary me-5 ps-5 pe-5 p-2"
          >
            Back
          </Link>
        </div>
      </div>

      <div>
        <nav class="mr-md-5 ml-md-5 mb-1 mt-5 display-6 text-center">
          General Terms To Use
        </nav>
        <br />
        <div class="mr-md-5 ml-md-5 ">
          <ol>
            <li>
              Evanesce E-Waste is committed to bringing best of service to each
              of its clients. We feel that it is important to showcase our
              policies and procedures in order to demonstrate the level of
              service and dedication that you have come to expect.
            </li>
            <br />
            <li>
              Evanesce E-Waste, is committed to assisting clients in disposing
              of their technology in a manner protective of the environment.
            </li>
            <li>
              Evanesce E-Waste, is committed to the prevention of pollution and
              prevention of injury and ill health.
            </li>
            <br />
            <li>
              Evanesce E-Waste, is committed to providing a framework for
              setting and reviewing environmental, health and safety objectives
              and targets.
            </li>
            <br />
            <li>
              Evanesce E-Waste, is committed to complying with all legal and
              other requirements.
            </li>
            <br />
            <li>
              Evanesce E-Waste, is committed to communicating and reinforcing
              this policy throughout our company, as well as, to our customers,
              our suppliers and to the public.
            </li>
            <br />
            <li>
              Evanesce E-Waste, is committed to managing used and end of life
              electronic equipment based on a reuse, recover, dispose hierarchy
              including onsite and downstream materials management throughout
              the recycling chain
            </li>

            <br />
            <li>
              Evanesce E-Waste, is committed to continuous improvement achieved
              through monitoring and rigorous evaluation
            </li>
            <br />
            <li>
              You must not transmit any worms or viruses or any code of a
              destructive nature.
            </li>
            <br />
            <li>
              You must not, in the use of zero-e-waste , violate any laws in
              your jurisdiction (including but not limited to copyright laws).
            </li>
            <br />
            <li>
              Violation of any of these agreements will result in the
              termination of your account. While zero-e-waste prohibits such
              conduct and content on its site, you understand and agree that
              HIFI cannot be responsible for the Content posted on its web site
              and you nonetheless may be exposed to such materials and that you
              use the HIFI service at your own risk.
            </li>
            <br />
          </ol>
        </div>
      </div>
      <div>
        <nav class="mr-md-5 ml-md-5 mb-1 mt-5  display-6 text-center">
          Evanesce E-Waste Disclaimer
        </nav>
        <br />
        <div class=" mr-md-5 ml-md-5 mb-5 ">
          <ol>
            <li>
              <b>Disclaimer of Endorsement :</b>
              Mention of or referral to commercial products or services, and/or
              links to other sites does not imply official zero-e-waste
              endorsement of or responsibility for the opinions, ideas, data, or
              products presented at those locations, or guarantee the validity
              of the information provided. Mention of commercial
              products/services on other websites is provided soley as a pointer
              to information on topics related to environmental protection that
              may be useful to zero-e-waste staff and the public.
            </li>
            <br />
            <li>
              <b>Copyright Status : </b>
              The Government retains a nonexclusive, royalty-free license to
              publish or reproduce these documents, or allow others to do so,
              for Government purposes. These documents may be freely distributed
              and used for non-commercial, scientific and educational purposes.
              Commercial use of the documents available from the zero-e-waste
              websites may be protected under the Government of India and
              Foreign Copyright Laws. Individual documents on the zero-e-waste
              website may have different copyright conditions, and that will be
              noted in those documents.
            </li>
            <br />
            <li>
              <b>Disclaimer of Liability :</b>
              With respect to documents available from the zero-e-waste website,
              neither the Government nor any of their employees, makes any
              warranty, express or implied, including the warranties of
              merchantability and fitness for a particular purpose, or assumes
              any legal liability or responsibility for the accuracy,
              completeness, or usefulness of any information, apparatus,
              product, or process disclosed, or represents that its use would
              not infringe privately owned rights.
            </li>
            <br />
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Terms;
