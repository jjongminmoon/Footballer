import { getAllUser } from "../../../../hooks/user";
import { UserProps } from "../../../../model/user";
import SearchResult from "./SearchResult";

export default function PlayerSearchPage() {
  const { allUser: playerList } = getAllUser();

  return (
    <>
      {playerList.map((player: UserProps) => (
        <SearchResult player={player} />
      ))}
    </>
  );
}
