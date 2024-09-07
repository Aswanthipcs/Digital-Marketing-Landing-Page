import Lottie from "lottie-react";
import Loading1 from "../assets/Loading.json";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie animationData={Loading1} loop={true} className="max-w-[300px]" />
    </div>
  );
};

export default Loading;
