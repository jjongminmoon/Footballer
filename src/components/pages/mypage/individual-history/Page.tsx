import { getUser } from "../../../../hooks/user";
import HistoryList from "../HistoryList";
import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";

export default function IndividualHistoryPage() {
  const { userData } = getUser();

  return (
    <MypageContainer>
      <MypageTitle>팀 히스토리</MypageTitle>
      <HistoryList data={userData?.history.reverse()} />
    </MypageContainer>
  );
}
