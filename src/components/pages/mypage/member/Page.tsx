import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { getMyTeam } from "../../../../hooks/team";
import { UserProps } from "../../../../model/user";
import MypageContainer from "../../../ui/MypageContainer";
import PlayerList from "../PlayerList";
import { dbService } from "../../../../service/firebase";
import { getUser } from "../../../../hooks/user";

export default function MemberPage() {
  const { userData } = getUser();
  const { teamData } = getMyTeam();
  const memberList = teamData?.member;

  const handleRelease = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (teamData.owner.name === userData.name) {
      if (confirm("선수를 방출하시겠습니까?")) {
        updateDoc(playerDocRef, {
          team: "무소속",
          apply: arrayRemove()
        });

        updateDoc(teamDocRef, {
          member: arrayRemove(player)
        })
          .then(() => alert("선수가 방출되었습니다."))
          .catch((e) => alert(e));
      } else {
        return;
      }
    } else {
      alert("방출 권한은 구단주에게만 있습니다.");
      return;
    }
  };

  return (
    <MypageContainer>
      <h1>팀원 정보</h1>
      <PlayerList
        data={memberList}
        handleFunction1={handleRelease}
        button1="방출"
        noList="아직 소속팀이 없습니다. 팀을 찾아 입단 신청을 해보세요."
      />
    </MypageContainer>
  );
}
