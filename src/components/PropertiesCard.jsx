import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const PropertiesCard = ({ data }) => {
  const number = parseInt(data.count.replace(/,/g, ""), 10);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="w-full lg:w-1/3 p-4 md:p-8 rounded-lg bg-[#0171AF] text-white text-2xl font-semibold space-y-4 font-pops"
    >
      <h1 className="text-5xl text-[#FFA800] font-bold">
        {inView && (
          <CountUp
            start={0}
            end={number}
            duration={2.5}
            separator=","
            suffix="+"
          />
        )}
      </h1>
      <p className="text-xl font-medium">{data.text}</p>
    </div>
  );
};

export default PropertiesCard;
