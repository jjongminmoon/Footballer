import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { getMyTeam } from "../../../../hooks/team";
import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";
import PlayerList from "../PlayerList";
import { dbService } from "../../../../service/firebase";
import { UserProps } from "../../../../model/user";

export default function OfferScoutingPage() {
  const { teamData } = getMyTeam();
  const offerScouting = teamData?.scoutList;

  const handleCancel = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (confirm("보낸 스카우트 제의를 취소하시겠습니까?")) {
      updateDoc(playerDocRef, {
        scouted: arrayRemove(teamData.id)
      });

      updateDoc(teamDocRef, {
        scoutList: arrayRemove(player.id)
      });
    }
  };

  return (
    <MypageContainer>
      <MypageTitle>보낸 스카우트 제의</MypageTitle>
      <PlayerList
        data={offerScouting}
        handleFunction1={handleCancel}
        button1="취소"
        noList="아직 스카우트 제의를 하지 않았습니다."
      />
    </MypageContainer>
  );
}
