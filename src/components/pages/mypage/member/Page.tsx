import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";
import PlayerList from "../PlayerList";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getMyTeam } from "../../../../hooks/team";
import { UserProps } from "../../../../model/user";
import { dbService } from "../../../../service/firebase";
import { getAllUser, getUser } from "../../../../hooks/user";

export default function MemberPage() {
  const { allUser } = getAllUser();
  const { userData } = getUser();
  const { teamData } = getMyTeam();
  const memberId: string[] = teamData?.member;
  const memberList = allUser.filter((user: UserProps) => memberId?.includes(user.id));

  const handleRelease = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (confirm("선수를 방출하시겠습니까?")) {
      if (teamData.owner.name === userData.name) {
        updateDoc(playerDocRef, {
          team: arrayUnion("무소속"),
          history: arrayUnion(`${teamData.name} 팀에서 방출되었습니다.`)
        });

        updateDoc(teamDocRef, {
          member: arrayRemove(player.id),
          history: arrayUnion(`${player.name} 선수가 팀에서 방출되었습니다.`)
        })
          .then(() => alert("선수가 방출되었습니다."))
          .catch((e) => alert(e));
      } else {
        alert("방출 권한은 구단주에게만 있습니다.");
      }
    } else {
      return;
    }
  };

  return (
    <MypageContainer>
      <MypageTitle>팀원 정보</MypageTitle>
      <PlayerList
        data={memberList}
        handleFunction1={handleRelease}
        button1="방출"
        noList="아직 소속팀이 없습니다. 팀을 찾아 입단 신청을 해보세요."
      />
    </MypageContainer>
  );
}
