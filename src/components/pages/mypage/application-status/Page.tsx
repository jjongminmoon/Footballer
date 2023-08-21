import styled from "@emotion/styled";
import { getAllTeam } from "../../../../hooks/team";
import { getUser } from "../../../../hooks/user";
import { TeamProps } from "../../../../model/team";
import MypageContainer from "../MypageContainer";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../../service/firebase";
import { UserProps } from "../../../../model/user";
import MypageTitle from "../MypageTitle";

export default function ApplicationStatusPage() {
  const { userData } = getUser();
  const { allTeam } = getAllTeam();
  const applyTeam: TeamProps = allTeam.find((team: TeamProps) => team.id === userData.apply?.id);
  const removePlayer = applyTeam?.applicationList.find(
    (player: UserProps) => player.id === userData.id
  );

  const handleRemove = () => {
    const playerDocRef = doc(dbService, "user", userData.id);
    const teamDocRef = doc(dbService, "team", applyTeam.id);

    if (confirm("입단 신청을 취소/삭제 하시겠습니까?")) {
      updateDoc(playerDocRef, {
        apply: null
      });

      updateDoc(teamDocRef, {
        applicationList: arrayRemove(removePlayer)
      })
        .then(() => alert("입단 신청이 취소/삭제 되었습니다."))
        .catch((e) => alert(e));
    } else {
      return;
    }
  };

  return (
    <MypageContainer>
      <MypageTitle>내가 입단 신청한 팀</MypageTitle>
      {applyTeam ? (
        <Row>
          <Image>
            <Logo src={applyTeam.logo} alt={`${applyTeam.name} 팀 로고 이미지`} />
          </Image>
          <Name>{applyTeam.name}</Name>
          <Info>
            <p>구단주 : {applyTeam.owner.name}</p>
            <p>활동 지역 : {applyTeam.region}</p>
            <p>월 회비 : {applyTeam.fee}만원</p>
            <p>팀원 모집 여부 : {applyTeam.status ? "O" : "X"}</p>
            <p>팀 인원 : {applyTeam.member.length}명</p>
          </Info>
          <Button onClick={handleRemove}>{userData.apply.status} (삭제)</Button>
        </Row>
      ) : (
        <Row>
          <p>아직 입단 신청한 팀이 없습니다. 팀을 찾아 입단 신청 해보세요.</p>
        </Row>
      )}
    </MypageContainer>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  border: 1px solid var(--main-gray);
  margin-top: 20px;
  padding: 10px;
`;

const Image = styled.div`
  height: 100px;
  margin: 0 10px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid var(--main-gray);
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  font-size: 13px;
  padding: 10px;
  background-color: var(--main-light-gray);
  border-radius: 10px;
  margin-left: auto;
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--main-button);
  color: white;
  margin-left: auto;
  margin-right: 20px;
`;
