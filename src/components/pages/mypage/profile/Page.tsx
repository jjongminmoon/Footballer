import styled from "@emotion/styled";
import MypageContainer from "../MypageContainer";
import ModifyRegion from "./ModifyRegion";
import ModifyPosition from "./ModifyPosition";
import MypageTitle from "../MypageTitle";
import { useState } from "react";
import { getUser } from "../../../../hooks/user";
import { getPlayerLevelScore, getPlayerMannerScore } from "../../../../hooks/scoring";

export default function ProfilePage() {
  const { userData } = getUser();
  const [openModifyRegion, setOpenModifyRegion] = useState(false);
  const [openModifyPosition, setOpenModifyPosition] = useState(false);
  const team = userData?.team[userData?.team.length - 1];
  const levelScore = getPlayerLevelScore(userData);
  const mannerScore = getPlayerMannerScore(userData);

  const infoList = [
    { title: "생년월일", data: userData?.birth },
    { title: "실력 점수", data: levelScore },
    { title: "매너 점수", data: mannerScore },
    { title: "소속 팀", data: team }
  ];

  return (
    <>
      <MypageContainer>
        <MypageTitle>선수 프로필</MypageTitle>
        <LoginInfo>
          {infoList.map(({ title, data }) => (
            <Row key={title}>
              <span>{title}</span>
              <div>{data}</div>
            </Row>
          ))}
          <Row>
            <span>지역</span>
            <div>{userData?.region}</div>
            <Button onClick={() => setOpenModifyRegion(true)}>수정</Button>
          </Row>
          <Row>
            <span>포지션</span>
            <div>{userData?.position}</div>
            <Button onClick={() => setOpenModifyPosition(true)}>수정</Button>
          </Row>
        </LoginInfo>
      </MypageContainer>

      {openModifyRegion && <ModifyRegion setOpenModifyRegion={setOpenModifyRegion} />}
      {openModifyPosition && <ModifyPosition setOpenModifyPosition={setOpenModifyPosition} />}
    </>
  );
}

const LoginInfo = styled.div`
  margin-top: 30px;
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

const Button = styled.button`
  width: 50px;
  height: 20px;
  padding-top: 3px;
  margin-bottom: 2px;
  border: none;
  border-radius: 8px;
  background-color: var(--main-button);
  color: white;
`;
