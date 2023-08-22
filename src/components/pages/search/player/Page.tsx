import styled from "@emotion/styled";
import PlayerSearchCriteria from "./PlayerSearchCriteria";
import ResultItem from "./ResultItem";
import { getAllUser, getUser } from "../../../../hooks/user";
import { UserProps } from "../../../../model/user";
import { useState } from "react";

export default function PlayerSearchPage() {
  const { userData } = getUser();
  const { allUser: playerList } = getAllUser();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  return (
    <>
      <PlayerSearchCriteria
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
      />
      <Container>
        {playerList
          .filter((player: UserProps) => player.name !== userData?.name)
          .filter((player: UserProps) => player.region.includes(selectedRegion))
          .filter((player: UserProps) => player.position.includes(selectedPosition))
          .map((player: UserProps) => (
            <ResultItem player={player} />
          ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 750px;
  border: 1px solid var(--main-gray);
  overflow: scroll;
`;
