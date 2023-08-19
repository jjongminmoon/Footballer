import styled from "@emotion/styled";
import Slider from "react-slick";
import { SetStateAction } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  dateArr: string[];
  dayArr: string[];
  selectedDate: string;
  setSelectedDate: React.Dispatch<SetStateAction<string>>;
};

export default function CalendarCarousel({
  dateArr,
  dayArr,
  selectedDate,
  setSelectedDate
}: Props) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        {dateArr?.map((date, index) => (
          <Item
            key={index}
            color={dayArr[index] === "Sat" ? "blue" : dayArr[index] === "Sun" ? "red" : "black"}
            backgroundColor={selectedDate === date ? "var(--main-gray)" : ""}
            onClick={() => setSelectedDate(date)}
          >
            <p>{date.slice(-2)}</p>
            <Day>{dayArr[index]}</Day>
          </Item>
        ))}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 50px;

  .slick-track {
    display: flex;
    padding: 10px 0;
    margin-left: 5px;
  }

  .slick-slide {
    margin-right: 10px;
  }

  .slick-prev:before {
    color: var(--main-red);
  }

  .slick-next:before {
    color: var(--main-red);
  }
`;

const Item = styled.div<{ color: string; backgroundColor: string }>`
  text-align: center;
  padding: 10px 20px;
  border: 1px solid var(--main-gray);
  border-radius: 999px;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;

const Day = styled.p`
  margin-top: 5px;
  font-size: 10px;
`;
