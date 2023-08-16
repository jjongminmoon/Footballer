import { getAllTeam } from "../../../../hooks/team";
import { TeamProps } from "../../../../model/team";
import SearchResult from "./SearchResult";

export default function TeamSearchPage() {
  const { allTeam: teamList } = getAllTeam();

  return (
    <>
      {teamList.map((team: TeamProps) => (
        <SearchResult team={team} />
      ))}
    </>
  );
}
