import GreenTick from "../assets/GreenTick.svg";
import Form from "./Form";

const FormContainer = ({ scrollRef }) => {
  return (
    <div className="max-w-screen-xl w-full px-3 sm:px-7 xl:px-5 py-5 md:py-20 font-pops">
      <p className="my-4 text-justify md:text-start px-3 text-sm md:text-xl lg:text-2xl font-semibold py-2 md:hidden">
        Get a peek through the entire curriculum designed that ensures 100% Job
        Placement Support
      </p>
      <div className="w-full flex flex-col-reverse lg:flex-row  items-center gap-5">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="my-4 text-justify md:text-start px-3 text-sm md:text-xl lg:text-2xl font-semibold hidden md:block">
            Get a peek through the entire curriculum designed that ensures 100%
            Job Placement Support
          </p>
          <div className="py-4 md:py-7 px-1 md:px-3 space-y-3 md:space-y-5 xl:space-y-7 text-sm sm:text-base">
            <div className="flex gap-4 items-center">
              <img src={GreenTick} alt="" className="scale-75" />
              <p className="text-sm md:text-lg font-medium text-start">
                Dedicated Placement Cell Support
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={GreenTick} alt="" className="scale-75" />
              <p className="text-sm md:text-lg font-medium text-start">
                Industry Experienced Trainers
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={GreenTick} alt="" className="scale-75" />
              <p className="text-sm md:text-lg font-medium text-start">
                International and domestic certification
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={GreenTick} alt="" className="scale-75" />
              <p className="text-sm md:text-lg font-medium text-start">
                World Class Training Lab
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={GreenTick} alt="" className="scale-75" />
              <p className="text-sm md:text-lg font-medium text-start">
                100% placement assistance
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="http://cms.ipcsglobal.com/wp-content/uploads/2024/09/BannerRightImg.png"
            alt="BannerRight"
            className=" -top-10 lg:right-2 xl:right-10 2xl:right-0  lg:block !z-0"
          />
        </div>
        {/* <div className="w-full md:w-1/2 flex items-center justify-center  z-50">
          <Form
            scrollRef={scrollRef}
          />
        </div> */}
      </div>
    </div>
  );
};

export default FormContainer;
