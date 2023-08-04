import styled from "@emotion/styled";
import Slider from "react-slick";
import carouselimg1 from "../../../assets/images/캐러셀1.png";
import carouselimg2 from "../../../assets/images/캐러셀2.png";
import carouselimg3 from "../../../assets/images/캐러셀3.png";
import carouselimg4 from "../../../assets/images/캐러셀4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const imageList = [
  { image: carouselimg1, name: "풋볼러 소개 이미지" },
  { image: carouselimg2, name: "팀 등록 이미지" },
  { image: carouselimg3, name: "선수 등록 이미지" },
  { image: carouselimg4, name: "풋볼러컵 이미지" }
];

export default function Carousel() {
  const [slideNumber, setSlideNumber] = useState({
    activeSlide: 0,
    activeSlide2: 0
  });

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) =>
      setSlideNumber({ activeSlide: next, activeSlide2: current })
  };

  return (
    <Container>
      <Div>
        <Slider {...settings}>
          {imageList.map(({ image, name }) => (
            <img key={name} src={image} alt={name} />
          ))}
        </Slider>
        <p>{`${slideNumber.activeSlide + 1} / ${imageList.length}`}</p>
      </Div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 410px;
  background-color: var(--main-light-gray);

  .slick-slider {
    border-radius: 16px;
    padding: 20px;
  }

  img {
    width: 100%;
    height: 370px;
    object-fit: fit;
    border-radius: 16px;
  }
`;

const Div = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;

  p {
    position: absolute;
    bottom: 50px;
    right: 50px;
    padding: 10px 20px;
    background-color: rgba(128, 128, 128, 0.5);
    border-radius: 99px;
    color: white;
  }
`;
