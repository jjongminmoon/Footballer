import styled from "@emotion/styled";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: string[];
};

export default function FieldImageCarousel({ images }: Props) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        {images &&
          images.map((image) => (
            <Image key={image}>
              <img src={image} alt="구장 이미지" />
            </Image>
          ))}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Image = styled.div`
  width: 100%;
  height: 450px;

  img {
    width: 100%;
    height: 100%;
  }
`;
