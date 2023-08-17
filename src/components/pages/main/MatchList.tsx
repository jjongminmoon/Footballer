import styled from "@emotion/styled";
import { getTwoWeeksDates, getTwoWeeksDay } from "../../../util/getDates";
import CalendarCarousel from "./CalendarCarousel";
import { useState } from "react";
import { getAllField } from "../../../hooks/field";
import registerMatch, { getMatches } from "../../../hooks/match";
import { FieldProps } from "../../../model/field";

export default function MatchList() {
  const { allField } = getAllField();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const twoWeeksLater = new Date().setDate(new Date().getDate() + 14);
  const dateArr = getTwoWeeksDates(new Date(), twoWeeksLater);
  const dayArr = getTwoWeeksDay(new Date(), twoWeeksLater);
  const { matches } = getMatches(selectedDate);
  const matchesOnSelectedDate = matches?.matches;

  const handleRegisterMatch = () => {
    selectedDate
      ? registerMatch(selectedDate, allField).then(() =>
          alert(`${selectedDate} 날짜의 매치를 등록했습니다.`)
        )
      : alert("날짜를 선택 후 매치를 등록해주세요.");
  };

  return (
    <>
      <CalendarCarousel
        dateArr={dateArr}
        dayArr={dayArr}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AdminButton onClick={handleRegisterMatch}>매치 등록</AdminButton>
      <Container>
        {matchesOnSelectedDate ? (
          matchesOnSelectedDate.map((data: FieldProps) => (
            <Row key={data.number}>
              <Time>20:00</Time>
              <Name>{data.id}</Name>
              <Parking>{data.parking ? "주차가능" : "주차불가"}</Parking>
              <div className="action">
                <p>{data.match.length}/2 </p>
                <Button>매치 참가</Button>
              </div>
            </Row>
          ))
        ) : (
          <Row>아직 등록된 경기가 없습니다.</Row>
        )}
      </Container>
    </>
  );
}

const AdminButton = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid var(--main-gray);
  border-radius: 8px;
  background-color: white;
  margin: 10px 0;
`;

const Container = styled.div`
  border: 2px solid var(--main-gray);
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100px;
  padding: 30px 20px;
  font-size: 16px;
  border-bottom: 1px solid var(--main-gray);

  .action {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
    font-size: 11px;
  }

  :last-child {
    border-bottom: none;
  }
`;

const Time = styled.p`
  font-size: 12px;
`;

const Name = styled.p`
  padding-bottom: 2px;
`;

const Parking = styled.p`
  padding: 5px 10px;
  margin-bottom: 1px;
  background-color: var(--main-button);
  font-size: 12px;
  color: white;
  border-radius: 999px;
`;

const Button = styled.p`
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: var(--main-red);
  color: white;
  padding: 5px;
  font-size: 13px;
`;
