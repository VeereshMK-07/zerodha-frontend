import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h2>{productName}</h2>
          <p className="fs-5" style={{ lineHeight: "1.8em" }}>
            {productDescription}
          </p>
          <div className="fs-5">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo →
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn more →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/google-play-badge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstore-badge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
