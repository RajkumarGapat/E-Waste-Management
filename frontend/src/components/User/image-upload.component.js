import React from "react";
import axios from "axios";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
export default function App({ reqdetails }) {
  const [uploadFile, setUploadFile] = React.useState();
  //const [superHero, setSuperHero] = React.useState();
  const [uploadResponse, setUploadResponse] = React.useState();
  const [imageuploadstatus, setImageUploadStatus] = React.useState(false);
  const [disablebutton, setDisableButton] = React.useState(false);
  localStorage.setItem("filestatus", false);
  const submitForm = (event) => {
    event.preventDefault();
    var selectedFile = uploadFile[0];
    var idxDot = selectedFile.name.lastIndexOf(".") + 1;
    var extFile = selectedFile.name
      .substr(idxDot, selectedFile.name.length)
      .toLowerCase();
    if (
      extFile === "jpg" ||
      extFile === "jpeg" ||
      extFile === "png" ||
      extFile === "svg" ||
      extFile === "gif"
    ) {
      //do whatever want to do
      const dataArray = new FormData();
      dataArray.append("requestid", reqdetails.reqid);
      console.log(sessionStorage.getItem("reqid"));
      console.log(dataArray);
      dataArray.append("file", uploadFile[0]);
      axios
        .post(`${base_url}/upload`, dataArray, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(
          (response) => {
            // setUploadFile({...uploadResponse,dataArray});

            swal
              .fire({
                icon: "success",
                title: "Hurreh!!!",
                text: "Image Uploaded",
              })
              .then(function () {
                // window.location = "/view";
                setImageUploadStatus(true);
                setDisableButton(true);
                localStorage.setItem("filestatus", true);
                // parentCallback(true);  //This is function received from parent along request details now passing image status
                //Access This image Status in Parent Component;
              });
          },
          (error) => {
            console.log(error);
            swal.fire({
              icon: "error",
              title: "Image Uploading",
              text: "File Could'nt not Uploaded",
            });
          }
        );
    } else {
      alert("Only jpg/jpeg, png, gif and svg files are allowed!");
    }
  };

  //Check Email

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <br />

        <input
          type="file"
          onChange={(e) => setUploadFile(e.target.files)}
          multiple="false"
          accept="image/png, image/jpeg "
        />
        <br />
        {imageuploadstatus ? (
          `file uploaded already`
        ) : (
          <input type="submit" disabled={disablebutton} />
        )}
      </form>

      <hr />
      <pre>{uploadResponse}</pre>
    </div>
  );
}
