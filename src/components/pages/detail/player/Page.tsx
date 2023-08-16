import styled from "@emotion/styled";
import CommonTitle from "../../../ui/Title";
import PlayerScoring from "./PlayerScoring";
import Profile from "./Profile";
import { getAllUser } from "../../../../hooks/user";
import { useParams } from "react-router-dom";
import { UserProps } from "../../../../model/user";

export default function PlayerDetailPage() {
  const { allUser } = getAllUser();
  const { id } = useParams();
  const player = allUser.find((user: UserProps) => user.number === Number(id));

  return (
    <section>
      <Container>
        <CommonTitle>{player?.name} 님의 프로필</CommonTitle>
        <Profile player={player}>
          <PlayerScoring title="실력" collection="user" dataId={player?.id} />
          <PlayerScoring title="매너" collection="user" dataId={player?.id} />
        </Profile>
      </Container>
    </section>
  );
}

const Container = styled.div`
  padding: 20px 30px 30px 30px;
  margin-top: 20px;
  background-color: var(--main-light-gray);
  border-radius: 10px;
`;
