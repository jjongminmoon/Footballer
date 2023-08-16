import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { getAllTeam } from "../../../../hooks/team";
import { TeamProps } from "../../../../model/team";
import CommonTitle from "../../../ui/Title";
import Profile from "./Profile";
import TeamScoring from "./TeamScoring";

export default function TeamDetailPage() {
  const { allTeam } = getAllTeam();
  const { id } = useParams();
  const team = allTeam.find((team: TeamProps) => team.number === Number(id));

  return (
    <section>
      <Container>
        <CommonTitle>{team?.name} 팀 정보</CommonTitle>
        <Profile team={team}>
          <TeamScoring title="실력" collection="team" dataId={team?.id} />
          <TeamScoring title="매너" collection="team" dataId={team?.id} />
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
