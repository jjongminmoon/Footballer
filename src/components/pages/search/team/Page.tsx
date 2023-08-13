import styled from "@emotion/styled";
import { getAllTeam } from "../../../../hooks/team";
import { TeamProps } from "../../../../model/team";
import { dbService } from "../../../../service/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getUser } from "../../../../hooks/user";
import { useNavigate } from "react-router-dom";

export default function TeamSearchPage() {
  const { allTeam: teamList } = getAllTeam();
  const { userData } = getUser();
  const navigate = useNavigate();

  const applyToJoin = (teamId: string) => {
    const playerDocRef = doc(dbService, "user", userData?.id);
    const teamDocRef = doc(dbService, "team", teamId);
    updateDoc(teamDocRef, {
      applicationList: arrayUnion(userData)
    });
    updateDoc(playerDocRef, {
      apply: { id: teamId, status: "대기중" }
    })
      .then(() => alert("입단 신청 완료되었습니다. 해당 팀에서 승인 시 소속팀이 변경됩니다."))
      .catch((e) => alert(e));

    navigate("/mypage/application-status");
  };

  return (
    <>
      {teamList.map((team: TeamProps) => (
        <Row key={team.id}>
          <Image>
            <Logo src={team.logo} alt={`${team.name}팀 로고 이미지`} />
          </Image>
          <Name>{team.name}</Name>
          <Info>
            <p>구단주 : {team.owner.name}</p>
            <p>활동 지역 : {team.region}</p>
            <p>월 회비 : {team.fee}만원</p>
            <p>팀원 모집 여부 : {team.status ? "O" : "X"}</p>
            <p>팀 인원 : {team.member.length}명</p>
          </Info>
          <Score>
            <p>실력 점수 : {team.goodTeam}점</p>
            <p>매너 점수 : {team.manner}점</p>
          </Score>
          <Button
            backgroundColor={team.status ? "var(--main-button)" : "var(--main-red)"}
            disabled={team.status ? false : true}
            onClick={() => applyToJoin(team.id)}
          >
            {team.status ? "입단 신청" : "입단 불가"}
          </Button>
        </Row>
      ))}
    </>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  border-bottom: 1px solid var(--main-gray);
  padding: 10px;
`;

const Image = styled.div`
  border: 1px solid var(--main-gray);
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px;
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

const Score = styled.div`
  padding: 5px;
  border-radius: 10px;
  font-size: 13px;
  background-color: var(--main-light-gray);
`;

const Button = styled.button<{ backgroundColor: string }>`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  margin-left: auto;
  margin-right: 20px;
`;
