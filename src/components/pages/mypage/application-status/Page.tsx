import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";
import TeamList from "../TeamList";
import { getAllTeam } from "../../../../hooks/team";
import { getUser } from "../../../../hooks/user";
import { TeamProps } from "../../../../model/team";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../../service/firebase";

export default function ApplicationStatusPage() {
  const { userData } = getUser();
  const { allTeam } = getAllTeam();
  const applyTeam = allTeam.find((team: TeamProps) => userData?.apply.includes(team.id));

  const handleCancel = () => {
    const playerDocRef = doc(dbService, "user", userData.id);
    const teamDocRef = doc(dbService, "team", applyTeam.id);

    if (confirm("입단 신청을 취소/삭제 하시겠습니까?")) {
      updateDoc(playerDocRef, {
        apply: arrayRemove(applyTeam.id),
        history: arrayUnion(`${applyTeam.name} 팀의 입단 신청을 취소/삭제했습니다.`)
      });

      updateDoc(teamDocRef, {
        applicationList: arrayRemove(userData.id),
        history: arrayUnion(`${userData.name} 선수가 입단 신청을 취소/삭제했습니다.`)
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
      <TeamList
        data={applyTeam}
        handleFunction1={handleCancel}
        button1="대기중 (삭제)"
        noList="아직 입단 신청한 팀이 없습니다. 팀을 찾아 입단 신청해보세요."
      />
    </MypageContainer>
  );
}
