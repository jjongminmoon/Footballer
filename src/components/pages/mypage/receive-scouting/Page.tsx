import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getUser } from "../../../../hooks/user";
import { dbService } from "../../../../service/firebase";
import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";
import TeamList from "../TeamList";
import { TeamProps } from "../../../../model/team";
import { getAllTeam } from "../../../../hooks/team";

export default function ReceiveScoutingPage() {
  const { userData } = getUser();
  const { allTeam } = getAllTeam();
  const scouted = userData?.scouted;
  const receiveScoutingList = allTeam.filter((team: TeamProps) => scouted.includes(team.id));

  const handleApproval = (team: TeamProps, teamId: string, teamName: string) => {
    const playerDocRef = doc(dbService, "user", userData.id);
    const teamDocRef = doc(dbService, "team", teamId);

    if (confirm("스카우트 제의를 승인하시겠습니까?")) {
      if (userData?.team[userData?.team.length - 1] === "무소속") {
        updateDoc(playerDocRef, {
          team: arrayUnion(teamName),
          scouted: arrayRemove(team.id)
        });

        updateDoc(teamDocRef, {
          scoutList: arrayRemove(userData?.id),
          member: arrayUnion(userData?.id)
        })
          .then(() => alert("스카우트 제의가 승인되었습니다."))
          .catch((e) => alert(e));
      } else {
        alert("소속팀이 있어 스카우트 제의를 승인할 수 없습니다.");
        return;
      }
    } else {
      return;
    }
  };

  const handleRefusal = (team: TeamProps, teamId: string) => {
    const playerDocRef = doc(dbService, "user", userData.id);
    const teamDocRef = doc(dbService, "team", teamId);

    if (confirm("스카우트 제의를 거절 하시겠습니까?")) {
      updateDoc(playerDocRef, {
        scouted: arrayRemove(teamId),
        history: arrayUnion(`${team.name} 팀의 스카우트 제의를 거절했습니다.`)
      });

      updateDoc(teamDocRef, {
        scoutList: arrayRemove(userData?.id),
        history: arrayUnion(`${userData?.name} 선수가 스카우트 제의를 거절했습니다.`)
      })
        .then(() => alert("스카우트 제의가 거절되었습니다."))
        .catch((e) => alert(e));
    } else {
      return;
    }
  };

  return (
    <MypageContainer>
      <MypageTitle>받은 스카우트 제의</MypageTitle>
      <TeamList
        data={receiveScoutingList}
        handleFunction1={handleApproval}
        handleFunction2={handleRefusal}
        button1="승인"
        button2="거절"
        noList="아직 스카우트 제의가 없습니다."
      />
    </MypageContainer>
  );
}
