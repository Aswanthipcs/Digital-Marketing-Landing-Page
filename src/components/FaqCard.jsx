import React from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { Collapse } from "react-collapse";

const FaqCard = ({ toggle, title, desc, open }) => {
  return (
    <div className="!w-[90vw] lg:!w-[80%] 2xl:!w-[70%] rounded-xl bg-blue-grad animation hover:cursor-pointer text-black border-2 border-[#0078BA] font-pops">
      <div
        className="text-start flex justify-between px-3 sm:px-10 py-5 w-full"
        onClick={toggle}
      >
        <p className="text-sm md:text-base font-normal">{title}</p>
        <div className="mr-2">
          {open ? (
            <FiMinus className="w-5 h-5 font-bold" />
          ) : (
            <GoPlus className="w-5 h-5 font-bold" />
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="px-5 lg:px-10 pb-5 text-sm text-black/65 text-justify font-medium">
          {desc.split('\n').map((point, index) => (
            <p key={index} className="mb-2">
              {point}
            </p>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default FaqCard;
