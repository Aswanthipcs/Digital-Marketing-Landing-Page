import { useRef } from "react";
import {
  Banner,
  Whatsapp,
  PropertiesCard,
  Footer,
  FormContainer,
  LogoContainer,
  HighLight,
  ReviewSection,
  Tools,
  Faq,
} from "./components";

import { propertiesData } from "./utils/constants";

const BottomSectionLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-grow">{children}</div>
      <div className="fixed bottom-14 left-0 right-0 bg-white flex justify-center !z-50">
        <Whatsapp />
      </div>
    </div>
  );
};

const App = () => {
  const scrollRef = useRef();

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BottomSectionLayout>
      <div className="w-full flex flex-col items-center justify-center text-center">
        <Banner scrollRef={scrollRef} />
        <div className="w-full max-w-screen-xl gap-5 xl:gap-20 flex flex-col lg:flex-row !px-5 md:!px-20 lg:!px-0 z-50">
          {propertiesData.map((data, index) => (
            <PropertiesCard key={index} data={data} />
          ))}
        </div>
        <FormContainer scrollRef={scrollRef} />
        <LogoContainer />
        <HighLight onClick={handleScroll} />
        <ReviewSection />
        <Tools />
        <Faq />
        <Footer />
      </div>
    </BottomSectionLayout>
  );
};

export default App;
