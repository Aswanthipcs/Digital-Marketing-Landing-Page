import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "./Button";
import axios from "axios";
import Success from "../assets/Success.svg";
import Loading from "./Loading";

const Form = ({ scrollRef }) => {
  const [info1, setInfo1] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    form: "Register",
    receivingMail: "seema@ipcsglobal.com",
  });
  const [success, setSuccess] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo1({
      ...info1,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(info1.name)) {
      setErrorMessage("Name can only contain alphabets and spaces.");
      setLoading(false); // Stop loading
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(info1.email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false); // Stop loading
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(info1.phone)) {
      setErrorMessage(
        "Phone number must be exactly 10 digits and contain no characters."
      );
      setLoading(false); // Stop loading
      return;
    }

    localStorage.setItem("formData", JSON.stringify(info1));

    try {
      await axios.post(
        "https://backend-campaign.vercel.app/api/request-otp",
        // "http://localhost:5000/api/request-otp",
        {
          phone: info1.phone,
        }
      );
      setErrorMessage("");
      setOtpSent(true);
    } catch (error) {
      console.error("Error while sending OTP", error);
      setErrorMessage("Error while sending OTP");
    } finally {
      setLoading(false); // Set loading to false after the request is done
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const otpRegex = /^\d{6}$/;
    if (!otpRegex.test(otp)) {
      setErrorMessage(
        "OTP must be a 6-digit number and contain no characters."
      );
      setLoading(false); // Stop loading
      return;
    }

    try {
      await axios.post(
        "https://backend-campaign.vercel.app/api/verify-otp",
        // "http://localhost:5000/api/verify-otp",
        {
          otp,
          ...info1,
          formname: "DIGITAL MARKETING REGISTER FORM",
          path: window.location.pathname,
          // path: "/digitalmarketing/trivandrum/",
        }
      );
      setSuccess(true);
      setOtpSent(false);
      setOtp("");
      setInfo1({
        name: "",
        phone: "",
        email: "",
        qualification: "",
        form: "Register",
        receivingMail: "seema@ipcsglobal.com",
      });
    } catch (error) {
      console.error("Error while verifying OTP", error);
      setErrorMessage("Invalid OTP, please try again.");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  const handleResendOtp = async () => {
    setLoading(true); // Start loading
    try {
      await axios.post(
        "https://backend-campaign.vercel.app/api/resend-otp",
        // "http://localhost:5000/api/request-otp",
        {
          phone: info1.phone,
        }
      );
      setErrorMessage("");
      setOtp("");
    } catch (error) {
      console.error("Error while resending OTP", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full min-h-[300px] md:min-h-[450px] xl:min-h-[400px] flex justify-center md:justify-end font-pops">
      <div className="px-7 rounded-md py-5 text-white border md:rounded-lg overflow-hidden w-full lg:w-fit shadow-2xl min-w-[250px] md:min-w-[350px] lg:min-w-[450px] bg-form-gradient font-pops md:-mt-20">
        {loading ? (
          <Loading />
        ) : !success ? (
          <>
            {!otpSent ? (
              <form
                className="flex flex-col justify-center items-center space-y-7 xl:space-y-8 md:space-y-10 w-full lg:w-fit xl:py-8 2xl:!h-fit text-gray-500 "
                onSubmit={handleSubmit}
              >
                <div ref={scrollRef}>
                  <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-white">
                    Register Now
                  </h2>
                </div>
                <input
                  name="name"
                  value={info1.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="rounded w-full lg:w-[400px] px-5 py-2 outline-none hover:outline-none"
                />
                <input
                  name="phone"
                  value={info1.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="rounded w-full lg:w-[400px] px-5 py-2 outline-none hover:outline-none"
                />
                <input
                  name="email"
                  id="form"
                  value={info1.email}
                  required
                  onChange={handleChange}
                  placeholder="Email"
                  className="rounded w-full lg:w-[400px] px-5 py-2 outline-none hover:outline-none"
                />
                <input
                  name="qualification"
                  value={info1.qualification}
                  required
                  onChange={handleChange}
                  placeholder="Your Qualification"
                  className="rounded w-full lg:w-[400px] px-5 py-2 outline-none hover:outline-none"
                />
                {errorMessage && (
                  <p className="text-red-500 text-sm font-semibold">
                    {errorMessage}
                  </p>
                )}
                <Button
                  text="Submit"
                  type="submit"
                  className="font-semibold text-white px-10 text-base md:text-lg py-1 w-2/3 rounded-lg mx-auto font-pops bg-[#005685] border-[#8ECBFB] hover:bg-white border-2 hover:text-[#005685] shadow-2xl "
                />
              </form>
            ) : (
              <form
                className="flex flex-col justify-center items-center w-full h-full text-center space-y-10"
                onSubmit={handleVerifyOtp}
              >
                <p className="text-white">
                  OTP has been sent to your mobile number.
                </p>
                <div className="space-y-2">
                  <input
                    name="otp"
                    placeholder="Enter OTP"
                    value={otp}
                    required
                    onChange={(e) => setOtp(e.target.value)}
                    className="rounded w-full lg:w-[200px] px-5 py-2 outline-none hover:outline-none text-black"
                  />
                  {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}
                </div>
                <Button
                  text="Verify OTP"
                  type="submit"
                  className="font-semibold text-white px-4 text-sm py-1 rounded-lg mx-auto font-pops bg-[#8ECBFB] border-[#8ECBFB] hover:bg-transparent border-2 hover:text-[#8ECBFB] shadow-2xl "
                />
                {errorMessage && (
                  <p
                    onClick={handleResendOtp}
                    className="text-white cursor-pointer underline hover:text-darkOrange"
                  >
                    Resend OTP
                  </p>
                )}
              </form>
            )}
          </>
        ) : (
          <div className="text-center flex flex-col justify-center items-center py-20 gap-10 md:!max-w-[400px] h-full relative">
            <IoIosCloseCircleOutline
              className="absolute top-5 right-3 scale-150 hover:cursor-pointer fill-white"
              onClick={() => setSuccess(false)}
            />
            <h2 className="text-white px-2 text-lg md:text-xl lg:text-2xl">
              Registered Successfully.
            </h2>
            <img src={Success} alt="success" className="w-fit -mr-10" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
