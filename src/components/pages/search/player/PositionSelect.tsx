import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { positionList } from "../../register/registerData";

type Props = {
  selectedPosition: string;
  setSelectedPosition: React.Dispatch<SetStateAction<string>>;
};

export default function PositionSelect({ selectedPosition, setSelectedPosition }: Props) {
  const [openSelectPosition, setOpenSelectPosition] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setOpenSelectPosition(true)}>
        {selectedPosition ? selectedPosition : "포지션 선택"}
      </Button>
      {openSelectPosition && (
        <PositionList>
          <p
            onClick={() => {
              setSelectedPosition("");
              setOpenSelectPosition(false);
            }}
          >
            전체
          </p>
          {positionList.map(({ name, value }) => (
            <p
              key={value}
              onClick={() => {
                setSelectedPosition(name);
                setOpenSelectPosition(false);
              }}
            >
              {name}
            </p>
          ))}
        </PositionList>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-left: 10px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 1px solid var(--main-gray);
  border-radius: 8px;
  background-color: white;
  margin: 10px 0;
  font-weight: bold;

  :hover {
    background-color: var(--main-red);
  }
`;

const PositionList = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  width: 150px;
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
