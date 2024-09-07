import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import Success from "../assets/Success.svg";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import Loading from "./Loading";

const Whatsapp = () => {
  const [open, setOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [data, setData] = useState({
    name: "",
    phone: "",
    receivingMail: "seema@ipcsglobal.com",
  });

  const onOpenModal = (type) => {
    setRedirectTo(type);
    setOpen(true);
    setSuccess(false);
    setErrorMessage("");
  };

  const onCloseModal = () => {
    setOpen(false);
    setRedirectTo(null);
    setSuccess(false);
    setErrorMessage("");
    setData({
      name: "",
      phone: "",
      receivingMail: "seema@ipcsglobal.com",
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Name validation (only letters and spaces allowed)
    if (!/^[a-zA-Z\s]+$/.test(data.name)) {
      setErrorMessage("Name should only contain letters and spaces.");
      return;
    }

    // Phone number validation (exactly 10 digits)
    if (!/^\d{10}$/.test(data.phone)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      await axios.post("https://backend-campaign.vercel.app/api/send-email2", {
        ...data,
        formname:
          redirectTo === "Whatsapp"
            ? "DIGITAL MARKETING Whatsapp Enquiry FORM"
            : "DIGITAL MARKETING Phone Enquiry FORM",
        form: redirectTo,
        path: window.location.pathname,
      });

      setSuccess(true);

      if (redirectTo === "Whatsapp") {
        const phoneNumber = "+919946116664";
        const whatsappLink = "https://wa.me/" + phoneNumber;
        window.location.href = whatsappLink;
      } else if (redirectTo === "Phone") {
        const phoneNumber = "+919946116664";
        window.location.href = "tel:" + phoneNumber;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Stop loading
      setData({
        name: "",
        phone: "",
        receivingMail: "seema@ipcsglobal.com",
      });
    }
  };

  return (
    <>
      <span className="text-white flex gap-3 px-2 py-2 text-2xl border-2 border-white bg-green-600 absolute -bottom-12 md:-bottom-5 right-5 md:right-5 items-center rounded-full !z-50 font-pops">
        <button
          onClick={() => onOpenModal("Whatsapp")}
          className="flex items-center gap-2 p-1"
        >
          <p className="text-base font-bold hidden md:block">WhatsApp</p>
          <SiWhatsapp className="w-5 md:w-7 h-5 md:h-7 " />
        </button>
      </span>
      <span className="text-white flex gap-3 px-2 py-2 text-2xl border-2 border-[#014265] bg-white absolute bottom-1 md:bottom-12 right-5 md:right-5 items-center rounded-full !z-50">
        <button
          onClick={() => onOpenModal("Phone")}
          className="flex items-center gap-2 p-1"
        >
          <p className="text-base font-bold text-[#014265] hidden md:block">
            Contact Us
          </p>
          <FaPhone className="w-5 md:w-7 h-5 md:h-7 text-[#014265]" />
        </button>
      </span>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <div className="w-[250px] sm:w-[300px] md:w-[450px] min-h-[400px] space-y-10 p-2 sm:p-5 md:p-10 rounded-2xl flex flex-col justify-center items-center">
          {success ? (
            <>
              <h1 className="text-xl font-semibold">
                Successfully Submitted the Form.
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
                    {redirectTo === "Whatsapp"
                      ? "WhatsApp Enquiry"
                      : "Phone Enquiry"}
                  </h2>
                  <input
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    required
                    className="rounded w-full lg:w-[400px] px-5 py-2.5 outline-none hover:outline-none border"
                    onChange={handleChange}
                  />
                  <input
                    name="phone"
                    placeholder="Phone number"
                    value={data.phone}
                    required
                    className="rounded w-full lg:w-[400px] px-5 py-2.5 outline-none hover:outline-none border"
                    onChange={handleChange}
                  />
                  {errorMessage && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    onClick={handleClick}
                    className="font-semibold text-white border-2 hover:text-[#0078BA] border-[#0078BA] px-10 text-base md:text-lg py-2 rounded-lg mx-auto font-pops transition duration-1000 bg-[#0078BA] hover:bg-white shadow-2xl"
                  >
                    Submit
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Whatsapp;
