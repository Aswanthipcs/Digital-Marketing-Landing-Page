import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StarRating from "../assets/StarRating.svg";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2, // Scroll 2 slides by default
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller laptops
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Small devices
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
          initialSlide: 0, // Start from the first slide
        },
      },
      {
        breakpoint: 480, // Extra small devices
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-full max-w-[calc(100vw-20px)]  md:max-w-[calc(100vw-100px)] lg:max-w-[calc(100vw-40px)] xl:max-w-[calc(100vw-20px)] font-pops  2xl:max-w-screen-xl">
      <Slider {...settings} className=" bg-inherit">
        {data.map((d) => (
          <div key={d.name} className="text-iconBlack">
            <div className="border rounded-xl m-3 2xl:mx-5 p-5 shadow-md !min-h-[450px] xl:min-h-[400px] bg-white relative">
              <div className="flex justify-center items-center rounded-t-xl">
                <img
                  src={d.img}
                  alt=""
                  className=" rounded-full w-[60px] h-[60px]"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4 relative">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-sm">{d.position}</p>
                <p className="text-center">{d.review}</p>
              </div>
              <div className="absolute bottom-6 ml-5">
                <img src={StarRating} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const data = [
  {
    name: `Zoya Zainab`,
    img: "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/ZoyaZainab.png",
    position: "SEO Analysts",
    review: `I recently completed my Digital marketing course from IPCS Global. The trainers are really good and friendly. They provide one on one training. I recommend it to others.`,
  },

  {
    name: `Rahul Ravi`,
    img: "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/RahulRavi.png",
    position: "SEO Analysts",
    review: `I attended digital marketing course in IPCS Global, the course has significantly enhanced my professional skills and knowledge in the field. Whether you are just starting out or looking to enhance your existing knowledge.`,
  },
  {
    name: `Veena Prakash`,
    img: "http://cms.ipcsglobal.com/wp-content/uploads/2024/09/VeenaPrakash.png",
    position: "Dm Executive",
    review: `I attended digital marketing course in IPCS Global, the course has significantly enhanced my professional skills and knowledge in the field. Whether you are just starting out or looking to enhance your existing knowledge.`,
  },
];

export default Review;
