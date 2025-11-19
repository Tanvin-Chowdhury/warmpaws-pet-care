import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSlider.css";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="hero-swiper "
    >
      <SwiperSlide>
        <div className="slide-content slide-1">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-bottom-8">
            keep Your Pets Warm <br /> & Cozy
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mt-8 text-[#484b4e]">
            Professional winter care services for your beloved companions
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content slide-3">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-bottom-8">
            Trusted by Pet <br /> Parents
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mt-8 text-[#484b4e]">
            Join thousands of happy pets staying warm this winter
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content slide-2">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-bottom-8 ">
            Winter Wellness for <br /> Every Pet
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mt-8 text-[#484b4e]">
            Expert care to keep them healthy and happy all season
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content slide-4">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-bottom-8">
            Your Pet’s Comfort <br /> Comes First
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mt-8 text-[#484b4e]">
            Expert winter grooming, clothing, and wellness services
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
