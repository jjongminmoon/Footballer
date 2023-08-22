import styled from "@emotion/styled";
import { MatchProps } from "../../../../model/match";
import { getDay } from "../../../../util/dateAndDay";

type Props = {
  match: MatchProps;
};

export default function MatchInfo({ match }: Props) {
  return (
    <Wrapper>
      <Info>
        <p>
          {match?.date} ({getDay(match?.date)}) 20:00
        </p>
        <Name>{match?.field.id}</Name>
        <p>{match?.field.address}</p>
      </Info>
      <Price>80,000원 / 2시간</Price>
      <Button>매치 참가 ({match?.participation.length}/2)</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 10px;
  padding: 20px;
  margin-top: 40px;
  background-color: white;
  border-radius: 10px;
  min-width: 400px;
  height: 204px;
`;

const Info = styled.div`
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 13px;
  margin-bottom: 5px;
`;

const Name = styled.h1`
  margin-top: 10px;
  font-weight: bold;
`;

const Button = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: var(--main-red);
  color: white;
  padding: 5px;
  font-size: 13px;
`;
