'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image src="/alaska-cute1.jpg" alt="meo meo" width={700} height={300} priority/>
      </div>
      <div>
        <Image src="/meo-cute1.jpg" alt="meo meo" width={700} height={300} priority/>
      </div>
      <div>
        <Image src="/golden-cute1.jpg" alt="meo meo" width={700} height={300} priority/>  
      </div>
      <div>
        <Image src="/ngaotaytang-cute1.jpg" alt="meo meo" width={700} height={300} priority/>
      </div>
      <div>
        <Image src="/meo-cute1.jpg" alt="meo meo" width={700} height={300} priority/> 
      </div>
      <div>
        <Image src="/meo-cute1.jpg" alt="meo meo" width={700} height={300} priority/>
      </div>
    </Slider>
  );
}
