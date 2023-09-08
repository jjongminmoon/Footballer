import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";
import HistoryList from "../HistoryList";
import { getUser } from "../../../../hooks/user";

export default function IndividualHistoryPage() {
  const { userData } = getUser();

  return (
    <MypageContainer>
      <MypageTitle>개인 히스토리</MypageTitle>
      <HistoryList data={userData?.history.reverse()} />
    </MypageContainer>
  );
}
