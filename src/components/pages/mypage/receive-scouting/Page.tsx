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
  const scouted: string[] = userData?.scouted;
  const receiveScoutingList = allTeam.filter((team: TeamProps) => scouted.includes(team.id));

  const handleApproval = (team: TeamProps, teamId: string, teamName: string) => {
    const playerDocRef = doc(dbService, "user", userData.id);
    const teamDocRef = doc(dbService, "team", teamId);

    if (confirm("스카우트 제의를 승인하시겠습니까?")) {
      if (userData?.team === "무소속") {
        updateDoc(playerDocRef, {
          team: teamName,
          scouted: arrayRemove(team)
        });

        updateDoc(teamDocRef, {
          scoutList: [],
          member: arrayUnion(userData?.id)
        })
          .then(() => alert("스카우트 제의가 승인되었습니다."))
          .catch((e) => alert(e));
      } else {
        return;
      }
    }
  };

  const handleRefusal = (team: TeamProps, teamId: string) => {
    const playerDocRef = doc(dbService, "user", userData.id);
    const teamDocRef = doc(dbService, "team", teamId);

    if (confirm("스카우트 제의를 거절 하시겠습니까?")) {
      updateDoc(playerDocRef, {
        scouted: arrayRemove(team)
      });

      updateDoc(teamDocRef, {
        scoutList: []
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
