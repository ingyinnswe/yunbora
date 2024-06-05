import { useState } from "react";
import character from "./assets/3d-cartoon-portrait-working-woman-celebration-labour-day.png";
import "./App.css";
import "./styles.css";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import Slider from "./Slider";

function App() {
  return (
    <>
      <div className="h-screen bg-indigo-950 pt-3">
        <Slider/>
     
      </div>
    </>
  );
}

export default App;
