import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5 mb-5">
          <h2>{productName}</h2>
          <p className="fs-5" style={{ lineHeight: "1.8em" }}>
            {productDescription}
          </p>
          <div className="fs-5">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more →
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
