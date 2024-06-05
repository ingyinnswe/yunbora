import React from "react";
import { useState } from "react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/navigation";
import character1 from "./assets/3d-cartoon-portrait-working-woman-celebration-labour-day.png";
import character2 from "./assets/asian-girl-street-photography.png";
import character3 from "./assets/modern-asian-girl-photography.png";
import character4 from "./assets/portrait-woman-representing-aquarius-zodiac-sign.png";

const Slider = () => {
  const images = [character1, character2, character3, character4];
  const paginationTexts = ["Office Wear", "Street Look", "Casual", "Dress"];
  const descriptionTexts = ["Office wear varies from formal suits and ties to casual jeans and tops, depending on the workplace, with styles ranging from business formal to business casual and casual attire.", "Street look features trendy, casual outfits like graphic tees, ripped jeans, sneakers, and statement accessories, blending comfort with urban style, often influenced by current fashion trends and pop culture.", "Casual wear emphasizes comfort and relaxation, featuring items like jeans, t-shirts, sweaters, and sneakers. It's versatile for everyday activities, reflecting a laid-back and effortless style suitable for various occasions.", "A dress is a one-piece garment for women, available in various styles and lengths, from casual sundresses to formal evening gowns, offering versatility for different occasions and personal expressions."];
  const [currentPaginationText, setCurrentPaginationText] = useState(
    paginationTexts[0]
  );
  const [currentDescriptionText, setCurrentDescriptionText] = useState(
    descriptionTexts[0]
  );
  return (
    <section className=" mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-36 z-10">
      <div className="text-white text-center font-extrabold text-4xl my-8">
        Gift
      </div>
      <Swiper
        modules={[Autoplay, A11y, Navigation]}
        spaceBetween={30} // Adjust the spacing as needed
        slidesPerView={1} // Show only one slide by default
        navigation
        onSlideChange={(swiper) =>
          setCurrentPaginationText(paginationTexts[swiper.activeIndex])
        }
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <a href="/#">
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className="w-fit h-[400px] mx-auto select-none pb-5"
              />
              <div className="text-center">
                <p className="text-indigo-300">You have 1/10</p>
                <p className="font-bold text-xl text-white">
                    {currentPaginationText}
                </p>
                <p className="text-white">
                 {descriptionTexts[index]}
                </p>
                {/* <div className="text-white text-2xl bg-gradient-to-r from-indigo-500 py-2 my-2 rounded">
                  {currentPaginationText}
                  
                </div> */}
                <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
                  Purchase
                </button>
              </div>
              
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
