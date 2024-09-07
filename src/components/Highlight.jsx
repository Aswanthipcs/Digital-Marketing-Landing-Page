import HighlightShape from "../assets/HighlightShape.svg";
import { iconData } from "../utils/constants";
import Button from "./Button";

const HighlightCard = ({ indx, data }) => {
  return (
    <div
      className={`flex flex-col items-center !z-50 bg-highlight-card rounded-tl-[40px] rounded-br-[40px] p-5 md:p-10 w-[300px] md:w-[350px] font-pops text-start text-[#0F110F] space-y-5 shadow-3xl h-[350px] md:h-[400px] ${
        (indx === 1 || indx === 4) && " md:mt-28"
      }`}
    >
      <img src={data?.icon} alt="icon" className="w-16" />
      <h2 className="text-xl font-semibold">{data?.heading}</h2>
      <div className="w-full">
        <p className="text-start text-xs md:text-sm font-medium">
          {data?.duration}
        </p>
      </div>
      <p className="text-sm md:text-base">{data?.description}</p>
    </div>
  );
};

const Highlight = ({onClick}) => {
  return (
    <div className="w-full py-5 md:py-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        Highlights of our courses
      </h2>

      <div className="relative mt-20 overflow-none">
        <div className="relative">
          <img
            src={HighlightShape}
            alt="shape"
            className="hidden md:block w-full absolute top-0"
          />
        </div>

        <div className="flex flex-col max-w-screen-xl mx-auto  !z-50 md:space-y-10 ">
          <div className="overflow-x-auto z-40 -mt-[150px] md:!-mt-[100px] scrollbar-hide">
            <div className="grid grid-cols-3 justify-center items-center place-items-center h-[550px] md:h-[600px] px-5 md:px-10 2xl:px-0 w-[1000px] md:w-[1200px] xl:w-full">
              {iconData.slice(0, 3).map((icon, index) => (
                <HighlightCard key={index} indx={index} data={icon} />
              ))}
            </div>
          </div>
          <div className="overflow-x-auto z-40 !-mt-[150px] scrollbar-hide">
            <div className="grid grid-cols-3 justify-center items-center place-items-center h-[500px] md:h-[600px] px-5 md:px-10 2xl:px-0 w-[1000px] md:w-[1200px] xl:w-full">
              {iconData.slice(3, 6).map((icon, index) => (
                <HighlightCard key={index} indx={index} data={icon} />
              ))}
            </div>
          </div>
        </div>

        <Button
          text="Start Learning"
          onClick={onClick}
          classname="rounded-xl py-2 px-10 border-2 border-darkGrey bg-darkGrey text-white text-2xl font-semibold hover:text-darkGrey  hover:bg-white transition duration-1000 ease-in-out mx-auto !-mt-10 md:!mt-5"
        />
      </div>
    </div>
  );
};

export default Highlight;
