import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5  mt-5  border-top">
        <h2 className="text-center ">Developer</h2>
      </div>
      <div
        className="row p-5  text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="public/media/images/Mypic.JPG"
            alt="Developer"
            style={{ borderRadius: "100%", width: "70%" }}
          ></img>
          <h5 className="mt-4">Veeresh Kakamari</h5>
          <p className="mt-4">Developer</p>
        </div>
        <div className="col-6 p-5">
          <p>
            Veeresh is a MERN stack developer and Computer Science Engineer
            passionate about building real-world digital products. He focuses on
            creating scalable, user-friendly web applications that solve
            meaningful problems and deliver practical impact.
          </p>
          <p>
            He has built projects like Wanderlust, a full-feature travel listing
            platform, and RITHUMA, a privacy-first women’s health tracking
            application, along with several interactive web applications.
          </p>
          <p>Building products is his passion.</p>
          <p>
            Connect on <a  href="https://github.com/VeereshMK-07"style={{ textDecoration: "none" }}>GitHub </a>
            /
            <a href="https://www.linkedin.com/in/veeresh-kakamari-7593b02a0/"style={{ textDecoration: "none" }}> LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
