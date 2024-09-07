import { locations } from "../utils/constants";
import LocationDropdown from "./MenuDropdown";

const Footer = () => {
  const array1 = [];
  const array2 = [];
  const array3 = [];

  Object.entries(locations).forEach(([key, value], index) => {
    const item = { [key]: value };
    if (index < 4) {
      array1.push(item);
    } else if (index < 8) {
      array2.push(item);
    } else {
      array3.push(item);
    }
  });

  return (
    <div className="w-full flex justify-center bg-footer-bg px-5 lg:px-10 xl:px-20 font-pops py-5 md:py-10 text-black min-h-[400px] xl:min-h-[420px]">
      <div className="max-w-screen-xl w-full flex flex-col gap-10 lg:gap-14">
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="w-full md:w-7/12 flex flex-col gap-7 xl:border-r-2 border-black">
            <h1 className="text-2xl font-medium text-center md:text-start">
              Our Locations
            </h1>
            <div className="flex flex-col lg:flex-row gap-5 text-black">
              <div className="w-full md:w-1/3 flex flex-col space-y-3 xl:space-y-5">
                {array1.map((group, index) => (
                  <LocationDropdown key={index} data={group} />
                ))}
              </div>
              <div className="w-full md:w-1/3 flex flex-col space-y-3 xl:space-y-5">
                {array2.map((group, index) => (
                  <LocationDropdown key={index} data={group} />
                ))}
              </div>
              <div className="w-full md:w-1/3 flex flex-col space-y-3 xl:space-y-5">
                {array3.map((group, index) => (
                  <LocationDropdown key={index} data={group} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex justify-evenly">
            <div className="w-fit flex flex-col justify-center gap-5">
              <img
                src="http://cms.ipcsglobal.com/wp-content/uploads/2024/09/IpcsLogo.png"
                alt="ipcs"
                className="w-fit mx-auto"
              />
              <div className="text-center font-light text-sm sm:text-md md:text-lg">
                <p>3rd Floor</p>
                <p>Rema Plaza</p>
                <p>SS Kovil Road, Thampanoor</p>
                <p>Opp. Railway Station</p>
                <p>Thiruvananthapuram, Kerala - 695001</p>
                <p>seema@ipcsglobal.com</p>
                <p>+91 9946116664</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly font-light gap-2 text-xs md:text-sm">
          <p>Powered by IPCS Global</p>
          <p>Copyright © 2024 IPCS Global</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
