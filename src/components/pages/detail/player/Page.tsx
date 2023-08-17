import CommonTitle from "../../../ui/Title";
import PlayerScoring from "./PlayerScoring";
import Profile from "./Profile";
import { getAllUser } from "../../../../hooks/user";
import { useParams } from "react-router-dom";
import { UserProps } from "../../../../model/user";
import DetailContainer from "../DetailContainer";

export default function PlayerDetailPage() {
  const { allUser } = getAllUser();
  const { id } = useParams();
  const player = allUser.find((user: UserProps) => user.number === Number(id));

  return (
    <DetailContainer>
      <CommonTitle>{player?.name} 님의 프로필</CommonTitle>
      <Profile player={player}>
        <PlayerScoring title="실력" collection="user" dataId={player?.id} />
        <PlayerScoring title="매너" collection="user" dataId={player?.id} />
      </Profile>
    </DetailContainer>
  );
}
