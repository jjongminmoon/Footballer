import styled from "@emotion/styled";
import { getMyMatches } from "../../../../hooks/match";
import { getAllTeam, getMyTeam } from "../../../../hooks/team";
import { MatchProps } from "../../../../model/match";
import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";
import { TeamProps } from "../../../../model/team";

export default function MyMatchPage() {
  const { allTeam } = getAllTeam();
  const { teamData } = getMyTeam();
  const { myMatches } = getMyMatches(teamData?.id);
  const homeTeam = allTeam.find((team: TeamProps) =>
    myMatches.map((match: MatchProps) => match.participation[0]).includes(team.id)
  );
  const awayTeam = allTeam.find((team: TeamProps) =>
    myMatches.map((match: MatchProps) => match.participation[1]).includes(team.id)
  );

  return (
    <MypageContainer>
      <MypageTitle>매치 정보</MypageTitle>
      <List>
        {myMatches?.length > 0 ? (
          <Row>
            <Versus>
              <Team>
                <Logo>
                  <img src={homeTeam?.logo} alt={`${homeTeam?.name} 팀 로고 이미지`} />
                </Logo>
                <Name>{homeTeam?.name}</Name>
              </Team>
              <p>vs</p>
              <Team>
                <Logo>
                  <img src={awayTeam?.logo} alt={`${awayTeam?.name} 팀 로고 이미지`} />
                </Logo>
                <Name>{awayTeam?.name}</Name>
              </Team>
            </Versus>
          </Row>
        ) : (
          <Row>
            <p className="no-list">아직 진행한 매치가 없습니다.</p>
          </Row>
        )}
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
  padding: 10px;

  :last-child {
    border-bottom: none;
  }
`;

const Versus = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--main-light-gray);
  border-radius: 10px;
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
