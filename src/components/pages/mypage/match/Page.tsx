import styled from "@emotion/styled";
import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";
import { getMyMatches } from "../../../../hooks/match";
import { getMyTeam } from "../../../../hooks/team";
import { MatchProps } from "../../../../model/match";

export default function MyMatchPage() {
  const { teamData } = getMyTeam();
  const { myMatches } = getMyMatches(teamData?.id);

  return (
    <MypageContainer>
      <MypageTitle>매치 정보</MypageTitle>
      <List>
        {myMatches.map((match: MatchProps) => (
          <Row key={match.id}>
            <Time>
              <p className="date">{match.date}</p>
              <p>20:00</p>
            </Time>
            <Versus>
              <Team>
                <Logo>
                  <img
                    src={match.participation[0].logo}
                    alt={`${match.participation[0].name} 팀 로고 이미지`}
                  />
                </Logo>
                <Name>{match.participation[0].name}</Name>
              </Team>
              <p>vs</p>
              <Team>
                <Logo>
                  <img
                    src={match.participation[1].logo}
                    alt={`${match.participation[1].name} 팀 로고 이미지`}
                  />
                </Logo>
                <Name>{match.participation[1].name}</Name>
              </Team>
            </Versus>
            <Info>
              <p>매치 홈팀 : {match.participation[0].name}</p>
              <p>구장 : {match.field.id}</p>
              <p>지역 : {match.field.region}</p>
              <p>방식 : {match.rule}</p>
            </Info>
            <Status
              backgroundColor={
                match.date > new Date().toISOString().split("T")[0]
                  ? "var(--main-red)"
                  : "var(--main-button)"
              }
            >
              {match.date > new Date().toISOString().split("T")[0] ? "매치 종료" : "매치 예정"}
            </Status>
          </Row>
        ))}
      </List>
    </MypageContainer>
  );
}

const List = styled.div`
  margin-top: 20px;
  border: 1px solid var(--main-gray);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  border-bottom: 1px solid var(--main-gray);
  padding: 10px 20px;

  :last-child {
    border-bottom: none;
  }
`;

const Time = styled.div`
  text-align: center;

  .date {
    margin-bottom: 10px;
  }
`;

const Versus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 250px;
  padding: 10px;
  margin-left: 10px;
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 999px;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
    border-radius: 999px;
  }
`;

const Name = styled.p`
  font-size: 13px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  height: 100%;
  font-size: 13px;
  padding: 10px;
  background-color: var(--main-light-gray);
  border-radius: 10px;

  p {
    font-size: 11px;
  }
`;

const Status = styled.div<{ backgroundColor: string }>`
  padding: 5px 15px;
  margin-left: auto;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 14px;
`;
