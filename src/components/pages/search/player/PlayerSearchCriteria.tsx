import styled from "@emotion/styled";
import RegionSelect from "../../main/RegionSelect";
import PositionSelect from "./PositionSelect";
import { SetStateAction } from "react";

type Props = {
  selectedRegion: string;
  selectedPosition: string;
  setSelectedRegion: React.Dispatch<SetStateAction<string>>;
  setSelectedPosition: React.Dispatch<SetStateAction<string>>;
};

export default function PlayerSearchCriteria({
  selectedRegion,
  selectedPosition,
  setSelectedRegion,
  setSelectedPosition
}: Props) {
  return (
    <Criteria>
      <RegionSelect selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      <PositionSelect
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
      />
    </Criteria>
  );
}

const Criteria = styled.div`
  display: flex;
  margin: 10px 0;
`;
