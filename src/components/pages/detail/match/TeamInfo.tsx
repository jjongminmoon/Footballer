import styled from "@emotion/styled";
import { TeamProps } from "../../../../model/team";
import { FaQuestion } from "react-icons/fa";
import { getAllTeam } from "../../../../hooks/team";

type Props = {
  teams: string[];
};

export default function TeamInfo({ teams }: Props) {
  const { allTeam } = getAllTeam();
  const homeTeam = allTeam.find((team: TeamProps) => team.id === teams[0]);
  const awayTeam = allTeam.find((team: TeamProps) => team.id === teams[1]);

  return (
    <Wrapper>
      <SubTitle>매치</SubTitle>
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
            {awayTeam ? (
              <img src={awayTeam?.logo} alt={`${awayTeam?.name} 팀 로고 이미지`} />
            ) : (
              <FaQuestion />
            )}
          </Logo>
          <Name>{awayTeam?.name ? awayTeam?.name : "미정"}</Name>
        </Team>
      </Versus>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  min-width: 400px;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
`;

const Versus = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: var(--main-light-gray);
  border-radius: 10px;
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 999px;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    border-radius: 999px;
  }

  svg {
    font-size: 20px;
  }
`;

const Name = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;
