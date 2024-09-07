import React, { useState, useRef } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import GreenSuccess from "../assets/GreenSuccess.svg";
import Success from "../assets/Success.svg";
import BannerBg from "../assets/BannerBg.svg";
import google from "../assets/Google.svg";
import rating from "../assets/review.gif";
import Animated from "../assets/Animated.json";
import Button from "./Button";
import axios from "axios";
import Lottie from "lottie-react";
import Form from "./Form";
import Loading from "./Loading";

const Banner = ({ scrollRef }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    form: "Brochure",
    receivingMail: "seema@ipcsglobal.com",
  });
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bannerRef = useRef(null);
  const imageRef = useRef(null);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
    setData({
      name: "",
      phone: "",
      email: "",
      form: "Brochure",
      receivingMail: "seema@ipcsglobal.com",
    });
    setSuccess(false);
    setErrorMessage("");
  };

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrorMessage("");
  };

  const handleDownload = async (e) => {
    e.preventDefault();

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(data.name)) {
      setErrorMessage("Name should only contain letters and spaces.");
      return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(data.phone)) {
      setErrorMessage(
        "Phone number must be exactly 10 digits and contain no letters."
      );
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      await axios.post("https://backend-campaign.vercel.app/api/send-email2", {
        ...data,
        formname: "DIGITAL MARKETING DOWNLOAD BROCHURE FORM",
        path: window.location.pathname,
      });

      setSuccess(true);

      const link = document.createElement("a");
      link.href = "../assets/DIGITAL MARKETING BROCHURE.pdf";
      link.download = "DIGITAL MARKETING BROCHURE.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error while downloading brochure", error);
      setErrorMessage(
        "There was an error downloading the brochure. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        ref={bannerRef}
        style={{
          "--image-url": `url(http://cms.ipcsglobal.com/wp-content/uploads/2024/09/BannerBgSmall.png)`,
        }}
        className="w-full flex bg-[image:var(--image-url)] md:bg-none mb-4 md:mb-0 bg-cover bg-center text-white/85 font-pops relative"
      >
        <div className="mx-auto max-w-screen-xl w-full px-3 sm:px-7 xl:px-5 py-5 flex flex-col  items-center relative z-40 ">
          <div className="w-full ">
            <img
              src="http://cms.ipcsglobal.com/wp-content/uploads/2024/09/ipcsLogoWhite.png"
              alt="logo"
              className="w-[100px]  md:hidden"
            />
            <img
              src="http://cms.ipcsglobal.com/wp-content/uploads/2024/09/IpcsLogo.png"
              alt="logo"
              className="w-[200px] lg:w-[250px] hidden md:block "
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:space-y-20 items-center text-white md:text-black relative lg:pb-20">
            <div className="w-full md:w-1/2 text-start z-50">
              <div className="text-2xl md:text-3xl xl:text-4xl  font-medium mt-10">
                <h2 className="leading-relaxed">Start your journey in </h2>
                <h1 className="text-4xl font-semibold text-[#FFA800]">
                  Digital Marketing{" "}
                  <span className="text-2xl md:text-3xl xl:text-4xl font-medium text-white md:text-black">
                    Today!!!
                  </span>
                </h1>
              </div>

              <div className=" py-10 px-1 space-y-4 md:space-y-7 text-sm sm:text-lg font-medium">
                <div className="flex gap-2">
                  <img src={GreenSuccess} alt="" />
                  <p>
                    Our course highlights Google Ads, SEO, SMM, SEM, PPC, Email
                    Marketing.
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={GreenSuccess} alt="" />
                  <p>1 to 1 Session with instructors</p>
                </div>
                <div className="flex gap-2">
                  <img src={GreenSuccess} alt="" />
                  <p>Industry experienced trainers</p>
                </div>
                <div className="flex gap-2">
                  <img src={GreenSuccess} alt="" />
                  <p>100% placement assistance</p>
                </div>

                <div className="flex items-center !mt-10 w-full gap-4">
                  <Button
                    text="Download Brochure"
                    onClick={onOpenModal}
                    classname="rounded-xl py-2 px-10 min-w-fit border-2 border-darkGrey bg-darkGrey text-white font-semibold hover:text-darkGrey  hover:bg-white transition duration-1000 ease-in-out mx-auto md:mx-0"
                  />
                  
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center  z-50">
              <Form scrollRef={scrollRef} />
            </div>
          </div>
        </div>
        <div className="w-full hidden md:flex justify-center md:justify-end absolute right-0">
          <img
            ref={imageRef}
            src={BannerBg}
            alt="Background"
            className="object-cover !min-w-[calc(100vw-60%)]"
          />
        </div>
        <Lottie
          animationData={Animated}
          loop={true}
          className="
          absolute 
          right-0 
          top-20 
          md:top-0
          w-[400px]
          md:w-[800px]
          lg:hidden opacity-50"
        />
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <div className="!w-[250px] md:!w-[450px] min-h-[300px] space-y-10 p-2 sm:p-5 md:p-10 rounded-2xl flex flex-col justify-center items-center">
          {success ? (
            <>
              <h1 className="text-xl font-semibold">
                Successfully Downloaded Python Brochure.
              </h1>
              <img src={Success} alt="success" className="w-fit -mr-10" />
            </>
          ) : (
            <>
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <h2 className="text-xl md:text-3xl font-semibold">
                    Download Brochure
                  </h2>
                  <input
                    name="name"
                    placeholder="Name"
                    required
                    value={data.name}
                    className="rounded w-full lg:w-[400px] px-5 py-2.5 outline-none hover:outline-none border"
                    onChange={handleChange}
                  />
                  <input
                    name="phone"
                    placeholder="Phone number"
                    required
                    value={data.phone}
                    className="rounded w-full lg:w-[400px] px-5 py-2.5 outline-none hover:outline-none border"
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    placeholder="Email"
                    required
                    value={data.email}
                    className="rounded w-full lg:w-[400px] px-5 py-2.5 outline-none hover:outline-none border"
                    onChange={handleChange}
                  />
                  {errorMessage && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errorMessage}
                    </p>
                  )}

                  <Button
                    text="Download Brochure"
                    onClick={handleDownload}
                    className="font-semibold text-white border-2  hover:text-[#0078BA] border-[#0078BA] px-10 text-sm md:text-lg py-2 rounded-lg mx-auto font-pops transition duration-1000 bg-[#0078BA] hover:bg-white shadow-2xl "
                  />
                </>
              )}
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Banner;
