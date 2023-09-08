import CommonTitle from "../../../ui/Title";
import TeamInfo from "./TeamInfo";
import TeamScoring from "./TeamScoring";
import DetailContainer from "../DetailContainer";
import { useParams } from "react-router-dom";
import { getAllTeam } from "../../../../hooks/team";
import { TeamProps } from "../../../../model/team";

export default function TeamDetailPage() {
  const { allTeam } = getAllTeam();
  const { id } = useParams();
  const team = allTeam.find((team: TeamProps) => team.number === Number(id));

  return (
    <DetailContainer>
      <CommonTitle>{team?.name} 팀 정보</CommonTitle>
      <TeamInfo team={team}>
        <TeamScoring title="실력" collection="team" dataId={team?.id} />
        <TeamScoring title="매너" collection="team" dataId={team?.id} />
      </TeamInfo>
    </DetailContainer>
  );
}
