import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <br />
        <br />
        <br />
        <p className="fs-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodha-fund-house.png"
            style={{ width: "50%" }}
          />
          <br />
          <br />
          <p className="text-small text-muted">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            that is creating simple and transparent index{" "}
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibull-logo.svg" style={{ width: "60%" }} />
          <br />
          <br />
          <p className="text-small text-muted">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg" style={{ width: "40%" }} />
          <br />
          <br />
          <p className="text-small text-muted">
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streak-logo.png" style={{ width: "50%" }} />
          <br />
          <br />
          <p className="text-small text-muted">
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcase-logo.png" style={{ width: "50%" }} />
          <br />
          <br />
          <p className="text-small text-muted">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/ditto-logo.png" style={{ width: "40%" }} />
          <br />
          <br />
          <p className="text-small text-muted">
            Personalized advice on life <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "18%", margin: "0 auto" }}onClick={() => navigate("/signup")}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
