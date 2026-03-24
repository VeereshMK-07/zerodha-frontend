import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./signup.css";

function Signup() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const [showNameInput, setShowNameInput] = useState(false);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  // ================= SEND OTP =================
  const handleSendOtp = async () => {
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      toast.warning("Enter valid Indian mobile number 📱");
      return;
    }

    if (/^(\d)\1+$/.test(phone)) {
      toast.warning("Invalid phone number ⚠️");
      return;
    }

    try {
      setLoadingOtp(true);

      await axios.post(
        "https://zerodha-backend-e1fx.onrender.com/api/auth/send-otp",
        { phone },
      );

      toast.success("OTP sent successfully 🚀");
      setShowOtpField(true);
    } catch (err) {
      toast.error("Error sending OTP ❌");
    } finally {
      setLoadingOtp(false);
    }
  };

  // ================= VERIFY OTP =================
  const handleVerifyOtp = async () => {
    try {
      setVerifyingOtp(true);

      const res = await axios.post(
        "https://zerodha-backend-e1fx.onrender.com/api/auth/verify-otp",
        { phone, otp },
      );

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      // console.log(res.data);

      toast.success("Login successful 🎉");

      // 🔥 CHECK USER TYPE
      if (res.data.isNewUser) {
        setShowNameInput(true); // ask name
      } else {
        window.location.href = `https://zerodha-dashboard-fb5x.onrender.com/?token=${res.data.token}`;
      }
    } catch (err) {
      toast.error("Invalid OTP ❌");
    } finally {
      setVerifyingOtp(false);
    }
  };

  // ================= SAVE NAME =================
  const handleSaveName = async () => {
    try {
      await axios.post(
        "https://zerodha-backend-e1fx.onrender.com/api/auth/save-name",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(`Welcome ${name} 🎉`);

      window.location.href = `https://zerodha-dashboard-fb5x.onrender.com/?token=${token}`;
    } catch (err) {
      toast.error("Error saving name ❌");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <img src="media/images/account_open.svg" alt="dashboard" />
        </div>

        <div className="signup-right">
          <h2>Signup now</h2>
          <p className="sub-text">Or track your existing application</p>

          {/* PHONE */}
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

          {/* GET OTP */}
          <button
            className="get-otp-btn"
            onClick={handleSendOtp}
            disabled={loadingOtp}
          >
            {loadingOtp ? <span className="spinner"></span> : "Get OTP"}
          </button>

          <br />
          <br />

          <button
            className="demo-btn"
            onClick={() => {
              localStorage.setItem("token", "demo-user");

              window.location.href =
                "https://zerodha-dashboard-fb5x.onrender.com/";
            }}
          >
            Try Demo Account 🚀
          </button>

          {/* OTP SECTION */}
          {showOtpField && !showNameInput && (
            <>
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

              <button
                className="otp-btn"
                onClick={handleVerifyOtp}
                disabled={verifyingOtp}
              >
                {verifyingOtp ? (
                  <span className="spinner"></span>
                ) : (
                  "Verify OTP"
                )}
              </button>
            </>
          )}

          {/* NAME INPUT */}
          {showNameInput && (
            <>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="otp-input"
              />

              <br />
              <br />

              <button className="otp-btn" onClick={handleSaveName}>
                Continue
              </button>
            </>
          )}

          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Signup;
