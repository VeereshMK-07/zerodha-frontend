import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

function Signup() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

const handleSendOtp = async () => {

  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone)) {
    alert("Enter valid Indian mobile number");
    return;
  }

  if (/^(\d)\1+$/.test(phone)) {
    alert("Invalid phone number");
    return;
  }

  try {
    await axios.post(
      "https://zerodha-backend-e1fx.onrender.com/api/auth/send-otp",
      { phone }
    );

    alert("OTP sent!");
    setShowOtpField(true);

  } catch (err) {
    console.error(err);
    alert("Error sending OTP");
  }
};

  const handleVerifyOtp = async () => {
  try {
    const res = await axios.post(
      "https://zerodha-backend-e1fx.onrender.com/api/auth/verify-otp",
      { phone, otp }
    );

    // STORE TOKEN
    localStorage.setItem("token", res.data.token);

    alert("Login successful");

    setOtp("");

    // REDIRECT
    window.location.href =
      "https://zerodha-dashboard-fb5x.onrender.com/";
  } catch (err) {
    console.error(err);
    alert("Invalid OTP");
  }
};

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* LEFT SIDE IMAGE */}
        <div className="signup-left">
          <img src="media/images/account_open.svg" alt="dashboard" />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="signup-right">
          <h2>Signup now</h2>
          <p className="sub-text">Or track your existing application</p>

          <div className="phone-input">
            <div className="country-code">
              <img src="media/images/india-flag.svg" alt="flag" /> +91
            </div>

            <input
              inputMode="numeric"
              maxLength="10"
              value={phone}
              onChange={(e) => {
                const value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 10);
                setPhone(value);
              }}
              placeholder="Enter your mobile number"
            />
          </div>

          <br />
          <button className="btn btn-primary" onClick={handleSendOtp}>
            Get OTP
          </button>

          {/* OTP INPUT FIELD */}
          <br />
          <br />

          {showOtpField && (
            <>
              <br />

              <input
                type="text"
                maxLength="6"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="otp-input"
              />

              <br />
              <br />

              <button className="otp-btn" onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </>
          )}

          <br />
          <br />

          <p className="terms">
            By proceeding, you agree to the Zerodha
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              terms{" "}
            </a>
            &
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              privacy policy{" "}
            </a>
          </p>

          <br />

          <p style={{ fontSize: "15px" }}>
            Looking to open NRI account?
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Click here
            </a>
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="container p-5 mb-5">
        <div className="row text-center">
          <h2 className="mt-5">Open a Zerodha account</h2>

          <p className="m-3">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>

          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "18%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
