import styled from "@emotion/styled";
import { TeamProps } from "../../../../model/team";
import { getTeamLevelScore, getTeamMannerScore } from "../../../../hooks/scoring";

type Props = {
  team: TeamProps;
  children: React.ReactNode;
};

export default function TeamInfo({ team, children }: Props) {
  const levelScore = getTeamLevelScore(team);
  const mannerScore = getTeamMannerScore(team);

  return (
    <Wrapper>
      <Image>
        <img src={team?.logo} alt={`${team?.name}팀의 로고 이미지`} />
      </Image>
      <Info>
        <p>● 팀명 : {team?.name}</p>
        <p>● 구단주 : {team?.owner.name}</p>
        <p>● 활동 지역 : {team?.region}</p>
        <p>● 팀 인원 : {team?.member.length}</p>
        <p>● 월 회비 : {team?.fee}</p>
        <p>● 팀원 모집 : {team?.status ? "O" : "X"}</p>
        <p>● 실력 점수 : {levelScore}점</p>
        <p className="last-info">● 매너 점수 : {mannerScore}점</p>
        {children}
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

const Image = styled.div`
  width: 300px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Info = styled.div`
  .last-info {
    margin-bottom: 65px;
  }
`;
