import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { regionList } from "./registerData";

type Props = {
  region: string;
  setRegion: React.Dispatch<SetStateAction<string>>;
};

export default function RegionSelect({ region, setRegion }: Props) {
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <Container>
      <h3>활동 지역</h3>
      <Input type="text" value={region} onClick={() => setOpenSelect(true)} readOnly />
      {openSelect && (
        <Select className="region">
          {regionList.map(({ name, value }) => (
            <Region
              key={value}
              onClick={() => {
                setRegion(name);
                setOpenSelect(false);
              }}
            >
              {name}
            </Region>
          ))}
        </Select>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 2px solid var(--main-gray);
  border-radius: 8px;
  padding: 0 10px;
`;

const Select = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 300px;
  height: 150px;
  background-color: white;
  border: 1px solid var(--main-gray);
  border-radius: 10px;
  overflow-y: scroll;
`;

const Region = styled.p`
  padding: 2px 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--main-light-gray);
  }
`;
