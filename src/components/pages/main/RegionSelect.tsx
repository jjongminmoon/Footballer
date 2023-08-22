import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { regionList } from "../register/registerData";

type Props = {
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<SetStateAction<string>>;
};

export default function RegionSelect({ selectedRegion, setSelectedRegion }: Props) {
  const [openSelectRegion, setOpenSelectRegion] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setOpenSelectRegion(true)}>
        {selectedRegion ? `${selectedRegion} 지역` : "지역 선택"}
      </Button>
      {openSelectRegion && (
        <RegionList>
          <p
            onClick={() => {
              setSelectedRegion("");
              setOpenSelectRegion(false);
            }}
          >
            전체
          </p>
          {regionList.map(({ name, value }) => (
            <p
              key={value}
              onClick={() => {
                setSelectedRegion(name);
                setOpenSelectRegion(false);
              }}
            >
              {name}
            </p>
          ))}
        </RegionList>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid var(--main-gray);
  border-radius: 8px;
  background-color: white;
  margin: 10px 0;

  :hover {
    background-color: var(--main-red);
  }
`;

const RegionList = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100px;
  padding: 10px;
  background-color: white;
  border: 1px solid var(--main-gray);
  border-radius: 10px;

  p {
    font-size: 13px;
    text-align: center;
    padding: 3px;
    margin-bottom: 5px;

    :hover {
      background-color: var(--main-gray);
      border-radius: 10px;
    }
  }
`;
