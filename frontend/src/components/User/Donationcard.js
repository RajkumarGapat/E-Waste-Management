import React, { useState } from "react";
import axios from "axios";
import base_url from "../../api/bootapi.js";

const Donationcard = ({ request }) => {
  const [load, setload] = useState(false);
  const [imgurl, setImgUrl] = useState("");
  const fetchImages = () => {
    const requestimageid = request.reqid;
    //`${base_url}/city_wise_agents/${city}`
    const url = `${base_url}/files/${requestimageid}`;
    console.log(url);
    axios.get(url, { responseType: "blob" }).then((res) => {
      console.log(res);
      const imgsrc = URL.createObjectURL(res.data);
      setImgUrl(imgsrc);
      // document.getElementById("preview").src = imgurl;
      setload(true);
    });
  };

  return (
    <tr>
      <td className="fs-4">{request.reqid}</td>
      <td className="fs-4">{request.ewasteQty}</td>
      <td className="fs-6">{request.address}</td>

      <td>
        {load ? (
          <img src={imgurl} alt="" id="preview" width="200" height="100" />
        ) : (
          <button class="btn btn-xs btn-info" onClick={fetchImages}>
            show image
          </button>
        )}
      </td>
    </tr>
  );
};

export default Donationcard;
