import React from "react";
import { Carousel } from "antd";
import slide1 from '../../../images/slide1.jpg'
import slide2 from '../../../images/slide2.jpg'
import slide3 from '../../../images/slide3.png'
import slide4 from '../../../images/slide4.jpg'

export default function index() {
  return (
    <div className="slider__main">
      <Carousel autoplay>
        <img className="slide__carousel" src={slide1.src} alt="" />
        <img className="slide__carousel" src={slide2.src} alt="" />
        <img className="slide__carousel" src={slide3.src} alt="" />
        <img className="slide__carousel" src={slide4.src} alt="" />
      </Carousel>
    </div>
  );
}
