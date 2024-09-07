import React from "react";
import Review from "./Review";

const ReviewSection = () => {
  return (
    <div className="py-5 w-full font-pops">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:!leading-loose">
        Read the experiences of our students
      </h2>
      <p className="text-sm md:text-lg mt-3 md:mt-0">Molding minds for a better future for all</p>
      <div className="bg-review-bg w-full py-10 mt-10">
        <Review />
      </div>
    </div>
  );
};

export default ReviewSection;
