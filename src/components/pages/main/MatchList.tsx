import styled from "@emotion/styled";
import CalendarCarousel from "./CalendarCarousel";
import RegisterMatch from "./RegisterMatch";
import getAllMatches from "../../../hooks/match";
import RegionSelect from "./RegionSelect";
import { getTwoWeeksDates } from "../../../util/dateAndDay";
import { useState } from "react";
import { MatchProps } from "../../../model/match";
import { Link } from "react-router-dom";

export default function MatchList() {
  const { allMatch } = getAllMatches();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const twoWeeksLater = new Date().setDate(new Date().getDate() + 14);
  const dateArr = getTwoWeeksDates(new Date(), twoWeeksLater);
  const selectedDateMatches = allMatch.filter((match: MatchProps) => match.date === selectedDate);

  return (
    <>
      <CalendarCarousel
        dateArr={dateArr}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <ActionBar>
        <RegionSelect selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        <RegisterMatch dateArr={dateArr} />
      </ActionBar>
      <Container>
        {selectedDateMatches.length > 0 ? (
          selectedDateMatches
            .filter((data: MatchProps) => data.field.region.includes(selectedRegion))
            .map((data: MatchProps) => (
              <Link to={`/detail/match/${data.id}`} key={data.id}>
                <Row>
                  <Time>20:00</Time>
                  <Name>{data.field.id}</Name>
                  <Rule>{data.rule}</Rule>
                  <Participation>
                    <p>{data.participation.length}/2</p>
                    <Button>매치 참가</Button>
                  </Participation>
                </Row>
              </Link>
            ))
        ) : (
          <Row>아직 등록된 경기가 없습니다.</Row>
        )}
      </Container>
    </>
  );
}

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Container = styled.div`
  height: 100%;
  min-height: 400px;
  border-top: 1px solid var(--main-gray);
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

  &:hover {
    background-color: var(--main-light-gray);
  }
`;

const Time = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

const Name = styled.p`
  padding-bottom: 2px;
`;

const Rule = styled.p`
  padding: 5px 10px;
  margin-bottom: 1px;
  background-color: var(--main-button);
  font-size: 10px;
  color: white;
  border-radius: 999px;
`;

const Participation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  font-size: 13px;
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
