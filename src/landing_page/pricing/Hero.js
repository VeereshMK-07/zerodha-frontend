import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="text-center">Charges</h1>
        <p className="text-center text-muted fs-4 mt-3">
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 p-4">
          <img src="media/images/pricing-equity.svg" />
          <h2 className="text-center mb-4 fs-3">Free equity delivery</h2>
          <p className=" text-muted text-center">
            All equity delivery investments (NSE, BSE),are absolutely free — ₹ 0
            brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/other-trades.svg" />
          <h2 className="text-center mb-4 fs-3">Intraday and F&O trades</h2>
          <p className=" text-muted text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/direct MF.svg" />
          <h2 className="text-center fs-3 mb-4">Free direct MF</h2>
          <p className=" text-muted text-center">
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP
            <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
