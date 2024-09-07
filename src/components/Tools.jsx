import LogoSlider from "./LogoSlider";

const Tools = () => {
  return (
    <div className="bg-[#E4E7E9] w-full flex flex-col pb-5 font-pops">
      <h2 className="text-3xl font-semibold py-4 md:py-10">Tools used</h2>
      <div className="gap-5 hidden xl:flex justify-center">
        {tools.map((tool, index) => (
          <img src={tool} alt="tool" key={index} className="w-48" />
        ))}
      </div>

      <div className="flex w-full justify-center">
        <LogoSlider logos={tools} />
      </div>
    </div>
  );
};

export default Tools;


const tools = [
  "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/tool1.png",
  "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/tool2.png",
  "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/tool3.png",
  "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/tool4.png",
  "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/tool5.png",
  "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/tool6.png",
];
