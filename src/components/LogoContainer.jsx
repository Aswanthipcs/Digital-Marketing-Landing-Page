import { logoData } from "../utils/constants";

const LogoContainer = () => {
  return (
    <div className="bg-logo-gradient font-pops w-full px-2 py-5 md:py-10 grid grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
      {logoData.map((logo, index) => (
        <img key={index} src={logo} alt="logo" className="mx-auto" />
      ))}
    </div>
  );
};

export default LogoContainer;
