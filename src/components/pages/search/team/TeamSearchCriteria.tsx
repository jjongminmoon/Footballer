import styled from "@emotion/styled";
import RegionSelect from "../../main/RegionSelect";
import { SetStateAction } from "react";

type Props = {
  selectedRegion: string;
  selectedStatus: boolean;
  setSelectedRegion: React.Dispatch<SetStateAction<string>>;
  setSelectedStatus: React.Dispatch<SetStateAction<boolean>>;
};

export default function TeamSearchCriteria({
  selectedRegion,
  selectedStatus,
  setSelectedRegion,
  setSelectedStatus
}: Props) {
  return (
    <Criteria>
      <RegionSelect selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      <StatusSelect
        onClick={() => setSelectedStatus(!selectedStatus)}
        color={selectedStatus ? "var(--main-red)" : "var(--main-gray)"}
        borderColor={selectedStatus ? "var(--main-red)" : "var(--main-gray)"}
      >
        멤버 모집중
      </StatusSelect>
    </Criteria>
  );
}

const Criteria = styled.div`
  display: flex;
  margin: 10px 0;
`;

const StatusSelect = styled.button<{ color: string; borderColor: string }>`
  width: 100px;
  height: 40px;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 8px;
  background-color: white;
  margin: 10px 0;
  margin-left: 10px;
  font-weight: bold;
`;
