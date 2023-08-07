import styled from "@emotion/styled";
import MypageContainer from "../../../ui/MypageContainer";
import { getMyTeam } from "../../../../hooks/team";

export default function TeamPage() {
  const { teamData } = getMyTeam();
  const skillScore = teamData?.goodTeam;
  const mannerScore = teamData?.manner;

  const infoList = [
    { title: "팀명", data: teamData?.name },
    { title: "구단주", data: teamData?.owner },
    { title: "활동지역", data: teamData?.region },
    { title: "회비", data: `${teamData?.fee}만원` },
    { title: "팀 인원", data: `${teamData?.member.length}명` },
    { title: "팀 실력", data: skillScore },
    { title: "팀 매너", data: mannerScore }
  ];

  return (
    <MypageContainer>
      <Title>팀 정보</Title>
      <TeamInfo>
        <Image>
          <img src={teamData?.logo} alt="팀 로고 이미지" />
        </Image>
        <div>
          {infoList.map(({ title, data }) => (
            <Row key={title}>
              <span>{title}</span>
              <div>{data}</div>
            </Row>
          ))}
          <Row>
            <span>팀원 모집 여부</span>
            <div>{teamData?.status ? "O" : "X"}</div>
          </Row>
        </div>
      </TeamInfo>
    </MypageContainer>
  );
}

const Title = styled.h1`
  font-size: 26px;
  padding-bottom: 20px;
  margin-top: 30px;
  border-bottom: 2px solid black;
`;

const TeamInfo = styled.div`
  display: flex;
  gap: 40px;
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  padding: 10px;
  border: 3px solid var(--main-gray);

  img {
    width: 100%;
    height: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  span {
    width: 150px;
    font-weight: bold;
  }
`;
