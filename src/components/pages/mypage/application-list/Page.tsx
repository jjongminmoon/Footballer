import { getMyTeam } from "../../../../hooks/team";
import { UserProps } from "../../../../model/user";
import MypageContainer from "../../../ui/MypageContainer";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../../service/firebase";
import PlayerList from "../PlayerList";
import { getUser } from "../../../../hooks/user";

export default function ApplicationListPage() {
  const { userData } = getUser();
  const { teamData } = getMyTeam();
  const applicationList = teamData?.applicationList;

  const handleApproval = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (teamData.owner.name === userData.name) {
      updateDoc(playerDocRef, {
        apply: { id: teamData.id, status: "입단 완료" },
        team: teamData.name
      });

      updateDoc(teamDocRef, {
        applicationList: arrayRemove(player),
        member: arrayUnion(player)
      })
        .then(() => alert("입단 승인되었습니다."))
        .catch((e) => alert(e));
    } else {
      alert("입단 승인/거절 권한은 구단주에게만 있습니다.");
      return;
    }
  };

  const handleRefusal = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (teamData.owner.name === userData.name) {
      if (confirm("입단 거절 하시겠습니까?")) {
        updateDoc(playerDocRef, {
          apply: { id: teamData.id, status: "입단 거절" }
        });

        updateDoc(teamDocRef, {
          applicationList: arrayRemove(player)
        })
          .then(() => alert("입단 거절되었습니다."))
          .catch((e) => alert(e));
      } else {
        return;
      }
    } else {
      alert("입단 승인/거절 권한은 구단주에게만 있습니다.");
      return;
    }
  };

  return (
    <MypageContainer>
      <h1>입단 신청 리스트</h1>
      <PlayerList
        data={applicationList}
        handleFunction1={handleApproval}
        handleFunction2={handleRefusal}
        button1="입단 승인"
        button2="입단 거절"
        noList="아직 입단 신청이 없습니다."
      />
    </MypageContainer>
  );
}
