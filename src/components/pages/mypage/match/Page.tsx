import getAllMatches from "../../../../hooks/match";
import { getMyTeam } from "../../../../hooks/team";
import { MatchProps } from "../../../../model/match";
import MypageContainer from "../MypageContainer";
import MypageTitle from "../MypageTitle";

export default function MyMatchPage() {
  const { allMatch } = getAllMatches();
  const { teamData } = getMyTeam();
  const myMatches = allMatch.filter((match: MatchProps) =>
    match.participation.includes(teamData?.id)
  );

  return (
    <MypageContainer>
      <MypageTitle>매치 정보</MypageTitle>
    </MypageContainer>
  );
}
