import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getMyTeam } from "../../../../hooks/team";
import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";
import PlayerList from "../PlayerList";
import { dbService } from "../../../../service/firebase";
import { UserProps } from "../../../../model/user";
import { getAllUser, getUser } from "../../../../hooks/user";

export default function OfferScoutingPage() {
  const { allUser } = getAllUser();
  const { userData } = getUser();
  const { teamData } = getMyTeam();
  const offerScoutingArr = teamData?.scoutList;
  const offerScoutingList = allUser.filter((user: UserProps) =>
    offerScoutingArr?.includes(user.id)
  );

  const handleCancel = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (teamData.owner.name === userData.id) {
      if (confirm("보낸 스카우트 제의를 취소하시겠습니까?")) {
        updateDoc(playerDocRef, {
          scouted: arrayRemove(teamData.id),
          history: arrayUnion(`${teamData.name} 팀에서 스카우트 제의를 취소했습니다.`)
        });

        updateDoc(teamDocRef, {
          scoutList: arrayRemove(player.id),
          history: arrayUnion(`${userData.name} 선수에게 보낸 스카우트 제의를 취소했습니다.`)
        });
      }
    } else {
      alert("스카우트 제의 취소 권한은 구단주에게만 있습니다.");
    }
  };

  return (
    <MypageContainer>
      <MypageTitle>보낸 스카우트 제의</MypageTitle>
      <PlayerList
        data={offerScoutingList}
        handleFunction1={handleCancel}
        button1="취소"
        noList="아직 스카우트 제의를 하지 않았습니다."
      />
    </MypageContainer>
  );
}
