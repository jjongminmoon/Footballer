import { getMyTeam } from "../../../../hooks/team";
import { UserProps } from "../../../../model/user";
import MypageContainer from "../MypageContainer";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../../service/firebase";
import PlayerList from "../PlayerList";
import { getAllUser, getUser } from "../../../../hooks/user";
import MypageTitle from "../MypageTitle";

export default function ApplicationListPage() {
  const { allUser } = getAllUser();
  const { userData } = getUser();
  const { teamData } = getMyTeam();
  const applicationArr = teamData?.applicationList;
  const applicationList = allUser.filter((user: UserProps) => applicationArr.includes(user.id));

  const handleApproval = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (teamData.owner.name === userData.name) {
      if (confirm(`${player.name} 선수의 입단 신청을 승인하시겠습니까?`)) {
        updateDoc(playerDocRef, {
          apply: arrayRemove(teamData.id),
          team: arrayUnion(teamData.name),
          history: arrayUnion(`${teamData.name} 팀에서 입단을 승인했습니다.`)
        });

        updateDoc(teamDocRef, {
          applicationList: arrayRemove(player.id),
          member: arrayUnion(player.id),
          history: arrayUnion(`${player.name} 선수의 입단을 승인했습니다.`)
        })
          .then(() => alert("입단 승인되었습니다."))
          .catch((e) => alert(e));
      } else {
        return;
      }
    } else {
      alert("입단 승인/거절 권한은 구단주에게만 있습니다.");
      return;
    }
  };

  const handleRefusal = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (teamData.owner.name === userData.name) {
      if (confirm(`${player.name} 선수의 입단 신청을 거절 하시겠습니까?`)) {
        updateDoc(playerDocRef, {
          apply: arrayRemove(teamData.id)
        });

        updateDoc(teamDocRef, {
          applicationList: arrayRemove(player.id)
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
      <MypageTitle>입단 신청 리스트</MypageTitle>
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
