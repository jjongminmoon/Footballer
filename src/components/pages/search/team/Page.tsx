import styled from "@emotion/styled";
import TeamSearchCriteria from "./TeamSearchCriteria";
import ResultItem from "./ResultItem";
import { getAllTeam } from "../../../../hooks/team";
import { TeamProps } from "../../../../model/team";
import { useState } from "react";
import { getUser } from "../../../../hooks/user";

export default function TeamSearchPage() {
  const { userData } = getUser();
  const { allTeam } = getAllTeam();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(true);

  return (
    <>
      <TeamSearchCriteria
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <Container>
        {allTeam
          .filter((team: TeamProps) => team.name !== userData?.team)
          .filter((team: TeamProps) => team.region.includes(selectedRegion))
          .filter((team: TeamProps) => team.status === selectedStatus)
          .map((team: TeamProps, index: number) => (
            <ResultItem key={index} team={team} />
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
