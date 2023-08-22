import styled from "@emotion/styled";
import { SetStateAction } from "react";
import { positionList } from "../registerData";

type Props = {
  position: string;
  setPosition: React.Dispatch<SetStateAction<string>>;
};

export default function PositionSelect({ position, setPosition }: Props) {
  return (
    <>
      <h3>선호 포지션</h3>
      <Select>
        {positionList.map(({ name }) => (
          <Position
            key={name}
            onClick={() => setPosition(name)}
            backgroundColor={name === position ? "var(--main-red)" : "var(--main-light-gray)"}
          >
            {name}
          </Position>
        ))}
      </Select>
    </>
  );
}

const Select = styled.div`
  display: flex;
  gap: 5px;
  font-size: 11px;
`;

const Position = styled.p<{ backgroundColor: string }>`
  width: 90px;
  padding: 5px;
  text-align: center;
  border: 1px solid var(--main-gray);
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
