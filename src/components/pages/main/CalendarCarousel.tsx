import styled from "@emotion/styled";
import Slider from "react-slick";
import { SetStateAction } from "react";
import { getDay } from "../../../util/dateAndDay";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  dateArr: string[];
  selectedDate: string;
  setSelectedDate: React.Dispatch<SetStateAction<string>>;
};

export default function CalendarCarousel({ dateArr, selectedDate, setSelectedDate }: Props) {
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
            color={getDay(date) === "토요일" ? "blue" : getDay(date) === "일요일" ? "red" : "black"}
            backgroundColor={selectedDate === date ? "var(--main-gray)" : ""}
            onClick={() => setSelectedDate(date)}
          >
            <p>{date.slice(-5)}</p>
            <Day>{getDay(date)}</Day>
          </Item>
        ))}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 50px;
  margin-top: 10px;

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
  font-size: 13px;
  text-align: center;
  padding: 10px 20px;
  border: 1px solid var(--main-gray);
  border-radius: 999px;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};

  :hover {
    background-color: var(--main-gray);
  }
`;

const Day = styled.p`
  margin-top: 5px;
  font-size: 10px;
`;
