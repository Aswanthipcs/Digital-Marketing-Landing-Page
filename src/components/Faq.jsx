import { useState } from "react";

import { faqs } from "../utils/constants.js";
import FaqCard from "./FaqCard";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="w-full flex flex-col items-center my-5 md:mb-20 md:mt-10 font-pops">
      <h2 className="my-5 text-4xl font-bold">FAQ</h2>
      <div className="!w-full  flex flex-col justify-center items-center gap-10  pt-5 md:rounded-2xl ">
        <div className="flex flex-col md:flex-row">
          <div className="space-y-5 w-full  flex flex-col justify-center items-center">
            {faqs?.map((data, index) => {
              return (
                <FaqCard
                  key={index}
                  open={open === index}
                  title={data.title}
                  desc={data.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
