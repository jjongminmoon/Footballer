import { getMyTeam } from "../../../../hooks/team";
import HistoryList from "../HistoryList";
import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";

export default function TeamHistoryPage() {
  const { teamData } = getMyTeam();

  return (
    <MypageContainer>
      <MypageTitle>팀 히스토리</MypageTitle>
      <HistoryList data={teamData?.history.reverse()} />
    </MypageContainer>
  );
}
